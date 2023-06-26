import React from 'react';

function  AboutCard(){
    return (
        <div>
            <div  className='about_card'>
                <div data-aos='fade-right' class="abt_card">
                <div class="card-body_abt">
                 <h5 class="card-title"></h5>
                 <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                 <div className='link'>
                  <a id='abt_btn' target='_blank' class="abt_btnn">Go somewhere</a>
                </div>
                </div>
             </div>
            </div>
        </div>
    );
}

export default AboutCard;
