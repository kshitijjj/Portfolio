import React from 'react';

function  AboutCard(){
    return (
        <div>
            <div  className='about_card'>
                <div data-aos='fade-right' class="abt_card" style={{boxShadow: "-11px 12px 26px -19px black, 14px -11px 19px -19px black",height:"350px",marginTop:"80px"}}>
                {/* <img src="./images/drum.gif" class="card-img-top" alt="..."/> */}
                <div class="card-body_abt">
                 <h5 class="card-title">Mayank Uppal</h5>
                 <p class="card-text" style={{paddingBottom:"15px"}}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
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
