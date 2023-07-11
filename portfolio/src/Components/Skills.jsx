import React, { useEffect } from 'react';
import Images from './Images';
import AOS from "aos";
import "aos/dist/aos.css";
import SkillsCard from './Skills_Card';
import { useState } from 'react';



function Skills(props) {

        useEffect(()=>{
            AOS.init({duration:1500});
        },[]);
    return (
        <>
            <div className='image_2' data-aos='zoom-in'>
                <p id='image_text'>SKILLS&nbsp;<span id='image_text_2'></span></p>
            </div>

            <div className="skills_main">

            <div className="skills_progress">
            <SkillsCard skills_card_text="Html" skills_text="85%"/>
            <SkillsCard skills_card_text="Css"  skills_text="85%"/>
            <SkillsCard skills_card_text="Javascript"  skills_text="85%"/>
            <SkillsCard skills_card_text="ReactJs"  skills_text="85%"/>
            </div>

            <div className="skills_progress_1">
            <SkillsCard skills_card_text="NodeJs" skills_text="85%"/>
            <SkillsCard skills_card_text="ExpressJs" skills_text="85%"/>
            <SkillsCard skills_card_text="MongoDB" skills_text="85%"/>
            </div>
            
            </div>
        </>
    );
}

export default Skills;
