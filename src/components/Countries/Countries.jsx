import React, { use } from 'react';
import Country from './Country';
import './Country.css'



const Countries = ({countriesPromise}) => {
    const countriesData = use(countriesPromise)
    const countries = countriesData.countries;
    return (
        <div>
            <h2>All Country Here : {countries.length}</h2>

            <div  className='grid'>
                {
                    countries.map(country => <Country country={country}></Country>)
                }
            </div>

            

        </div>
    );
};

export default Countries;