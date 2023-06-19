import React, { useState } from 'react';
import { Link } from 'react-scroll';
import "aos/dist/aos.css";

function Home(props){
    return (
        <>
    <div className='head' id="home">
        <div className='main'>
    

            <div className="home_text">
            <h1 id="text3" >Video Editor ... </h1>
            <h1 id="text33" >Web Developer & Creative </h1>
            <p id='text1'>Hey everyone ! my name is mayank</p>
            <p id='text11'>welcome to our portfolio website</p>
            </div>
           

            <div className='buttons'>
            {/* <div /* onMouseEnter={handlehover} */ } 
                <a data-aos='zoom-in'  className='box1'  style={{width:"170px", height:"45px"}} href='./docs/Resume.pdf' target='_blank' id="resume"  >Resume</a>
         {/*    </div> */}
     {/*        <div  > */}
                <Link  className='box2' data-aos='zoom-in'  style={{width:"170px", height:"45px"}} id="work"></Link>
           {/*  </div> */}

            </div> 

            <div className='social'>
                You can connect with me on:
                <div className='icons'>
                   {/* <a href="https://www.instagram.com/__.mayank.___07/">< img src="./images/4.svg" alt="" style={{marginLeft:"10px",marginRight:"10px"}}  width={"30px"} height={"40px"}  /></a> 
                   <a href="https://www.linkedin.com/in/mayank-uppal-3591a5229"><img src="./images/3.svg" alt="" style={{marginLeft:"10px",marginRight:"10px"}} width={"30px"} height={"40px"} /></a> 
                   <a href="https://twitter.com/Uppal__MaYank?t=C4C3TRkRVvdiPkbm6N0uKA&s=09"><img src="./images/2.svg" alt=""  style={{marginLeft:"10px",marginRight:"10px"}} width={"30px"} height={"40px"}/></a> 
                   <a href=""><img src="./images/1.svg" alt="" style={{marginLeft:"10px",marginRight:"10px"}} width={"30px"} height={"40px"} /></a>  */}
                </div>
            </div>
        </div>

         <div className='image'>
            <img data-aos='fade-left'  id='img1' src="./images/h3.svg" alt=""  />
        </div>  
    </div>

    </>
    );
}

export default Home;
