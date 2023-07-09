import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "aos/dist/aos.css";
import ProjectCard from './ProjectCard';

function onclick(){
    alert("Coming soon!");
}

function Projects(props){
    return (<>
<div className='pro' id="projects" style={{marginLeft:"2pxō"}} >
            <div className="project"> 
            <div className="projectHeading">
            <div data-aos='fade-up' className="pro2">
                PROJECTS
                <p data-aos='zoom-in' id='pro1'>which I have made</p>
                </div>
                <div className='line3'></div>
            </div>
                
                <br/>

                
                <p id='part1'>WEB DEVELOPMENT </p>
                <div className='underline'></div>
                
                <div className="project_card">
                <ProjectCard class="card" id1='btn1' id="project_card_text2" title=" Portfolio" desc="Hey Everyone👋!This is my portfolio website which i have built using react🧑‍💻." github="https://github.com/kshitijjj/Portfolio.git"  live="portfolio-kshitijjj.vercel.app"/>
                <ProjectCard class="card" id1='btn1' id="project_card_text2" title=" Tic-Tac-Toe Game " desc="This Tic-Tac-Toe Game is made using  react and various functions and react hooks ✅" github="https://github.com/kshitijjj/Tic_Tac_Toe_Game.git"  live="https://tic-tac-toe-game-kshitijjj.vercel.app/"/>
                <ProjectCard class="card" id1='btn1' id="project_card_text2" title="Project" desc="This is a payment gateway integerated webiste which i have made in my first year of college" github="https://github.com/kshitijjj/Sparks_Task.git"  live="https://kshitijjj.github.io/Sparks_Task/"/>
                </div>
                
                <p id='part2'>Video Editing</p>
                <div className='underline'></div>
                
                <ProjectCard id1='btn_1' class="card2" id="project_card_text2" title="Project" desc="This is a payment gateway integerated webiste which i have made in my first year of college" github="https://github.com/kshitijjj/Sparks_Task.git"  live="https://kshitijjj.github.io/Sparks_Task/"/>

                {/* <div className="project_card">
                <ProjectCard desc="All my video editing projects will be shown here" />
                </div> */}
             </div>
        </div> 
        </>
    );
}

export default Projects;
