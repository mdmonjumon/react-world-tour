import { useEffect } from "react";
import { useState } from "react";
import Country from "../country/Country";
import './Countries.css';


const Countries = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])



    return (
        <div>
            <h2>Countries: {countries.length} </h2>

            <div className="country-container">
                {
                    countries.map(country =>
                        <Country key={country.name.common} country={country}>

                        </Country>)
                }
            </div>


        </div>
    );
};

export default Countries;