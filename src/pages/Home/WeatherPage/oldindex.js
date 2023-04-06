import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Icon } from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WaterIcon from '@mui/icons-material/Water';
import AirIcon from '@mui/icons-material/Air';


function Weather(){
    const [data, setData] = useState({})

    const url = `https://api.openweathermap.org/data/2.5/weather?q=Tashkent&units=imperial&appid=895284fb2d2c50a520ea537456963d9c`

    const searchLocation = (event) => {
        axios.get(url).then((response) => {
            setData(response.data)
            console.log(response.data)
        })
    }
    useEffect(() => {
        searchLocation();
    }, []);

    return (
        <div className='app'>
            <div className='container'>
                <div className='top'>
                    <div className='location'>
                    <h1><LocationOnIcon/> {data.name} </h1>
                        
                    </div>
                    <div className='temp'>
                        {data.main ? <h1>{(data.main.temp.toFixed()-32)*0.555}°C </h1> : null}
                    </div>
                    <div className='description'>
                        {data.weather ? <p>{data.weather[0].main}</p> : null}
                    </div>
                </div>
                {data.name !== undefined && <div className="bottom">
                    <div className="feels">
                        {data.weather[0].main == "Clear" ? <img src='./clear.png' alt='clear'/> : null}
                        {data.weather[0].main == "Clouds" ? <img src='./cloud.png' alt='clouds'/> : null}
                        {data.weather[0].main == "Rain" ? <img src='./rain.png' alt='rain'/> : null}
                        {data.weather[0].main == "Snow" ? <img src='./snow.png' alt='snow'/> : null}
                        {data.weather[0].main == "Haze" ? <img src='./mist.png' alt='mist'/> : null}
                    </div>
                    
                    <div className="wind">
                    {data.wind ? <p className='bold'>{data.wind.speed.toFixed()} MPH</p> : null}
                    <p>Wind Speed</p>
                    </div>
                </div>}
                <div>

                </div>

            </div>
        </div>
    )
}
export default Weather;
