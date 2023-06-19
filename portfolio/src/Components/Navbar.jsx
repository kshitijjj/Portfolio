import React, { useState } from 'react';
import { Link } from 'react-scroll';


function Navbar(props){


  const [text,settext]=useState("Dark Mode");

  function handleClick(){
    
    if(text=="Light Mode"){
      settext("Dark Mode");
    }
    else if(text=="Dark Mode"){
      settext("Light Mode");
    }
    

  }
    return (
        <div >
      <nav id='navbar_bg' class="navbar navbar-expand-lg navbar-light " > 
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div  class="collapse navbar-collapse" id="navbar_bg"  >
    <ul class="navbar-nav">
      <li class="nav-item ">
        <Link id ="i1" class="nav-link" to="/" spy={true} smooth={true} offset={30} duration={730} style={{color:"black",fontSize:"20px",fontFamily:"Playfair Display"}}>Home</Link>
      </li>
      <li class="nav-item">
        <Link id ="i2" class="nav-link" to="skills" spy={true} smooth={true} offset={30} duration={730}  style={{color:"black",fontSize:"20px",fontFamily:"Playfair Display"}}>Skills</Link>
      </li>
      <li class="nav-item">
        <Link id ="i3" class="nav-link " to="experiences"  spy={true} smooth={true} offset={30} duration={730}  style={{color:"black",fontSize:"20px",fontFamily:"Playfair Display"}}>Experience</Link>
      </li>
      <li class="nav-item ">
        <Link id ="i4" class="nav-link" to="projects"  spy={true} smooth={true} offset={30} duration={730}  style={{color:"black",fontSize:"20px",fontFamily:"Playfair Display"}}>Project</Link>
      </li>
      <li class="nav-item ">
        <Link id ="i5" class="nav-link" to="about"  spy={true} smooth={true} offset={30} duration={730}  style={{color:"black",fontSize:"20px",fontFamily:"Playfair Display"}}>About</Link>
      </li>
    </ul>
  </div>
</nav>
        </div>
    );
}

export default Navbar;
