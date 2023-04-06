import React, { useState, useEffect } from 'react'
import axios from 'axios'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WaterIcon from '@mui/icons-material/Water';
import AirIcon from '@mui/icons-material/Air';
// import './style.css'
import { useT } from '../../../custom/hooks/useT';

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
            <table style={{width:"100%", marginBottom:"-8px"}}>
                <tr>
                    <th style={{width:"15%"}}><h3><LocationOnIcon/> {data.name} </h3></th>
                    <th style={{width:"15%"}}>{data.name !== undefined && <div style={{width:"25%"}}>
                        {data.weather[0].main == "Clear" ? <img style={{width:"100%"}} src='./clear.png' alt='clear'/> : null}
                        {data.weather[0].main == "Clouds" ? <img style={{width:"100%"}} src='./cloud.png' alt='clouds'/> : null}
                        {data.weather[0].main == "Rain" ? <img style={{width:"100%"}} src='./rain.png' alt='rain'/> : null}
                        {data.weather[0].main == "Snow" ? <img style={{width:"100%"}} src='./snow.png' alt='snow'/> : null}
                        {data.weather[0].main == "Haze" ? <img style={{width:"100%"}} src='./mist.png' alt='mist'/> : null}
                        </div>}
                    </th>
                    <th>
                        {data.main ? <h3>{((data.main.temp-32)*0.555).toFixed()}°C </h3> : null}
                    </th>
                    <th>
                        {data.weather ? <p>{data.weather[0].main == "Clear" ? t(`clear.${lang}`): null}</p> : null}
                        {data.weather ? <p>{data.weather[0].main == "Clouds" ? t(`Clouds.${lang}`): null}</p> : null}
                        {data.weather ? <p>{data.weather[0].main == "Rain" ? t(`Rain.${lang}`): null}</p> : null}
                        {data.weather ? <p>{data.weather[0].main == "Snow" ? t(`Snow.${lang}`): null}</p> : null}
                        {data.weather ? <p>{data.weather[0].main == "Haze" ? t(`Haze.${lang}`): null}</p> : null}
                    </th>
                    <th>
                        {data.wind ? <span className='bold'> <WaterIcon/> {data.main.humidity.toFixed()} %</span> : null}
                        <p>{t(`humidity.${lang}`)}</p>
                    </th>
                    <th>
                        {data.wind ? <span className='bold'> <AirIcon/> {data.wind.speed.toFixed()} MPH</span> : null}
                        <p>{t(`wind.${lang}`)}</p>
                    </th>
                </tr>
            </table>
                {/* <div style={{display:"inlineBlock", width:"10%"}}>
                    <h3><LocationOnIcon/> {data.name} </h3>
                </div>
                {data.name !== undefined && <div style={{display:"inlineBlock"}}>
                    <div style={{display:"inlineBlock"}}>
                        {data.weather[0].main == "Clear" ? <img style={{width:"5%"}} src='./clear.png' alt='clear'/> : null}
                        {data.weather[0].main == "Clouds" ? <img src='./cloud.png' alt='clouds'/> : null}
                        {data.weather[0].main == "Rain" ? <img src='./rain.png' alt='rain'/> : null}
                        {data.weather[0].main == "Snow" ? <img src='./snow.png' alt='snow'/> : null}
                        {data.weather[0].main == "Haze" ? <img src='./mist.png' alt='mist'/> : null}
                    </div>
                </div>}
                <div style={{display:"inlineBlock", width:"20%"}}>
                    {data.main ? <h1>{((data.main.temp-32)*0.555).toFixed()}°C </h1> : null}
                    {data.weather ? <p>{data.weather[0].main}</p> : null}
                    {data.wind ? <span className='bold'> <WaterIcon/> {data.main.humidity.toFixed()} %</span> : null}
                    <p>{t(`humidity.${lang}`)}</p>
                    {data.wind ? <span className='bold'> <AirIcon/> {data.wind.speed.toFixed()} MPH</span> : null}
                    <p>{t(`wind.${lang}`)}</p>
                </div> */}
                 
        </div>
    )
}
export default Weather;
