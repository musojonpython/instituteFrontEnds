import React from 'react';
import { Carousel } from 'react-bootstrap';
import Weather from '../WeatherPage';
import './style.css';

const Carousels = () => {
    return (
    <div>
        <div class="container-fluid p-0" className='w-100 h-100' style={{position: "relative", textAlign: "center", color: "white"}} >
        <Carousel>
            <Carousel.Item>
                <img className="d-block w-100" src='./1.png' alt="First slide" />
            </Carousel.Item>  
            <Carousel.Item>
                <img className="d-block w-100" src="./03.png" alt="Second slide" />
            </Carousel.Item> 
            <Carousel.Item>
                <img className="d-block w-100" src="./3.jpg" alt="Third slide"/>
            </Carousel.Item> 
            <Carousel.Item>
                <img className="d-block w-100" src="./4.jpg" alt="Four slide"/>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src="./3.png" alt="Third slide"/>
            </Carousel.Item>  
        </Carousel> 
            <div className="weather-style">
                <Weather />
            </div>
            <div className='circle' >
                <div className='circle-items' >
                    <div className='circle-item' >
                        <img src="./ecology.png" alt='Ecology'/>
                        <div className='circle-item__number' ><span >285,457</span> </div>
                        <span className='circle-item__text'>Protected Areas</span>
                    </div>
                </div>
            </div>
          
            <div className='circle-middle' >
              <div className='circle-middle-items'>
                    <div className='circle-item'>
                        <img src="./environment.png" alt='Ecology'/>
                        <div className='circle-item__number' ><span >285,457</span> </div>
                        <span className='circle-item__text'>Protected Areas</span>
                    </div>
                </div>
            </div>

            <div className='circle-left'>
                <div className='circle-left-items'>
                    <div className='circle-item'>
                        <img src="./earth-day.png" alt='Ecology'/>
                        <div className='circle-item__number' ><span >285,457</span> </div>
                        <span className='circle-item__text'>Protected Areas</span>
                    </div>
                </div>
            </div>
        </div> 
    </div>
);}

export default Carousels;