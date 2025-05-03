import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import CityForm from '../components/CityForm/CityForm'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'

function AddCity() {
    const [name,setName] = useState('')
    const [description,setDescription] = useState('')
    const navigate = useNavigate()
    const [imageFile, setImageFile] = useState(null)

    async function handleSubmit() {
        event.preventDefault()
        let cloudinaryImgUrl = ''
        const formData = new FormData()
        formData.append('file', imageFile)
        formData.append('upload_preset', import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET)
        try{
            const cloudinaryResponse = await axios.post(
                `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_NAME}/image/upload`,
                formData
            )
            cloudinaryImgUrl = cloudinaryResponse.data.secure_url
            console.log('Cloudinary Image URL:', cloudinaryImgUrl);
        }catch(error){
            console.log(error)
        }
        try{
            console.log('handle submit function is running')
            const payload = {name, description, image_url: cloudinaryImgUrl}
            const response = await axios.post(`${import.meta.env.VITE_BASE_URL}cities/`,payload)
            toast('City Information has been Submitted')
            setTimeout(()=>{
                navigate('/cities')
            },4000)
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
                setImageFile={setImageFile}
            />
                <ToastContainer position='top-center'/>
        </div>
    )
}
export default AddCity
