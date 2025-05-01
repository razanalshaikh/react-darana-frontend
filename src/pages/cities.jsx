import React from 'react'
import CitiesList from '../components/CitiesList/CitiesList'
import { Link } from 'react-router'

function Cities() {
    return (

    <div>
        <h1 className='has-text-black'>Cities: </h1>
        <CitiesList/>
        <Link to="/cities/new" className="button is-success">Add City</Link>
    </div>
    )
}
export default Cities