import React, { useState } from 'react';
import Text from "./Text"; 
import { Link } from 'react-scroll';
import AOS from "aos";
import "aos/dist/aos.css";

function Home(props){


/*     const [box1,setBox1]=useState({
        backgroundColor: "#7629b2",
        border:"solid rgb(143, 42, 245"
    });
    const [box2,setBox2]=useState({
        backgroundColor:"white"
    })
    const [line,setline]=useState({
        color:"white"
    })
    const [line2,setLine2]=useState({
        color:"black"
    })

    function handleMouse(){
        setBox1({
            backgroundColor:"white",
            border:"solid rgb(143, 42, 245",
        })
        setline({
            color:"black"
        })
    }

    function handleMouseL(){
        setBox1({
            backgroundColor: "#7629b2",
            border:"solid rgb(143, 42, 245)"
        })
        setline({
            color:"white"
        })
        
    }

    function handleMouse1(){
        setBox2({
            backgroundColor:"#7629b2"
        })
        setLine2({
            color:"white"
        })
    }

    function handleMouseL1(){
        setBox2({
            backgroundColor:"white",
        })
        setLine2({
            color:"black"
        })
    }
 */
/* 
    function handlehover(){
        let box=document.getElementsByClassName(".box1");
        let style=box.s
    } */
  /*   let box=document.getElementsByClassName(".box1");
    const [box,setbox]=useState({
        width:"150px",
        height:"40px"
    })

    console.log(box)

    function handlehover(){
        setbox({
            width:'200px',
            height:"200px"
        })
    } */
    return (
        <>
    <div className='head' id="home">
        <div className='main'>
        
           {/*  <p id="text1" >Hey! I'm </p>
            <h1 id='text2'  >MAYANK &nbsp;UPPAL</h1> */}
            <h1 id="text3" >Video Editor ... </h1>
            <h1 id="text33" >Web Developer & Creative </h1>
            <p id='text1'>Hey everyone ! my name is mayank</p>
            <p id='text11'>welcome to our portfolio website</p>

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
                {/*    <a href="https://www.instagram.com/__.mayank.___07/">< img src="./images/4.svg" alt="" style={{marginLeft:"10px",marginRight:"10px"}}  width={"30px"} height={"40px"}  /></a> 
                   <a href="https://www.linkedin.com/in/mayank-uppal-3591a5229"><img src="./images/3.svg" alt="" style={{marginLeft:"10px",marginRight:"10px"}} width={"30px"} height={"40px"} /></a> 
                   <a href="https://twitter.com/Uppal__MaYank?t=C4C3TRkRVvdiPkbm6N0uKA&s=09"><img src="./images/2.svg" alt=""  style={{marginLeft:"10px",marginRight:"10px"}} width={"30px"} height={"40px"}/></a> 
                   <a href=""><img src="./images/1.svg" alt="" style={{marginLeft:"10px",marginRight:"10px"}} width={"30px"} height={"40px"} /></a> */} 
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
