import React, { useEffect } from 'react';
import Images from './Images';
import AOS from "aos";
import "aos/dist/aos.css";


function Skills(props) {
        useEffect(()=>{
            AOS.init({duration:1500});
        },[]);
    return (
        <div className='image'>
            <div className='image_2' data-aos='zoom-in'>
                <p id='image_text'>Skills&nbsp;<span id='image_text_2'></span></p>
                <div className="image_3">
                <Images id="img_s1" src=""/>
                <Images id="img_s1"  src=""/>
                <Images id="img_s1"  src=""/>
                <Images id="img_s1"  src=""/>
                <Images id="img_s1"  src=""/>
                <Images id="img_s1"  src=""/>
                <Images id="img_s1"  src=""/>
                </div>
                </div>

                </div>
    );
}

export default Skills;
