import React from 'react';

function ExperienceCard (){
    return (
        <div  className='experience_card'>
                <div data-aos='fade-right' class="exp_card" style={{boxShadow: "-11px 12px 26px -19px black, 14px -11px 19px -19px black",height:"263px",marginTop:"80px"}}>
                {/* <img src="./images/drum.gif" class="card-img-top" alt="..."/> */}
                <div class="card-body_exp">
                 <h5 class="card-title">Growth Intern</h5>
                 <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                 <div className='link'>
                  <a id='btn1' target='_blank' class="btn4">Go somewhere</a>
                </div>
                </div>
             </div>
            </div>
    );
}

export default ExperienceCard;
