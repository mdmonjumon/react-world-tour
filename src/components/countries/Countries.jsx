import { useEffect } from "react";
import { useState } from "react";
import Country from "../country/Country";
import './Countries.css';


const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountry, setVisitedCountry] = useState([]);
    const [flagCountry, setFlagCountry] = useState([])

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])

    const handleMarkVisitedCountry = (country) => {
        const newvisitedCountry = [...visitedCountry, country];
        setVisitedCountry(newvisitedCountry);
    }

    const handleFlagCountry = (flag)=>{
        setFlagCountry([...flagCountry, flag]);
        console.log(flagCountry)
        
    }

    return (
        <div>
            <h2>Countries: {countries.length} </h2>
            <h4>Visited Countries: {visitedCountry.length} </h4>
            <div>
                <ul>
                {
                    visitedCountry.map(visitedCountyName => <li key={visitedCountyName.cca3}>
                        {visitedCountyName.name.common}</li>)
                }
                </ul>

                <div>
                {
                    flagCountry.map((countryFlag, indx)=> 
                        <img className="flag" key={indx} src={countryFlag} alt="" />
                     )
                }

                </div>
            </div>

            <div className="country-container">
                {
                    countries.map(country =>
                        <Country key={country.name.common}
                            country={country}
                            handleMarkVisitedCountry={handleMarkVisitedCountry}
                            handleFlagCountry={handleFlagCountry}
                        >

                        </Country>)
                }
            </div>


        </div>
    );
};

export default Countries;