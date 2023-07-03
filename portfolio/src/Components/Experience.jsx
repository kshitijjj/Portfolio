import React from 'react';
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


        <div className="exp_img">
            <img id='exp-img' src="./images/exp_img2.svg" alt="" />
        </div>

        <div className="experience_box">
        <ExperienceCard role="Growth Intern" time="(Dec 2022 - Jan 2023)" work="Padhakku-Peek A Book Pvt Ltd"
        desc1="Contributed in researching various databases of college curriculum and primary market research"
        desc2="Assisted in developing a strategy to create brand awareness"
        desc3="Helped in network building via efficient use of LinkedIn"
        
        />
        <ExperienceCard
        role="Web Development Intern" time="(April 2022-May 2022)" work="The Sparks Foundation"
        desc1="Built a website in which payment gateway is integerated."
        desc2="Languages Used : HTML,Css"
        desc3="Css Framework Used : Bootstrap"
        />
        </div>

        
       
        </div>

        </>
    );
    }
export default Experience;
