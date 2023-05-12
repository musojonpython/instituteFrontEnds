import React, { useState, useEffect } from 'react'
import axios from 'axios'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WaterIcon from '@mui/icons-material/Water';
import AirIcon from '@mui/icons-material/Air';
import { useT } from '../../../custom/hooks/useT';
import './style.css'

function Weather(){
    const {t, lang} = useT();
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
        <div className='container'>
            <div className='weather-section'>
                <div className='icon-style'>
                     <span> <LocationOnIcon /> {data.name}</span>
                </div>
                    {data.name !== undefined && <div className='images-items'>
                        {data.weather[0].main === "Clear" ? <img src='./clear.png' alt='clear'/> : null}
                        {data.weather[0].main === "Clouds" ? <img src='./cloud.png' alt='clouds'/> : null}
                        {data.weather[0].main === "Rain" ? <img src='./rain.png' alt='rain'/> : null}
                        {data.weather[0].main === "Snow" ? <img src='./snow.png' alt='snow'/> : null}
                        {data.weather[0].main === "Haze" ? <img src='./mist.png' alt='mist'/> : null}
                    </div>}
                <div className='temp'>
                    {data.main ? <span>{((data.main.temp-32)*0.555).toFixed()}°C </span>  : null}
                </div>
                <div className='weather'>
                    {data.weather ? <span>{data.weather[0].main === "Clear" ? t(`clear.${lang}`): null}</span> : null}
                    {data.weather ? <span>{data.weather[0].main === "Clouds" ? t(`Clouds.${lang}`): null}</span> : null}
                    {data.weather ? <span>{data.weather[0].main === "Rain" ? t(`Rain.${lang}`): null}</span> : null}
                    {data.weather ? <span>{data.weather[0].main === "Snow" ? t(`Snow.${lang}`): null}</span> : null}
                    {data.weather ? <span>{data.weather[0].main === "Haze" ? t(`Haze.${lang}`): null}</span> : null}
                </div>
                <div className='water'>
                    {data.wind ? <span className='bold'>  <WaterIcon/> {data.main.humidity.toFixed()} %</span> : null}
                   <span> {t(`humidity.${lang}`)} </span>
                </div>
                <div className='airIcon'>
                    {data.wind ? <span className='bold'> <AirIcon/> {data.wind.speed.toFixed()} MPH</span> : null}
                         <span> {t(`wind.${lang}`)} </span>
                </div>
            </div>
        </div>
    )
}
export default Weather;
