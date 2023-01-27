import React, { useState, useEffect } from 'react'
import { apiURL } from './utils/api'
import '../App.css'
import SearchInput from './SearchInput'
import Filter from './Filter'
import { useNavigate } from 'react-router-dom'

const AllCountries = () => {

    const[countries, setCountries]= useState([])
    const[isLoading, setIsLoading]= useState(false)
    const [error, setError] = useState('')
    const navigate = useNavigate();

    const switchPage = (countryName) => {
        navigate(`/country/${countryName}`);
    };

    const getAllCountries =async () => {
        try {
            const resp = await fetch(`${apiURL}/all`)
            if (!resp.ok) throw new Error('Something went wrong')
            
            const data = await resp.json()
            setCountries(data)
            
        } catch (error) {
            setIsLoading(false)
            setError(error.message)
        }
    }
    const getCountryByName =async (countryName) => {
        try {
            const resp = await fetch(`${apiURL}/name/${countryName}`)
            if (!resp.ok) throw new Error('Country not found')
            
            const data = await resp.json()
            setCountries(data)

        } catch (error) {
            setIsLoading(false)
            setError(error.message)
        }
    }
    const getFilterCountry =async (regionName) => {
        try {
            const resp = await fetch(`${apiURL}/region/${regionName}`)
            if (!resp.ok) throw new Error('Region not found')
            
            const data = await resp.json()
            setCountries(data)

        } catch (error) {
            setIsLoading(false)
            setError(error.message)
        }
    }
 
    useEffect(() => {
        getAllCountries()
    }, [])

  return (
    <div className='container_countries'>
        <section className='container'>
            <div className="d-lg-flex flex-sm-row  justify-content-between align-content-center py-4">
                {/* call the getAllCountries inside the SearchInput as props */}
                <SearchInput onSearch={getCountryByName} />
                <Filter onSelect={getFilterCountry} />
            </div>
            <div className='row'>
                {isLoading && !error && <h4 className='d-flex justify-content-center align-items-center text-center'>Loading...</h4>}
                {error && !isLoading && <h4>{error}</h4>}
                {
                    countries.map(country => (
                        <div onClick={() => switchPage(country.name.common)} className='countries col-lg-3 col-md-4 col-sm-1'>
                            <div className="card border-0 mb-5 countries_img" key={country.numericCode}>
                                <img src={country.flags.png} className="card-img-top" alt="flag" />
                                <div className="countriesInfo card-body p-3">
                                    <h2 className='py-2'>{ country.name.common}</h2>
                                    <h4>Population: <span>{ country.population.toLocaleString()}</span></h4>
                                    <h4>Region: <span>{ country.region}</span></h4>
                                    <h4>Capital: <span>{ country.capital}</span></h4>
                                </div>
                                
                            </div>
                        </div>
                        
                    ))
                }
            </div>
        </section>
    </div>
  )
}

export default AllCountries
