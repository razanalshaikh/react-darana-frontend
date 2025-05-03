import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router'
import NavBar from './components/NavBar/NavBar'
import 'bulma/css/bulma.min.css'
import Home from './pages/home'
import Cities from './pages/cities'
import Places from './pages/Places'
import CityDetails from './pages/CityDetails'
import NotFound from './pages/NotFound'
import AddCity from './pages/AddCity'
import EditCity from './pages/EditCity'

function App() {

  return (
    <>
    <NavBar/>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='*' element={<NotFound/>}/>
        <Route path='/cities'element={<Cities/>}/>
        <Route path='/places' element={<Places/>}/>
        <Route path='/city/:id' element={<CityDetails/>}/>
        <Route path='/cities/new' element={<AddCity/>}/>
        <Route path='/city/:id/edit'element={<EditCity/>}></Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
