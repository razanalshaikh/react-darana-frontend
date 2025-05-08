import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router'
import PlaceCard from '../PlaceCard/PlaceCard' 

export default function AllPlacesList() {
    const [allPlaces,setAllPlacesList] = useState([])

    async function getAllPlaces() {
        try{
            const response = await axios.get(`${import.meta.env.VITE_BASE_URL}places`)
            console.log(response)
            setAllPlacesList(response.data)
        }catch(error){
            console.log(error)
        }
        
    }
    useEffect(()=>{
        getAllPlaces()
    },[])

    return (
        <div className='container mt-6'>
            <div className='columns is-centered is-multiline mt-3'>
                {allPlaces.map((place) => (
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
