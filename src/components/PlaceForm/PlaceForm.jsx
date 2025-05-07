import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import axios from 'axios'
import { useEffect } from 'react'
import { authorizedRequest } from '../../lib/api'


function PlaceForm(props) {

    const navigate = useNavigate()
    const [categories,setCategories] = useState([])
    const [cities,setCities] = useState([])

    async function getCategories() {
        try{
            const response = await axios.get(`${import.meta.env.VITE_BASE_URL}categories`)
            // const response = authorizedRequest(
            //     'get',
            //     'categories'
            // )
            console.log(response.data)
            setCategories(response.data)
        }catch(error){
            console.log(error)
        }
    }

    async function getAllCities() {
        try{
            const response = await axios.get(`${import.meta.env.VITE_BASE_URL}cities`)
            // const response = authorizedRequest(
            //     'get',
            //     'cities'
            // )
            console.log(response)
            setCities(response.data)
        }catch(err){
            console.log(err)
        }
    }

    function handleCancel (){
        console.log("handle cancel")
        navigate(-1)
    }

    useEffect(()=>{
        getCategories()
        getAllCities()
    },[])
    return (
        <div className='container is-flex is-align-items-center is-justify-content-center mt-6 pt-6 mb-6'>
            <div 
            className='box  mt-6 has-background-light is-centered'
            style={{width:'45vw', height:'75vh'}}
            >
                <h3 className='title is-4 has-text-black has-text-centered'>{props.title}</h3>
                <form onSubmit={props.handleSubmit}>
                    <div className='field'>
                            <label htmlFor="name" className='has-text-grey-dark is-size-5 '>Place Name</label>
                            <input
                                id='name'
                                name='name'
                                type='text'
                                required
                                value={props.name}
                                onChange={event => props.setName(event.target.value)}
                                className="input has-background-white has-text-grey-dark"
                                placeholder='Enter city name'
                            />
                    </div>
                    <div className='field'>
                        <label htmlFor="description"  className='has-text-grey-dark is-size-5' >Place Description</label>
                        <textarea 
                        className='textarea is-medium has-background-white has-text-grey-dark'
                        name="description" 
                        id="description" 
                        maxLength="255" 
                        readOnly={false} 
                        required
                        placeholder='Enter city description'
                        onChange={event => props.setDescription(event.target.value)}
                        value={props.description}></textarea>
                    </div>
                    <div  className='field'> 
                        <label htmlFor='imgUpload' className='has-text-grey-dark is-size-5'>Image  </label>
                        <input
                        type='file'
                        accept='image/*'
                        onChange={event =>props.setImageFile(event.target.files[0])}
                        />
                    </div>
                    <div className='field'>
                        <label htmlFor="category" className='has-text-grey-dark is-size-5'>Category </label>
                                <div className="select">
                                    <select
                                        onChange={event => props.setCategory(event.target.value)}
                                        value ={props.category}
                                        className=' has-background-white has-text-grey-dark'
                                        >  
                                        {categories.map((category,index) =>(
                                            <option key={index}>{category}</option>
                                        ))}
                                    </select>
                                </div>
                    </div>
                    <div className='field'>
                        <label htmlFor="city" className='has-text-grey-dark is-size-5'>City </label>
                                <div className="select">
                                    <select
                                        onChange={event => props.setCity(event.target.value)}
                                        value ={props.city}
                                        className=' has-background-white has-text-grey-dark'>
                                        {cities.map((city,index) =>(
                                            
                                            <option key={city.id} value={city.id}>{city.name}</option>
                                        ))
                                        }
                                    </select>
                                </div>
                    </div>
                    <div className='field is-grouped'>
                        <button type='submit' className='button is-success '>Submit</button>
                        <button type='button' className='button is-light' onClick={handleCancel}>Cancel</button>
                    </div>
                </form>
            </div>  
        </div>
    )
}
export default PlaceForm