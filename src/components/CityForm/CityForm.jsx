import React from 'react'
import { useNavigate } from 'react-router'

function CityForm(props) {
    const navigate = useNavigate()
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
                    <div className='field'>
                        <label htmlFor="description"  className='has-text-grey-dark is-size-5' >City Description</label>
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
                    <div className='field is-grouped'>
                    <button type='submit' className='button is-success '>Submit</button>
                    <button type='button' className='button is-light' onClick={handleCancel}>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
        
    )
}
export default CityForm