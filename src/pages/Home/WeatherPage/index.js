import React, { useState, useEffect } from 'react'
import axios from 'axios'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WaterIcon from '@mui/icons-material/Water';
import AirIcon from '@mui/icons-material/Air';
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
    // style={{width:"100%", marginBottom:"-8px", filter: "blur(8px)"}}
    return (
        <div className='container'>
            <table>
                <tr>
                    <th style={{width:"15%"}}><h4><LocationOnIcon/> {data.name} </h4></th>
                    <th style={{width:"5%"}}>{data.name !== undefined && <div style={{marginBottom:"7%"}}>
                        {data.weather[0].main == "Clear" ? <img style={{width:"100%"}} src='./clear.png' alt='clear'/> : null}
                        {data.weather[0].main == "Clouds" ? <img style={{width:"100%"}} src='./cloud.png' alt='clouds'/> : null}
                        {data.weather[0].main == "Rain" ? <img style={{width:"100%"}} src='./rain.png' alt='rain'/> : null}
                        {data.weather[0].main == "Snow" ? <img style={{width:"100%"}} src='./snow.png' alt='snow'/> : null}
                        {data.weather[0].main == "Haze" ? <img style={{width:"100%"}} src='./mist.png' alt='mist'/> : null}
                        </div>}
                    </th>
                    <th>
                        {data.main ? <h4>{((data.main.temp-32)*0.555).toFixed()}°C </h4> : null}
                    </th>
                    <th>
                        <h4>{data.weather ? <p>{data.weather[0].main == "Clear" ? t(`clear.${lang}`): null}</p> : null}</h4>
                        <h4>{data.weather ? <p>{data.weather[0].main == "Clouds" ? t(`Clouds.${lang}`): null}</p> : null}</h4>
                        <h4>{data.weather ? <p>{data.weather[0].main == "Rain" ? t(`Rain.${lang}`): null}</p> : null}</h4>
                        <h4>{data.weather ? <p>{data.weather[0].main == "Snow" ? t(`Snow.${lang}`): null}</p> : null}</h4>
                        <h4>{data.weather ? <p>{data.weather[0].main == "Haze" ? t(`Haze.${lang}`): null}</p> : null}</h4>
                    </th>
                    <th>
                        {data.wind ? <span className='bold'> <WaterIcon/> {data.main.humidity.toFixed()} %</span> : null}
                        <h5>{t(`humidity.${lang}`)}</h5>
                    </th>
                    <th>
                        {data.wind ? <span className='bold'> <AirIcon/> {data.wind.speed.toFixed()} MPH</span> : null}
                        <h5>{t(`wind.${lang}`)}</h5>
                    </th>
                </tr>
            </table>
        </div>
    )
}
export default Weather;
