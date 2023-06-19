import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
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
                
                <div className="project_card">
                <ProjectCard id="project_card_text1" title="Drum Kit" github="https://github.com/kshitijjj/DrumKit.github.io" live="https://kshitijjj.github.io/DrumKit.github.io/" />
                <ProjectCard id="project_card_text3" title="Portfolio Website" github="https://github.com/kshitijjj/Portfolio.git"  />
                <ProjectCard id="project_card_text2" title=" Website " github="https://github.com/kshitijjj/Sparks_Task.git"  live="https://kshitijjj.github.io/Sparks_Task/"/>
                </div>
                


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
