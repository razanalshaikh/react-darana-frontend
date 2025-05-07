import React from 'react'
import PlaceForm from '../components/PlaceForm/PlaceForm'
import { useNavigate } from 'react-router'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import { useState } from 'react'
import { authorizedRequest } from '../lib/api'

function AddPlace() {
    
    const [name,setName] = useState('')
    const [description,setDescription] = useState('')
    const navigate = useNavigate()
    const [imageFile, setImageFile] = useState(null)
    const [city,setCity] = useState('')
    const [cityId,setCityId] = useState()
    const [category,setCategory] = useState('')

    async function handleSubmit() {
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
            toast.error('Unable to uplaod Image!')
        }
        try{
            console.log('handle submit function is running')
            const response = authorizedRequest(
                'POST',
                `places/`,
                {name, description, city: city, category, image_url: cloudinaryImgUrl}
            )
            console.log(response.status)
            if(response.status === 201){
                toast.success('Place Information has been Submitted')
                setTimeout(()=>{
                        navigate('/places')
                    },3000)
            }
        }catch(err){
            if(err.request.status === 401){
                    toast.error("Unauthorized access")
                }else{
                    toast.error('Something Went Wrong!')
                }
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
