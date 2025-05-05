import React from 'react'
import AllPlacesList from '../components/AllPlacesList/AllPlacesList'
import { Link } from 'react-router'
function Places() {
  return (

      <div className='container is-max-widescreen mt-6 pt-6'>
          <h1 className='title has-text-black mt-6 pt-6'>Places: </h1>
          <div className='is-flex is-justify-content-flex-end mt-4'>
              <Link to="/places/new" className="button is-success">Add Place</Link>
          </div>
          <AllPlacesList/>
      </div>
  )
}
export default Places