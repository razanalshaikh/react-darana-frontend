import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'
import { Link } from 'react-router'
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
        <div className='continaer pt-1 pl-1'>
        <ul className='is-flex is-flex-wrap-wrap'> 
            {features.map((feature)=>(
                <li 
                key={feature.id} className='m-3'> 
                <div 
                    className='box has-background-light has-text-dark is-radius-rounded is-flex is-align-items-center is-justify-content-center m-0'
                    style={{ 
                        width: '14vw',
                        height: '6vh',
                        border: '2px solid #299082'
                    }}
                    >
                    <p className='title has-text-grey-dark is-size-5'>{feature.name}</p>
                </div>
                </li>
            ))}
        </ul>
    </div>
    
    )
}
export default FeaturesList