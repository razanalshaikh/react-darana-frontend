import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router'
import PlaceCard from '../PlaceCard/PlaceCard'
import { Link } from 'react-router'

function PlacesList(props) {
    const {id} = useParams()
    const [placesOfCity, setPlacesOfCity] = useState([])

    async function getAllPlacesOfCity() {
        try{
            const response = await axios.get(`${import.meta.env.VITE_BASE_URL}cities/${id}/places`)
            console.log(response)
            setPlacesOfCity(response.data)
        }catch(error){
            console.log(error)
        }
        
    }
    useEffect(()=>{
        getAllPlacesOfCity()
    },[])

    return (
        <div className='container mt-6'>
            <div className='columns is-centered is-multiline mt-3'>
                {placesOfCity.map((place) => (
                    <div key={place.id} className='column is-one-third'>
                        <div>
                            <Link to={`/places/${place.id}`}><PlaceCard place = {place}/></Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default PlacesList