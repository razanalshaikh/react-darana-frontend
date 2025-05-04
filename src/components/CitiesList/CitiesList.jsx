import React from 'react'
import axios from 'axios'
import { Link } from 'react-router'
import { useState, useEffect } from 'react'
import CityCard from '../CityCard/CityCard'

function CitiesList() {
    const [cities,setCities] = useState([])

    async function getAllCities() {
        try{
            const response = await axios.get(`${import.meta.env.VITE_BASE_URL}cities`)
            console.log(response)
            setCities(response.data)
        }catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{
        getAllCities()
    },[])

    return (
        <div className='container mt-6'>
            <div className='columns is-centered is-multiline mt-3'>
                {cities.map((city) =>(
                    <div key={city.id} className='column is-half'>
                        <div> 
                            <h1>
                                <Link to={`/city/${city.id}`}><CityCard name = {city.name} image_url = {city.image_url}/></Link>
                            </h1>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default CitiesList