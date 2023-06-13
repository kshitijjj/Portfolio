import React, { useEffect } from 'react';
import Images from './Images';
import AOS from "aos";
import "aos/dist/aos.css";


function Skills(props) {
        useEffect(()=>{
            AOS.init({duration:1500});
        },[]);
    return (
        <div className='main2' id="skills" style={props.theme}>
            <div className='para' data-aos='zoom-in'>
                Skills&nbsp;<span id='para2'>on which i have worked from past few months</span>
                <div id='line'></div>
            </div>
            <div className='main4' data-aos="zoom-in" style={{display:"flex"}}>
            <Images id="img2" src="./images/react.jpg"/> 
            <Images id="img3" src="./images/node.jpg"/> 
            <Images id="img4" src="./images/express.png"/> 
            <Images id="img5" src="./images/mongo.png"/> 
            </div>
            <div className="main5" data-aos="slide-down" style={{display:"flex"}}>
            <Images id="img6" src="./images/html.jpg"/> 
            <Images id="img7" src="./images/css.jpg"/> 
            <Images id="img8" src="./images/c++.jpg"/> 
            </div>
        </div>
    );
}

export default Skills;
