import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'

function FeaturesList() {
    const {id} = useParams()
    const [features,setFeatures] = useState([])
    const [errorMessage, setErrorMessage] = useState('')

    async function showFeatures(){
        try{
            const response = await axios.get(`${import.meta.env.VITE_BASE_URL}cities/${id}/features`)
            setFeatures(response.data)
            console.log(response.data)
        }catch(error){
            console.log(error)
            setErrorMessage('loading')
        }
    }
    
    useEffect(()=>{
        showFeatures()
    },[])
    
    return (
        <div className='continaer pt-3 pl-5'>
        <ul className='columns'> 
            {features.map((feature)=>(
                <li key={feature.id} className='column'> 
                        <p className='has-text-grey-dark is-size-5'>{feature.name}</p>
                </li>
            ))}
        </ul>
    </div>
    )
}
export default FeaturesList