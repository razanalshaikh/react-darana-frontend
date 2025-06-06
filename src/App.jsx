import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router'
import { useState,useEffect } from 'react'
import NavBar from './components/NavBar/NavBar'
import 'bulma/css/bulma.min.css'
import Home from './pages/home'
import Cities from './pages/cities'
import Places from './pages/Places'
import CityDetails from './pages/CityDetails'
import NotFound from './pages/NotFound'
import AddCity from './pages/AddCity'
import EditCity from './pages/EditCity'
import Footer from './components/Footer/Footer'
import PlacesList from './components/PlacesList/PlacesList'
import PlaceDetails from './pages/PlaceDetails'
import EditPlace from './pages/EditPlace'
import AddPlace from './pages/AddPlace'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
function App() {

    const [loggedin,setLoggedin] = useState(false)
    function logout(){
        setLoggedin(false)
        localStorage.removeItem('access_token')
        localStorage.removeItem('refresh_token')
        window.location.href = '/login'
    } 
    useEffect(()=>{
      const access = localStorage.getItem('access_token')
      setLoggedin(access!==null)
  })
  return (
    
  
    <>
    <Router>   
      <NavBar loggedin={loggedin} logout={logout} />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='*' element={<NotFound/>}/>
        <Route path='/cities'element={<Cities/>}/>
        <Route path='/city/:id' element={<CityDetails/>}/>
        <Route path='/cities/new' element={<AddCity/>}/>
        <Route path='/city/:id/edit'element={<EditCity/>}></Route>
        <Route path='/places' element={<Places/>}/>
        <Route path='/city/:id/places' element ={<PlacesList/>} />
        <Route path='/places/:id' element ={<PlaceDetails/>}/>
        <Route path='/places/:id/edit' element ={<EditPlace/>}/>
        <Route path='/places/new' element ={<AddPlace/>}/>
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login setLoggedin ={setLoggedin}/>} />
      </Routes> 
      <Footer/>
    </Router>
    </>
  )
}

export default App
