import React, { use } from 'react';
import Country from '../Country/Country';
import './Countries.css'


const Countries = ({CountriesPromise}) => {
    const countriesData=use(CountriesPromise)
    const countries=countriesData.countries;
    console.log(countries);
    return (
        <div>
            <h1>All Countries Here; Total: {countries.length}</h1>
           <div className='cardGrid'>
             {
                countries.map(country=><Country key={country.cca3.cca3} country={country}></Country>)
            }
           </div>
        </div>
    );
};

export default Countries;