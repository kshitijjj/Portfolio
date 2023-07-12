import React from 'react';

function Contact(){
    return (
        <div className="contact_main">
            <div className="contact_heading">
                <p id="contact_text1">Want to Talk?</p>
                <p id="contact_text2">Get in contact</p>
            </div>

            <div className="contact_main1">
               

                <div data-aos='fade-up' className="form">
                    <div  className="contact_form">
                        <input type="text" name="" placeholder='name' id="input_text" />
                        <input type="email" name="" placeholder='email' id="input_email" />
                        <textarea name="" id="textarea" placeholder='Your message' cols="30" rows="10"/>
                        <a id="submit"  >Submit</a>
                    </div>
                </div>

                <img data-aos='fade-up' src="./images/img_3.svg" alt="" id="contact_img" />
            </div>
        </div>
    );
}

export default Contact;
