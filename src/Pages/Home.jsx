import React from 'react'
import Slider from './SliderComponent/Slider';
import Slider2 from './SliderComponent/Slider2';
import Slider3 from './SliderComponent/Slider3';
import Footer from './SliderComponent/Footer';
import { useContext } from 'react';
import { AudioContextApi } from './../Apis/AudioContext';

const Home = () => {
    let data = useContext(AudioContextApi);
    console.log(data)
    return (
        <div>
            <Slider />
            <Slider2 />
            <Slider3 />
            <Footer/>
        </div>
    )
}

export default Home;
