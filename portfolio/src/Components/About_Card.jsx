import React from 'react';
import "aos/dist/aos.css";

function  AboutCard(props){
    return (
        <>
        <div className="about_main">

            <p id="about_heading">ABOUT</p>

            <div data-aos="zoom-in" className="about_main1">
                <img src="./images/pic.jpeg" alt="" id="about_img" />
                <div className="about_text">
                    <p id="about_text1">MAYANK UPPAL</p>
                    <p id="about_text2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis odit recusandae, ad vitae possimus rerum cupiditate qui quisquam rem, itaque nulla beatae vero error ratione?</p>
                </div>
            </div>

        </div>
        </>
    )
}

export default AboutCard;
