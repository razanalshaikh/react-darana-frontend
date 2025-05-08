import React from 'react'

function PlaceCard(props) {
    return (
        <div 
        className='card'
        style={{
            background: `url(${props.place.image_url})`, 
            }}
        >
        <div className='card-image'>
            <figure className='image is-4by3'>
                <img 
                src={props.place.image_url}
                alt="Placeholder image"
                style={{
                    width:"0vw",
                    height:"0vh"}}
            />
            </figure>

        </div>
        <div className="card-content">
            <div className="media">
                <div className="media-content mt-3">
                        <p className="title is-3 has-text-light">{props.place.name}</p>
                        <p className="subtitle is-6">{props.place.category? props.place.category : ''}</p>
                </div>
            </div>
        </div>
    </div>
    )
}
export default PlaceCard