import React from 'react';
import "aos/dist/aos.css"; 

function SkillsCard(props){
    return (
        <>
        <div className="skills_card_main">
        <p id="skills_card_text">{props.skills_card_text}</p>
        <div  class="progress" style={{height:"3.5vh",width:"40vw"}} >
  <div data-aos="fade-right"  class="progress-bar" role="progressbar" aria-valuenow="25"  aria-valuemin="0" aria-valuemax="100">{props.skills_text} </div>
</div>
</div>
</>
    );
}

export default SkillsCard;
