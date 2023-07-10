import React from 'react';
import "aos/dist/aos.css";
function ProjectCard(props){
    return (
      <>

<div class="card" style={{width: "18rem"}}>
  <img class={props.className} src={props.src} alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">{props.title}</h5>
    <p class="card-text">{props.desc}</p>

    <div className="link">
  <a id={props.id1} href={props.github} target='_blank' class="btn4">Github</a>
  <a id='btn_2' href={props.live} target='_blank' class="btn4">Project</a>
  </div>
  </div>
</div>
       </>
    );
}

export default ProjectCard;