import React from 'react';

function  AboutCard(props){
    return (
        <div id="about" className='about_title'>
            <div  className='about_card'>
                <div data-aos='fade-right' class="abt_card">
                <div class="card-body_abt">
                <div className="about_card_text">
                 <p id="abt_txt" class="card-text">{props.desc}</p>
                 <div className='link'>
                </div>
                </div>
                </div>
             </div>
            </div>
        </div>
    );
}

export default AboutCard;
