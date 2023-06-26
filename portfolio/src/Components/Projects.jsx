import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "aos/dist/aos.css";
import ProjectCard from './ProjectCard';


function Projects(props){
    return (<>
<div className='pro' id="projects" style={{marginLeft:"2pxō"}} >
            <div className="project"> 
            <div className="projectHeading">
            <div data-aos='fade-up' className="pro2">
                Projects <span data-aos='zoom-in' id='pro1'>which I have made after learning above skills</span>
                </div>
                <div className='line3'></div>
            </div>
                
                <br/>

                
                <p id='part1'>WEB DEVELOPMENT </p>
                <div className='underline'></div>
                
                <div className="project_card">
                <ProjectCard id="project_card_text3" title="Locale" github="https://github.com/kshitijjj/Portfolio.git"  />
                <ProjectCard id="project_card_text2" title=" Portfolio Website " github="https://github.com/kshitijjj/Sparks_Task.git"  live="https://kshitijjj.github.io/Sparks_Task/"/>
                <ProjectCard id="project_card_text2" title=" Tic-Tac-Toe Game " github="https://github.com/kshitijjj/Sparks_Task.git"  live="https://kshitijjj.github.io/Sparks_Task/"/>
                <ProjectCard id="project_card_text2" title="Project" github="https://github.com/kshitijjj/Sparks_Task.git"  live="https://kshitijjj.github.io/Sparks_Task/"/>
                </div>
                


        
                <p id='part1'>Video Editing</p>
                <div className='underline'></div>
                
                <div className="project_card">
                <ProjectCard title="" />
                </div>
             </div>
        </div> 
        </>
    );
}

export default Projects;
