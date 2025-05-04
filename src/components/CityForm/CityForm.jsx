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
                    <div>
                        <label htmlFor="name">City Name</label>
                        <input
                            id='name'
                            name='name'
                            type='text'
                            required
                            value={props.name}
                            onChange={event => props.setName(event.target.value)}
                            className="input is-info"
                            placeholder='Enter city name'
                        />
                    </div>
                    <div>
                        <label htmlFor="description" >City Description</label>
                        <textarea 
                        name="description" 
                        id="description" 
                        maxLength="255" 
                        readOnly={false} 
                        required
                        placeholder='Enter city description'
                        onChange={event => props.setDescription(event.target.value)}
                        value={props.description}></textarea>
                    </div>
                    <div>
                        <label htmlFor='imgUpload'>Image</label>
                        <input
                        type='file'
                        accept='image/*'
                        onChange={event =>props.setImageFile(event.target.files[0])}
                        />
                    </div>
                    <button type='submit' className='button is-success'>Submit</button>
                    <button type='button' className='button is-light' onClick={handleCancel}>Cancel</button>
                </form>
            </div>
        </div>
        
    )
}
export default CityForm