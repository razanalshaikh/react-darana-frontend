import React from 'react'
import axios from 'axios'
import { Link } from 'react-router'
import { useState, useEffect } from 'react'

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
        <div>
            <ul>
                {cities.map((city) =>(
                    <li key={city.id}>
                        <div> 
                            <h2>{city.name}</h2>
                            <h2>{city.description}</h2>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default CitiesList