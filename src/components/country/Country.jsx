import { useState } from 'react';
import './Country.css'
const Country = ({ country }) => {
    console.log(country)
    const { name: { common }, flags: { png }, region, population, cca3 } = country;


    const [visited, setVisited] = useState(false)

    const handleVisited = () => {
        setVisited(!visited);
    }
    return (
        <div className="country">
            <div><img src={png} alt="" /></div>
            <h3>Country Name: {common} </h3>
            <p>Region: {region} </p>
            <p>Population: {population} </p>
            <p>Code: {cca3} </p>
            <button onClick={handleVisited}>
                {visited ? 'Visited' : 'Going'}
            </button>
        </div>
    );
};

export default Country;