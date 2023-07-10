import React from 'react';

function SkillsCard(props){
    return (
        <div class="progress" style={{height:"3.5vh",width:"40vw"}} >
  <div class="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{fontfamily:'Belanosima,sans-serif'}}>{props.skills_text} </div>
</div>
    );
}

export default SkillsCard;
