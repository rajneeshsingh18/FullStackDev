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
    <div>
      <h1>Phonebook</h1>
      <Notification message={errorMessage} />
      <form onSubmit={addDetails}>
        <label>Name  :</label>
        <input value={newName} onChange={handleNameChange} />
        <br/>
        <label>Number :</label>
        <input value={newNumber} onChange={handleNumberChange} />
        <br/>

        <button type="submit">Add Detailes</button>
      </form>

      <h2>Names and Numbers:</h2>
      <ul>
        {persons.map((person, i) => (
          <li key={i}>
            {person.name} {person.number}

            <button onClick={() => deletePerson(person)}>Delete</button>
          </li>

        ))}
      </ul>
    </div>
  );
};


/*
import axios from 'axios';

const Phonebook = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

  useEffect(()=>{
    axios
    .get('http://localhost:3031/persons')
    .then(response=>{
      console.log(response.data);
      setPersons(response.data)
    })
  },[])

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const addDetails = (event) => {
    event.preventDefault();

    // Check if the name or number already exists in the phonebook
    const existingContact = persons.find(
      (person) => person.name === newName || person.number === newNumber
    );
    if (existingContact) {
      alert(`${newName} or ${newNumber} is already added to the phonebook.`);
    } else {
      const newPerson = { name: newName, number: newNumber };
      setPersons([...persons, newPerson]);
      setNewName('');
      setNewNumber('');

      // 2.12: The Phonebook step7
      axios
    .post('http://localhost:3031/persons' ,newPerson)
    .then(response=>{
      // console.log(response);
      console.log(response.data);
    })
    }

    
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <form onSubmit={addDetails}>
        <label>Name:</label>
        <input value={newName} onChange={handleNameChange} />
        <button type="submit">Add Name</button>

        <label>Number:</label>
        <input value={newNumber} onChange={handleNumberChange} />
        <button type="submit">Add Number</button>
      </form>

      <h2>Names and Numbers:</h2>
      <ul>
        {persons.map((person, index) => (
          <li key={index}>
            {person.name} {person.number}
          </li>
        ))}
      </ul>
    </div>
  );
};

*/

export default Phonebook;

/*
const Phonebook = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

  useEffect(()=>{
    axios
    .get('http://localhost:3031/persons')
    .then(response=>{
      console.log(response.data);
      setPersons(response.data)
    })
  },[])

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const addDetails = (event) => {
    event.preventDefault();

    // Check if the name or number already exists in the phonebook
    const existingContact = persons.find(
      (person) => person.name === newName || person.number === newNumber
    );
    if (existingContact) {
      alert(`${newName} or ${newNumber} is already added to the phonebook.`);
    } else {
      const newPerson = { name: newName, number: newNumber };
      setPersons([...persons, newPerson]);
      setNewName('');
      setNewNumber('');
    }
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <form onSubmit={addDetails}>
        <label>Name:</label>
        <input value={newName} onChange={handleNameChange} />
        <button type="submit">Add Name</button>

        <label>Number:</label>
        <input value={newNumber} onChange={handleNumberChange} />
        <button type="submit">Add Number</button>
      </form>

      <h2>Names:</h2>
      <ul>
        {persons.map((person, index) => (
          <li key={index}>
            {person.name} {person.number}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Phonebook;
*/

/*
import React, { useState } from "react";


const Phonebook = () => {

    const [persons, setPersons] = useState([]);
    const [newName, setNewName] = useState('')
    const [newNumber , setNewNumber]= useState(' ')


    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }

    const handleNumberChange=(event)=>{
        setNewNumber(event.target.value)
    }

    const addDetails = (event) => {


        event.preventDefault()

        // 2.7: The Phonebook Step2
        if (persons.find((contact) => contact.name === newName || contact.number === newNumber)) {
            alert(`${newName} or ${newNumber}is already added to phonebook`);
        }
        else {

            setPersons(persons.concat(newName,newNumber))
            // setPersons(persons.concat(newNumber))
            setNewName('');
            setNewNumber('');
        }

    }


    

    return (
        <>
            <div>
                <h1>
                    Phonebook
                </h1>
                <form onSubmit={addDetails}>
                    <label>Name : </label>
                    <input value={newName} onChange={handleNameChange} />
                    <button type="submit"> Add name</button>

                    <label>Number : </label>
                    <input value={newNumber} onChange={handleNumberChange} />
                    <button type="submit"> Add Number</button>
                </form>

                <h2>Names :</h2>
                <ul>
                    {persons.map(person => <li> {person.name} {person.number}</li>)}
                </ul>
            </div>



        </>
    )
}

export default Phonebook
*/