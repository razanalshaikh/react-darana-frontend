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
        <div className='continaer pt-3 pl-2'>
        <ul className='columns'> 
            {features.map((feature)=>(
                <li 
                key={feature.id} 
                className='column' > 
                <div 
                    className='box has-background-light has-text-dark is-radius-rounded is-align-items-center is-justify-content-center'
                    style={{ 
                        display: 'flex',
                        width: '14vw',
                        height: '8vh',
                        margin: '16px',
                        border: '2px solid #ccc'
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