import React, { useState } from 'react';
import { Link } from 'react-scroll';
import "aos/dist/aos.css";
import Navbar from './Navbar';

function Home(props){
    return (
        <>
    {/* <Navbar/> */}
    <div className='head' id="home">
        <div className='main'>
            <div className="home_text">
            <p id='text1'>Hey ! I am a</p>
            <h1 id="text3" >Video Editor </h1>
            <h1 id="text33" >Web Developer & Creative </h1>
            <p id='text11'>I am mayank uppal and welcome to </p>
            <p id='text12'>our portfolio website</p>
            </div>
           

            <div className='buttons'>
                <a data-aos='zoom-in'  className='box1' href='./docs/Resume.pdf' download target='_blank' id="resume"  >Resume</a>
                <a data-aos='zoom-in'  className='box2'   href='' target='_blank' id="resume"  >Resume</a>
            </div> 
            
            <div className='social'>
                You can connect with me on:
                <div className='icons'>
                   <a  href="">< img className='icon_btn' src="" alt=""   /></a> 
                   <a  href="https://www.linkedin.com/in/mayank-uppal-3591a5229"><img className='icon_btn' src="" alt="" /></a> 
                   <a  href=""><img className='icon_btn' src="" alt="" /></a> 
                   <a  href=""><img className='icon_btn' src="" alt=""  /></a> 
                </div>
            </div>
            
        </div>

        
         <div className='image_1'>
            <div id="img_box">
            <img data-aos='fade-left'  id='img1' src="./images/img1.svg" alt=""  />
            </div>
        </div>  
    </div>

    </>
    );
}

export default Home;
