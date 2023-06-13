import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import AOS from "aos";
import "aos/dist/aos.css";
import ProjectCard from './ProjectCard';

function Projects(props){
    return (<>
<div className='pro' id="projects" >
            <div className="project"> 
            <div className="projectHeading">
            <div data-aos='fade-up' className="pro2">
                Projects <span data-aos='zoom-in' id='pro1'>which I have made after learning above skills</span>
                </div>
                <div className='line3'></div>
            </div>
                
                <br/>

                <div className="projectType1">
                <p id='part1'>WEB DEVELOPMENT </p>
                <div className='underline'></div>
                </div>
                
                <ProjectCard title="Drum Kit" />

                <div className="projectType2">
                <p id='part1'>Editing</p>
                <div className='underline'></div>
                </div>
                
                <ProjectCard title="Drum Kit" />
             </div>
        </div> 
        </>
    );
}

export default Projects;
