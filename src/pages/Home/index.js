import React from 'react';
import Carousels from './Carousel';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3Home from './Section3';
import './style.css';

const Home = () => {
    return (
        <div className='homeee'>
            <Carousels />
            <Section1 />
            <Section2 />
            <Section3Home />
        </div>
    );
}

export default Home;
