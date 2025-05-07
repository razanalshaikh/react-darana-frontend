import React from 'react'
import { useParams, useNavigate } from 'react-router'
import { useState,useEffect } from 'react'
import PlaceForm from '../components/PlaceForm/PlaceForm'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import { authorizedRequest } from '../lib/api'

function EditPlace() {

    const {id} = useParams()
    const [name,setName] = useState('')
    const [description, setDescription] = useState('')
    const [imageURL,setImageURL] = useState(null)
    const [city,setCity] = useState('')
    const [category,setCategory] = useState('')
    const [imageFile, setImageFile] = useState(null)
    const navigate = useNavigate()
    const [cityId,setCityId] = useState()

    async function getCurrentPlaceData() {
        try{
            const response = await axios.get(`${import.meta.env.VITE_BASE_URL}places/${id}/`)
            
            setName(response.data.name)
            setDescription(response.data.description)
            setImageURL(response.data.image_url)
            setCity(response.data.city)
            setCategory(response.data.category)
            console.log(response.data)

        }catch(error){
            console.log(error)
        }     
    }
    async function handleSubmit(event){
        event.preventDefault()
        // check if Image file is null this means 
        // no image added in edit keep the image already inserted in DB
        // if is not null means an image added 
        // then upload the new image to cloudinary
        if (imageFile !== null){
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
                const payload = {name, description, city,category, image_url: cloudinaryImgUrl}
                console.log(payload)
                const response = await authorizedRequest(
                    'patch',
                    `${import.meta.env.VITE_BASE_URL}places/${id}/`,
                    payload
                )
                if(response.status === 200){
                    toast.success('Place Information has been Submitted')
                    setTimeout(()=>{
                        navigate(`/places/${id}`)
                    },3500)
                }
                if(response.status === 401){
                    toast.error("Unauthorized access")
                    setTimeout(()=>{
                        navigate(`/login`)
                    },3500)
                }
            }catch(err){
                toast.error('Something Went Wrong!')
            }
        }else{
            try{    
            const response = await authorizedRequest(
                'patch',
                `places/${id}/`,
                {name,description, city, category, image_url:imageURL}
            )
                if(response.status === 200){
                    toast.success('Place Information has been Submitted')
                    setTimeout(()=>{
                        navigate(`/places/${id}`)
                    },3500)
                }
                if(response.status === 401){
                toast.error("Unauthorized access")
                setTimeout(()=>{
                    navigate(`/login`)
                },3500)
                }
            
            }catch(error){
                toast.error('Something Went Wrong!')
            }
        }
    }
    useEffect(()=>{
        getCurrentPlaceData()
    },[])

    return (
        <div>
            <PlaceForm
                title = 'Edit Place information'
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
export default EditPlace