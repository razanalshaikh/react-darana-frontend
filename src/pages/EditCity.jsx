import axios from 'axios'
import React, { use, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import CityForm from '../components/CityForm/CityForm'
import { ToastContainer, toast } from 'react-toastify'
import { authorizedRequest } from '../lib/api'


function EditCity() {
    const {id} = useParams()
    const [name,setName] = useState('')
    const [description, setDescription] = useState('')
    const [imageURL,setImageURL] = useState('')
    const [imageFile, setImageFile] = useState(null)


    const navigate = useNavigate()

    async function getCurrentCityData() {
        try{
            const response = await axios.get(
                `${import.meta.env.VITE_BASE_URL}cities/${id}/`
            )
            setName(response.data.name)
            setDescription(response.data.description)
            setImageURL(response.data.image_url)
        }catch(error){  
            console.log(error)
            if(error.request.status === 401){
                toast.error('Unauthorized access 401')
            }else{
                toast.error("Something Went Wrong!")
            }
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
                const payload = {name, description, image_url: cloudinaryImgUrl}
                const respone = await authorizedRequest(
                    'patch',
                    `cities/${id}/`,
                    payload
                )
                if(respone.status === 200){
                    toast.success('City Information has been Submitted')
                    setTimeout(()=>{
                        navigate(`/city/${id}`)
                    },3500)
                }
            }catch(err){
                if(err.request.status === 401){
                    toast.error("Unauthorized access")
                    setTimeout(()=>{
                        navigate(`/login`)
                    },3500)
                }else{
                    toast("Something Went Wrong!")
                }
            }
        }else{
            try{             
                const response = await authorizedRequest(
                    'patch',
                    `cities/${id}/`,
                    {name,description,image_url:imageURL}
                )
                
                if(response.status === 200){
                    toast.success('City Information has been Submitted')
                    setTimeout(()=>{
                        navigate(`/city/${id}`)
                    },3500)
                }
                if(response.status === 401){
                    toast.error("Unauthorized access")
                    setTimeout(()=>{
                        navigate(`/login`)
                    },4500)
                }
                }catch(error){
                    toast("Something Went Wrong!")
            }
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
                setImageFile={setImageFile}
            />
            <ToastContainer  position='top-center'/>
        </div>
    )
}
export default EditCity