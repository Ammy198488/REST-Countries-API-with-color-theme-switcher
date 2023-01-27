import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { apiURL } from './utils/api'
import '../App.css'
import { Icon } from '@iconify/react';

const CountryInfo = () => {

    const[country, setCountry]= useState([])
    const[isLoading, setIsLoading]= useState(true)
    const [error, setError] = useState('')
    const { countryName } = useParams();
   
    useEffect(() => {
        const getCountryByName =async () => {
            try {
                const resp = await fetch(`${apiURL}/name/${countryName}`);
                if (!resp.ok) throw new Error('Not found')
                
                const data = await resp.json()
                setCountry(data)
                setIsLoading(false)
                console.log(data)
            } catch (error) {
                setIsLoading(false)
                setError(error.message)
            }
        }
        
        getCountryByName()
    }, [countryName])
    
  return (
      <div className='singlecountry'>
        <div className="container">
            <button type="button" className="btn mt-5 mx-5">
                <Link style={{textDecoration:'none', color: 'black'}} className='back shadow p-2 mb-5 rounded' to="/"><Icon icon="material-symbols:arrow-back-rounded" />Back</Link>
            </button>
            {isLoading && !error && <h4>Loading...</h4>}
            {error && !isLoading && <h4>{error}</h4>}
            <section>
                {country.map((country) => (
                    <article className='d-lg-flex flex-sm-row justify-content-between align-content-center pt-5 country_img'>
                        <img src={country.flags.png} alt="" />
                        <div className="align-content-center">
                            <h2 className='fs-2'>{country.name.common}</h2>
                            <div className='pt-3'>
                                <h4>Native name: <span>{ country.region}</span></h4>
                                <h4>Population: <span>{ country.population.toLocaleString()}</span></h4>
                                <h4>Region: <span>{ country.region}</span></h4>
                                <h4>Sub-region: <span>{ country.subregion}</span></h4>
                                <h4>Capital: <span>{ country.capital}</span></h4>
                            </div>
                        </div>
                        <div className="pt-5">
                            <h4>Top-level Domain: <span>{ country.tld}</span></h4>
                            <h4>Currencies: <span>{ country.currencies.name}</span></h4>
                            <h4>Languages: <span>{ country.languages.name}</span></h4>
                        </div>
                        
                    </article>
                ))}
            </section>
        </div>
    </div>
  )
}

export default CountryInfo
