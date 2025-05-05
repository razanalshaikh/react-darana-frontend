import React from 'react'
import PlaceForm from '../components/PlaceForm/PlaceForm'
import { useNavigate } from 'react-router'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import { useState } from 'react'

function AddPlace() {
    
    const [name,setName] = useState('')
    const [description,setDescription] = useState('')
    const navigate = useNavigate()
    const [imageFile, setImageFile] = useState(null)
    const [city,setCity] = useState('')
    const [cityId,setCityId] = useState()
    const [category,setCategory] = useState('')

    async function handleSubmit() {
        console.log(cityId)
        console.log(city)
        event.preventDefault()
        console.log(imageFile)
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
            const payload = {name, description, city: cityId, category, image_url: cloudinaryImgUrl}
            const response = await axios.post(`${import.meta.env.VITE_BASE_URL}places/`,payload)
            toast('Place Information has been Submitted')
            setTimeout(()=>{
                navigate('/places')
            },4000)
        }catch(err){
            console.log(err)
        }
    }
    return (
        <div>
            <PlaceForm
            title = 'Add New Place'
            name ={name}
            setName={setName}
            city = {city}
            setCity = {setCity}
            description = {description}
            setDescription = {setDescription}
            category = {category}
            setCategory = {setCategory}
            handleSubmit = {handleSubmit}
            setImageFile={setImageFile}
            cityId = {cityId} 
            setCityId = {setCityId}
            />
            <ToastContainer position='top-center'/>
        </div>
    )
    }
export default AddPlace
