import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'


const Countries = ({ CountriesPromise }) => {
    const [visitCount, setVisitCount] = useState([]);
    const [visitedCountryFlags, setVisitedCountryFlags] = useState([]);

    const handleVisitedFlags = (flags) => {
        const newFlags=[...visitedCountryFlags, flags];
        setVisitedCountryFlags(newFlags);

    }

    const handleVisitedCountries = (country) => {

        const newVisitCount = [...visitCount, country];
        setVisitCount(newVisitCount);
    }
    const countriesData = use(CountriesPromise)
    const countries = countriesData.countries;
    console.log(countries);
    return (
        <div>
            <h1>All Countries Here; Total: {countries.length}</h1>
            <p>Visited Countries: {visitCount.length}</p>
            <ol>
                {visitCount.map(country => <li>{country.name.common}</li>)
                }
            </ol>
            <div className='visited-flags-container'>
                <p>Visited Flags: {visitedCountryFlags.length}</p>
                {
                    visitedCountryFlags.map((flags, index)=><img  key={index} src={flags}></img>)
                }
            </div>
            <div className='cardGrid'>

                {
                    countries.map(country => <Country
                        handleVisitedFlags={handleVisitedFlags}
                        handleVisitedCountries={handleVisitedCountries}
                        key={country.cca3.cca3}
                        country={country}></Country>)

                }
            </div>
        </div>
    );
};

export default Countries;