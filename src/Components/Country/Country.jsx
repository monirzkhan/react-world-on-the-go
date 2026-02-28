import React, { useState } from 'react';
import './Country.css'

const Country = ({ country,handleVisitedCountries }) => {
    console.log(country);
    const [visited, setVisited] = useState(false);
    
    const handleVisit = () => {
        // if(visited){
        //     setVisited(false)
        // }
        // else{
        //     setVisited(true)
        // }


        // setVisited(visited ? false: true)
        setVisited(!visited);
       
        handleVisitedCountries (country);

    }
    return (
        <div>
            <div className={visited?'card cardBg':'card'}>
                <img src={country.flags.flags.png} alt={country.flags.flags.alt} srcset="" />
                <h3>Country Name:  {country.name.common}</h3>
                <p>Population: {country.population.population}
                    {country.population.population > 100000000 ? 'Big Populated Country' : ''}</p>
                <button onClick={handleVisit}>
                    {visited ? 'Visited' : 'Not Visited'}
                </button>
            </div>
        </div>
    );
};

export default Country;