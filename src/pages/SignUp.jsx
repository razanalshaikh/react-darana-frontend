import React from 'react'
import { useState } from 'react'
import { setTokens } from '../lib/api'
import axios from 'axios'
import { ToastContainer,toast } from 'react-toastify'
import { useNavigate } from 'react-router'

function SignUp() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const navigate = useNavigate()

    async function handleSubmit(event){
        event.preventDefault()
        try {
            const response = await axios.post(
                'http://127.0.0.1:8000/api/signup/',
                {username, email, password}
            )
            console.log(response.data)
            setTokens(response.data)
            if(response.status === 201){
                toast.success('account created Successfully!')
                setUsername('')
                setEmail('')
                setPassword('')
                setTimeout(()=>{
                    navigate(`/cities`)
                },3500)
            }
        
        } catch (err) {
            toast.error('Error! Invalid input')
            
        }
    }

    return (
        <div className='container is-flex is-align-items-center is-justify-content-center mt-6 pt-6 mb-6'>
            <div 
            className='box  mt-6 pt-6 has-background-light is-centered'
            style={{width:'25vw', height:'75vh'}}>
                <h3 className='title is-3 has-text-black has-text-centered'>SignUp</h3>
                <form onSubmit={handleSubmit}>
                    <div className="field">
                    <label htmlFor="username" className='has-text-grey-dark is-size-5 '>Username</label>
                        <input 
                            id='username'
                            name='username'
                            className="input has-background-white has-text-grey-dark" 
                            type="text" 
                            placeholder="Enter your username"
                            required
                            onChange={event => setUsername(event.target.value)}
                            value={username}
                        />
                    </div>
                    <div className="field">
                    <label htmlFor="email" className='has-text-grey-dark is-size-5 '>Email</label>
                        <input 
                            id='email'
                            name='email'
                            className="input has-background-white has-text-grey-dark" 
                            type="email" 
                            placeholder="Email@email.com"
                            required
                            onChange={event => setEmail(event.target.value)}
                            value={email}
                        />
                    </div>
                    <div className="field">
                    <label htmlFor="password" className='has-text-grey-dark is-size-5 '>password</label>
                        <input 
                            id='password'
                            name='password'
                            className="input has-background-white has-text-grey-dark" 
                            type="password" 
                            placeholder="Enter your password"
                            required
                            onChange={event => setPassword(event.target.value)}
                            value={password}
                        />
                    </div>
                    <div className='buttons is-centered mt-5'>
                    <button type='submit' className='button is-success '>Submit</button>
                    </div>
                </form>
            </div>
            <ToastContainer position='top-center'/>
        </div>
    )
}
export default SignUp