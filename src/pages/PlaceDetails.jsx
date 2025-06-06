import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import axios from 'axios'
import { Link } from 'react-router'
import { ToastContainer, toast} from 'react-toastify'
import { authorizedRequest } from '../lib/api'
function PlaceDetails() {
    const { id } = useParams()
    const [place, setPlace] = useState(null)
    const navigate = useNavigate()
    const [errorMessage, setErrorMessage] = useState('')

    async function getSinglePlace() {
        try {
            console.log(id)
            const response = await axios.get(`${import.meta.env.VITE_BASE_URL}places/${id}/`)
            setPlace(response.data)
            console.log(response.data)
        } catch (error) {
            if (error.request.status === 404) {
                navigate('/Not-Found')
            } else {
                setErrorMessage('Something went wrong! Try again in a few minutes.')
            }
        }
    }
    const [deleteConfirm, setDeleteConfirm] = useState(false)
    async function deletePlace(){
        try{
            const response = await authorizedRequest('delete',
                `places/${id}/`)
            console.log(response)
            if(response.status === 200){
                    toast.success('Place Deleted Successfully!')
                    setTimeout(()=>{
                        navigate("/places")
                        },4000)
            }
        }catch(error){
            console.log(error)
            if (error.response && error.response.status === 401) {
                toast.error("Unauthorized Access!")
            } else {
                toast.error('Something went Wrong!')
            }
        }
    }
    function showConfirmDelete() {
        setDeleteConfirm(true)
    }

    useEffect(() => {
        getSinglePlace()
    }, [])

    if (errorMessage) return <h1>{errorMessage}</h1>
    if (!place) return <span className="loader-mixin">{errorMessage}</span>

    return (
        <div className='mt-6 pt-6 pl-6'>
            <div className='container mt-6'>
            <h1 className='title has-text-black is-1 pt-4'>{place.name}</h1>
                <div className='has-text-centered pr-6'>
                    <img src={place.image_url} alt="place image" 
                    style={{width:'85vw', height: '80vh', borderRadius: '20px'}}/>
                </div>
                <div 
                    className='box has-background-white has-text-dark is-radius-rounded is-flex is-align-items-center is-justify-content-center m-0 mt-3'
                    style={{ 
                        width: '15vw',
                        height: '6vh',
                        border: '2px solid #299082'
                    }}
                    >
                    <p className='title has-text-grey-dark is-size-5'>{place.category}</p>
                </div>
            <h1 className='title has-text-grey-dark is-2 pt-5'>About {place.name}</h1>
            <p className='is-size-5'>{place.description}</p>    
            </div>
            <div className='buttons container mt-4'>
                <Link to={`/places/${id}/edit`} className="button is-success"> Edit </Link>
                {
                    deleteConfirm 
                    ?
                    <button className="button is-danger" onClick={deletePlace}>Are you Sure?</button>
                    :
                    <button className="button is-danger" onClick={showConfirmDelete}>Delete</button>
                }
                </div> 
                <ToastContainer position='top-center'/>
        </div>
    )
}

export default PlaceDetails