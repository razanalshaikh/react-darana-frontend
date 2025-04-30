import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router'
import NavBar from './components/NavBar/NavBar'
// import './App.css'
import 'bulma/css/bulma.min.css'
import Home from './pages/home'
import Cities from './pages/cities'
import Places from './pages/Places'

function App() {

  return (
    <>
    <NavBar/>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cities'element={<Cities/>}/>
        <Route path='/places' element={<Places/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
