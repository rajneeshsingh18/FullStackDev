import React, { useEffect, useState } from "react";

import phonebookServices from "./Services/phonebookServices";



const Notification = ({ message }) => {
  // console.log(message);
  if (message === null) {
    return null
  }
  return (
    <>
      <div className="error">
        {message}
      </div>
    </>
  )
}

const Phonebook = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {

    phonebookServices
      .getAll()
      .then(response => {
        console.log(response.data);
        setPersons(response.data)
      })
  }, [])

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const addDetails = (event) => {
    event.preventDefault();

    // Check if the name or number already exists in the phonebook
    const existingPerson = persons.find(
      (person) => person.name === newName || person.number === newNumber
    );

    if (existingPerson) {
      alert(`${newName} or ${newNumber} is already added to the phonebook.`);
    } else {
      const newPerson = { name: newName, number: newNumber };
      setPersons([...persons, newPerson]);
      setNewName('');
      setNewNumber('');
      // setErrorMessage(`Updated ${newPerson.number} for ${newPerson.name}`);
      setErrorMessage(`Added ${newPerson.name} having number ${newPerson.number}`)
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000);

      // 2.12: The Phonebook step7
      phonebookServices
        .create(newPerson)
        .then(response => {
          // console.log(response);
          console.log(response.data);
        })
        .catch((error) => {
          console.error(error);
          setErrorMessage('Error occurred during number update');
          setTimeout(() => {
            setErrorMessage(null)
          }, 5000)
        });
    }
  };

  // 2.14: The Phonebook step9
  const deletePerson = (person) => {
    const confirmErase = window.confirm(`Delete ${person.name}`);

    if (confirmErase) {
      phonebookServices
        .erase(person.id)
        .then((response) => {
          if (response.status === 200) {
            const updatedPersons = persons.filter((p) => p.id !== person.id);
            setPersons(updatedPersons);
            setErrorMessage(`Deleted ${person.name} having number ${person.number}`);
          }
        })
        .catch((error) => {
          // console.error(error);
          setErrorMessage(
            `Deleted `
          )

          setTimeout(() => {
            setErrorMessage(null)
          }, 5000
          )
        })



    }
  }

  return (
    <>
    <div className="phonebook__container">
      <h1 className="phonebook__container-h1">Phonebook</h1>
      <Notification message={errorMessage} />
      <form className="phonebook__container_form" onSubmit={addDetails}>
        <label>Name   </label> <br/>
        <input value={newName} onChange={handleNameChange} />
        <br/>
        <label>Number </label> <br/>
        <input value={newNumber} onChange={handleNumberChange} />
        <br/>

        <button class="button-29" role="button" type="submit">Add Detailes</button>
      </form>
    </div>


      <div className="phonebook__detailes"> 
        <h1 className="phonebook__detailes-h1">Names and Numbers:</h1>
      <ul>
        {persons.map((person, i) => (
          <li key={i}>
            {person.name} <span> : </span> {person.number}
            <br/>

            <button class="button-29" style={{height:"20px"}}role="button" onClick={() => deletePerson(person)}>Delete</button>
          </li>

        ))}
      </ul>
      </div>

      </>
  );
};



export default Phonebook;
