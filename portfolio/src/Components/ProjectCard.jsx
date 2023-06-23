import React from 'react';
import "aos/dist/aos.css";
function ProjectCard(props){
    return (
      <>

             

            <div className="cardss">
              <div data-aos='fade-up' className="card">
                <div className="card-body">
                <h5 id={props.id} class="card-title">{props.title}</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                <div className="link">
                <a id='btn1' href={props.github} target='_blank' class="btn4">Github</a>
                <a id='btn1' href={props.github} target='_blank' class="btn4">Project</a>
                </div>
                
                </div>
              </div>
            </div>

       </>
    );
}

export default ProjectCard;


/* div  className='cardss'>
                <div data-aos='fade-right' class="card" >
                <div class="card-body">
                 <h5 id={props.id} class="card-title">{props.title}</h5>
                 <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                 <div className='link'>
                  <a id='btn1' href={props.github} target='_blank' class="btn4">Github</a>
                  <a id='btn2' href={props.live} target='_blank' class="btn3">Project</a>
                </div>
                </div>
             </div>
    </div> */