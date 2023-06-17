import React from 'react';
import Cards from "./Cards";
import AOS from "aos";
import "aos/dist/aos.css";
import ExperienceCard from './Experience_Card';

function Experience(props){
    return(
        <>

        
        <div className="experience_heading">
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
            {/* <img src="" alt="" style={{width:"350px" ,height:"350px"}}/> */}
        </div>
       
        </div>

        </>
    );
    }
export default Experience;




    /*   {/* div className='main3' id="experiences">
          <div className='exp'>
         
          <div className='cards'>

    
              <Cards id3='cardss1' aos='fade-right' id="w1" id2="c1" work="Growth Intern" company="Padhakku Peek A Book Pvt Ltd" time="(Nov 2022 - Dec 2022)" desc1="Contributed in reaearching various databases of college curriculum and primary market research" desc2="Helped in network building via efficient use of Linkedin" desc3="Assisted in developing strategy to create brand awareness" desc4="Responsible for the overall growth of the company"/>

              <Cards id3='cardss2' aos='zoom-in'  id="w2" id2="c2" work="Web Development Intern" company="The Sparks Foundation" time="(April 2022 - May 2022)" desc1="Responsible for building a website in which payment gateway is integerated" desc2="Tech stack used : Html , Css" desc3="Css Framework used: Bootstrap" desc4=""/>

              <Cards id3='cardss3' aos='fade-left' id="w3" id2="c3" work="Video Editor" company="Bastta" time="(April 2023 - Present)"/>

              </div>
              
              
          </div>
      </div> */
