import React from 'react';

function  AboutCard(props){
    return (
        <>
        <div className="about_heading1">
            ABOUT
        </div>
        <div className="about_main">

            {/* <div className="about_image">
                <img id='about_img1' src="./images/pic.jpeg" alt="" srcset="" />
            </div> */}

            <div className="about_main_2">
                <div className="about_heading">
                    <p id="about_text1">MAYANK UPPAL</p>
                    <p id="about_text_2">Currently, I am a third year undergraduate student at Punjab Engineering College, Chandigarh</p>
                </div>
            </div>
        </div>
        </>
        /* <div id="about" className='about_title'>
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
    ); */
    )
}

export default AboutCard;
