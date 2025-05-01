import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams , useNavigate, Link} from 'react-router'

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

    const [deleteConfirm, setDeleteConfirm] = useState(false)
    async function deleteCity(){
        try{
            const response = await axios.delete(`${import.meta.env.VITE_BASE_URL}cities/${id}/`)
            if(response.status === 202){
                navigate('/cities')
            }
        }catch(error){
            console.log(error)
            setErrorMessage('Something went Wrong!')
        }
    }
    function showConfirmDelete() {
        setDeleteConfirm(true)
    }

    if (errorMessage) return <h1>{errorMessage}</h1>
    if(!city) return  <span className="loader-mixin">{errorMessage}</span>
    return (
        <div>
            <div>
                <h1>{city.name}</h1>
                <h1>{city.description}</h1> 
            </div>

            <div className='buttons'>
                <Link to={`/city/${id}/edit`} className="button is-success"> Edit </Link>
                {
                    deleteConfirm 
                    ?
                    <button className="button is-danger" onClick={deleteCity}>Are you Sure?</button>
                    :
                    <button className="button is-danger" onClick={showConfirmDelete}>Delete</button>
                }
            </div>
        </div>
    )
}
export default CityDetails