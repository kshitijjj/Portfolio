import React from 'react';

function ExperienceCard (props){
    return (
        <div  className='experience_card'>
                <div data-aos='fade-right' class="exp_card" style={{boxShadow: "-11px 12px 26px -19px black, 14px -11px 19px -19px black"}}>
                <div class="card-body_exp">
                 <h5 class="card-title">{props.role}</h5>
                 <p id='time'>{props.time}</p>
                 <p id='work'>{props.work}</p>
                 <p class="card-text_exp" style={{paddingBottom:"15px"}}>{props.desc}</p>
                 <div className='link'>
                  <a id='exp_btn' target='_blank' class="exp_btnn">Go somewhere</a>
                </div>
                </div>
             </div>
            </div>
    );
}

export default ExperienceCard;
