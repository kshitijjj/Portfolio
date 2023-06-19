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
                </div>
                </div>
    );
}

export default Skills;
