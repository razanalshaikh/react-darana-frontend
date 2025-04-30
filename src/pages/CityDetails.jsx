import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams , useNavigate} from 'react-router'

function CityDetails() {
    const {id} = useParams()
    const [city, setCity] = useState(null)
    const [errorMessage, setErrorMessage] = useState('')
    const navigate = useNavigate()

    async function getSingleCity(){
        try{
            const response = await axios.get(`${import.meta.env.VITE_BASE_URL}cities/${id}`)
            setCity(response.data)
        }catch(err){
            if(err.status === 404){
                navigate('/Not-Found')
            }else{
                setErrorMessage('something went wrong! Try again in a few minutes.')
            }
        }
    }
    useEffect(()=>{
        getSingleCity()
    },[])

    if (errorMessage) return <h1>{errorMessage}</h1>
    if(!city) return  <span className="loader-mixin">{errorMessage}</span>
    return (
        <div>
            <h1>{city.name}</h1>
            <h1>{city.description}</h1>
        </div>
    )
}
export default CityDetails