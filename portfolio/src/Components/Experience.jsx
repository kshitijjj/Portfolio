import React from 'react';
import Cards from "./Cards";
import AOS from "aos";
import "aos/dist/aos.css";
import ExperienceCard from './Experience_Card';

function Experience(props){
    return(
        <>

        
        <div id="experiences" className="experience_heading">
        <p id='p1' data-aos='fade-down' > My previous</p>
        <h1 id='p3' data-aos='fade-down' > work experience<span id='p2'> includes</span></h1>
        </div>
        
        <div className="exp_comp">

        <div className="experience_box">
        <ExperienceCard/>
        <ExperienceCard/>
        <ExperienceCard/>
        </div>

        <div className="exp_img">
            <img src="./images/exp_img2.svg" alt="" style={{width:"650px" ,height:"950px",marginLeft:"110px"}}/>
        </div>
       
        </div>

        </>
    );
    }
export default Experience;
