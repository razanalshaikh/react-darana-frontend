import React, {  useEffect, useState } from 'react'
import axios from 'axios'
import './CityCard.css'
function CityCard(props) {
    const [weather , setWeather] = useState('')
    const [temperature, setTemperature] = useState('')
    const [iconURL, setIconURL] = useState(null)

    async function getWeather() {
        try{
            const response = await axios({
                        method: 'get',
                        url:  `http://api.openweathermap.org/data/2.5/weather?&appid=1a82cc7bc1fb98365a77a7e9a04d21d5&q=${props.name}&units=metric`
                    })  
                    const iconName = response.data.weather[0].icon
                    setWeather(response.data.weather[0].description)
                    setIconURL(`https://openweathermap.org/img/wn/${iconName}@2x.png`)
                    setTemperature(`${response.data.main.temp} °C`)
        }catch(erorr){
            console.log(erorr.message)
        }
        
    }

    useEffect(()=>{
        getWeather()
    },[])

    return (
        <div className='card'>
            <div className='card-image'>
                <figure className='image is-4by3'>
                    <img 
                    src="https://bulma.io/assets/images/placeholders/1280x960.png"
                    alt="Placeholder image"
                />
                </figure>

            </div>
            <div className="card-content">
                <div className="media">
                    <div className="media-left">
                        <figure className="image is-48x48">
                            <img
                                src={iconURL}
                                alt={weather}
                            />
                        </figure>
                        <p className='subtitle is-6'> {temperature}</p>
                    </div>
                    <div className="media-content mt-3">
                            <p className="title is-3 has-text-black">{props.name}</p>
                            <p className="subtitle is-6">{weather}</p>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default CityCard