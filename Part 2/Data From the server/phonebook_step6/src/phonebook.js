import React, { useEffect, useState } from "react";

import axios from 'axios'

import phonebookServices from "./Services/phonebookServices";

const Phonebook = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

  useEffect(()=>{
    
    phonebookServices
    .getAll()
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

      // 2.12: The Phonebook step7
      phonebookServices
    .create(newPerson)
    .then(response=>{
      // console.log(response);
      console.log(response.data);
    })
    } 
  };

   // 2.14: The Phonebook step9
   const deletePerson = (person) =>{
    const confirmErase =window.confirm(`Delete ${person.name}`);

    // if(confirmErase){
    //   axios
    //   .delete(`http://localhost:3031/persons/${person.id}`)
    //   .then((response) => {
    //     if (response.status === 200) {
    //       const updatedPersons = persons.filter((p) => p.id !== person.id);
    //       setPersons(updatedPersons);
    //     }
    //   })

    if(confirmErase){
      phonebookServices
      .erase(person.id)
      .then((response) => {
        if (response.status === 200) {
          const updatedPersons = persons.filter((p) => p.id !== person.id);
          setPersons(updatedPersons);
        }
      })
      
    }
  }

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