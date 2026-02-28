import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'


const Countries = ({ CountriesPromise }) => {
    const [visitCount, setVisitCount] = useState([]);

    const handleVisitedCountries = (country) => {

        const newVisitCount = [...visitCount,country];
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
                    {visitCount.map(country=><li>{country.name.common}</li>)
                    }
                </ol>
            <div className='cardGrid'>
                
                {
                    countries.map(country => <Country
                        handleVisitedCountries={handleVisitedCountries}
                        key={country.cca3.cca3}
                        country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;