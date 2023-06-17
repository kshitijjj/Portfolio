import React from 'react';

function ProjectCard(props){
    return (

             <div  className='cardss'>
                <div data-aos='fade-right' class="card" style={{boxShadow: "-11px 12px 26px -19px black, 14px -11px 19px -19px black",height:"263px",marginTop:"80px"}}>
                {/* <img src="./images/drum.gif" class="card-img-top" alt="..."/> */}
                <div class="card-body">
                 <h5 id={props.id} class="card-title">{props.title}</h5>
                 <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                 <div className='link'>
                  <a id='btn1' href={props.github} target='_blank' class="btn4">Github</a>
                  <a id='btn2' href={props.live} target='_blank' class="btn3">Project</a>
                </div>
                </div>
             </div>
            </div>

       
    );
}

export default ProjectCard;
