import React, { useState } from 'react';
import { Link } from 'react-scroll';
import "aos/dist/aos.css";

function Home(props){
    return (
        <>
    <div className='head' id="home">

        <div className='main'>
            <div className="home_text">
            <h1 id="text3" >Video Editor </h1>
            <h1 id="text33" >Web Developer & Creative </h1>
            <p id='text1'>Hey everyone ! my name is mayank</p>
            <p id='text11'>welcome to our portfolio website</p>
            </div>
           

            <div className='buttons'>
                <a data-aos='zoom-in'  className='box1' href='./docs/Resume.pdf' download target='_blank' id="resume"  >Resume</a>
                <a data-aos='zoom-in'  className='box2'   href='' target='_blank' id="resume"  >Resume</a>
            </div> 
            
            <div className='social'>
                <div className='icons'>
                   <a  href="">< img className='icon_btn' src="" alt=""   /></a> 
                   <a  href="https://www.linkedin.com/in/mayank-uppal-3591a5229"><img className='icon_btn' src="" alt="" /></a> 
                   <a  href=""><img className='icon_btn' src="" alt="" /></a> 
                   <a  href=""><img className='icon_btn' src="" alt=""  /></a> 
                </div>
            </div>
        </div>

         <div className='image'>
            <img data-aos='fade-left'  id='img1' src="./images/h3.svg" alt=""  />
        </div>  
    </div>

    </>
    );
}

export default Home;
