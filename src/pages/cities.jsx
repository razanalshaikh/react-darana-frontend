import React from 'react'
import CitiesList from '../components/CitiesList/CitiesList'
import { Link } from 'react-router'

function Cities() {
    return (

    <div className='container is-max-widescreen mt-6 pt-6'>
        <h1 className='title has-text-black mt-6 pt-6'>Cities: </h1>
        <CitiesList/>
        <div className='is-flex is-justify-content-flex-end mt-4'>
            <Link to="/cities/new" className="button is-success">Add City</Link>
        </div>
    </div>
    )
}
export default Cities