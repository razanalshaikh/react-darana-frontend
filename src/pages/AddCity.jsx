import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import CityForm from '../components/CityForm/CityForm'
import axios from 'axios'

function AddCity() {
    const [name,setName] = useState('')
    const [description,setDescription] = useState('')
    const navigate = useNavigate()
    async function handleSubmit() {
        event.preventDefault()
        try{
            console.log('handle submit function is running')
            const payload = {name, description}
            const response = await axios.post(`${import.meta.env.VITE_BASE_URL}cities/`,payload)
            console.log(response)
            navigate('/cities')
        }catch(err){
            console.log(err)
        }
        
    }

    return (
        <div>
            <CityForm
                titleVerb = 'Add New City'
                name = {name}
                setName = {setName}
                description = {description}
                setDescription = {setDescription}
                handleSubmit = {handleSubmit}
            />
        </div>
    )
}
export default AddCity
