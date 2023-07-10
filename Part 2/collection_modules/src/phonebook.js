import React, { useState } from "react";

const Phonebook = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

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