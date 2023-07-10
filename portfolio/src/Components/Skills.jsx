import React, { useEffect } from 'react';
import Images from './Images';
import AOS from "aos";
import "aos/dist/aos.css";
import SkillsCard from './Skills_Card';


function Skills(props) {
        useEffect(()=>{
            AOS.init({duration:1500});
        },[]);
    return (
        <>
            <div className='image_2' data-aos='zoom-in'>
                <p id='image_text'>Skills&nbsp;<span id='image_text_2'></span></p>
            </div>

            <div className="skills_main">

            <div className="skills_progress">
            <SkillsCard skills_text="85%"/>
            <SkillsCard skills_text="85%"/>
            <SkillsCard skills_text="85%"/>
            <SkillsCard skills_text="85%"/>
            </div>

            <div className="skills_progress_1">
            <SkillsCard skills_text="85%"/>
            <SkillsCard skills_text="85%"/>
            <SkillsCard/>
            </div>
            
            </div>
        </>
    );
}

export default Skills;
