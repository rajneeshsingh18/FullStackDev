import React, { useEffect, useState } from 'react'
import axios from 'axios'

// const Country = () => {

//     const [country , setCountry] = useState([]);

//     useEffect(()=>{
//         axios
//         .get(`https://studies.cs.helsinki.fi/restcountries/api/all`)
//         .then(response=>{
//             console.log([...response.data]);
//             setCountry([...response.data])
//         })
//     },[])
//   return (
//     <div>data_for_countries</div>
//   )
// }


const Country = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [countries, setCountries] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
  
    useEffect(() => {
      if (searchQuery) {
        axios
          .get(`https://studies.cs.helsinki.fi/restcountries/api/name/${searchQuery}`)
          .then(response => {
            const data = response.data;
            console.log(data);

            if (data.length > 10) {
              setErrorMessage('Too many matches. Please specify your search.');
              setCountries([]);
            } else {
              setCountries(data);
              setErrorMessage('');
            }
          })
          .catch(error => {
            setErrorMessage('Error occurred while fetching data.');
            setCountries([]);
            console.error(error);
          });
      } else {
        setCountries([]);
        setErrorMessage('');
      }
    }, [searchQuery]);
  
    const handleSearch = event => {
      setSearchQuery(event.target.value);
    };
  
    return (
      <div>
        <h1>Country Search</h1>
        <input type="text" value={searchQuery} onChange={handleSearch}  />
        {errorMessage && <p>{errorMessage}</p>}
        {countries.length > 0 && (
          <ul>
            {countries.map(country => (
              <li key={country.name.common}>{country.name.common}</li>
            ))}
          </ul>
        )}
      </div>
    );
  };
export default Country