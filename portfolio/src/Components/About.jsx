import React from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

function About(props){

    const intro="Hello everyone,my name is Mayank uppal  Currently I am a second year undergraduate student at punjab engineering College,I am proficient in web development and i also have a youtube channel"
    return (
        <div className="main6" id="about">
            <div  className='about'>
                A brief&nbsp; <span id='a1'>introduction</span> about myself
                <div className="line4"></div>
            </div>
            <div data-aos='zoom-out-down' className='ab'>
                <div className='inab'>
                     <img id='img_1' src="./images/pic.jpeg" alt=""  />
                     <div className="line5"></div>

                </div>
            </div>
        </div>
    );
}

export default About;
