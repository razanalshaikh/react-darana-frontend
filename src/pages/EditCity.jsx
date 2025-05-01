import axios from 'axios'
import React, { use, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import CityForm from '../components/CityForm/CityForm'

function EditCity() {
    const {id} = useParams()
    const [name,setName] = useState('')
    const [description, setDescription] = useState('')
    const navigate = useNavigate()

    async function getCurrentCityData() {
        try{
            const response = await axios.get(`${import.meta.env.VITE_BASE_URL}cities/${id}/`)
            setName(response.data.name)
            setDescription(response.data.description)
        }catch(error){
            console.log(error)
        }     
    }

    async function handleSubmit(event){
        event.preventDefault()
        try{
                const response = await axios.patch(
                    `${import.meta.env.VITE_BASE_URL}cities/${id}/`,
                    {name,description})
                navigate(`/city/${id}`)
        }catch(error){
            console.log(error)
        }
    }

    useEffect(()=>{
        getCurrentCityData()
    },[])

    return (
        <div>
            <CityForm
                titleVerb = 'Edit City information'
                name ={name}
                setName={setName}
                description = {description}
                setDescription = {setDescription}
                handleSubmit = {handleSubmit}
            />
        </div>
    )
}
export default EditCity