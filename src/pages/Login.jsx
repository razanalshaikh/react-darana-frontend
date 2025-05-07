import { useState } from 'react'
import { useNavigate } from 'react-router'
import { setTokens } from '../lib/api'
import axios from 'axios'
import { ToastContainer,toast } from 'react-toastify'

function Login() {
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })

    const handleChange = (event) => {
        setFormData({
        ...formData,
        [event.target.name]: event.target.value
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        try {
                const response = await axios.post(`${import.meta.env.VITE_BASE_URL}token/`, formData)
                setTokens({
                    access: response.data.access,
                    refresh: response.data.refresh
                })
                if(response.status === 200){
                    toast.success('logged in Successfully!')
                    setTimeout(()=>{
                        navigate('/cities')
                    },3500)
                    }
        } catch (err) {
        console.log(err)
        toast.error('Invalid username or password!')
        }
    }

    return (
        <div className='container is-flex is-align-items-center is-justify-content-center mt-6 pt-6 mb-6'>
        <div 
            className='box  mt-6 pt-6 has-background-light is-centered'
            style={{width:'25vw', height:'75vh'}}>  
        <h1 className='title is-3 has-text-black has-text-centered'>Login</h1>
        <form onSubmit={handleSubmit}>
            <div className='field'>
            <label htmlFor="username" className='has-text-grey-dark is-size-5 '>Username</label>
            <input
            id='username'
            name="username"
            type="text"
            className="input has-background-white has-text-grey-dark" 
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            required
            />
            </div>
            <div className='field'>
            <label htmlFor="password" className='has-text-grey-dark is-size-5 '>Password</label>
            <input
                type="password"
                name="password"
                placeholder="Password"
                className="input has-background-white has-text-grey-dark" 
                value={formData.password}
                onChange={handleChange}
                required
            />
            </div>
            <div className='buttons is-centered mt-5'>
            <button type='submit' className='button is-success '>Submit</button>
            </div>
        </form>
        <ToastContainer position='top-center'/>
        </div>
    </div> 
    )
}

export default Login