import React from 'react'
import { useNavigate } from 'react-router'

function FeatureForm() {
    const navigate = useNavigate()
    const {id} = useParams()
    const [features,setFeatures] = useState([])

    function handleCancel (){
        console.log("handle cancel")
        navigate(-1)
    }

    return (
        <div className='container mt-6 pt-6 is-flex is-align-items-center is-justify-content-center'>
        <div className='box mt-6 has-background-light is-centered' 
        style={{width:'45vw', height:'75vh'}}>
            <h3 className='title is-4 has-text-black'>{props.titleVerb}</h3>
            <form onSubmit={props.handleSubmit}>
                <div className='field'>
                    <label htmlFor="name" className='has-text-grey-dark is-size-5 '>City Name</label>
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

                <div className='field is-grouped'>
                <button type='submit' className='button is-success '>Submit</button>
                <button type='button' className='button is-light' onClick={handleCancel}>Cancel</button>
                </div>
            </form>
        </div>
    </div>
    )
}
export default FeatureForm