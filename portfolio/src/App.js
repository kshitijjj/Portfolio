import React, { useEffect, useState } from "react";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Skills from "./Components/Skills";
import Experience from "./Components/Experience";
import Projects from "./Components/Projects";
import About from "./Components/About";
import Footer from "./Components/Footer";


/* function useWindowSize(){
  const[size,setSize]=useState([window.innerHeight,window.innerWidth]);
  useEffect(()=>{
    const handleResize=()=>{
      setSize([window.innerHeight,window.innerWidth]);
    };
    window.addEventListener("resize",handleResize);
    return()=>{
      window.removeEventListener("resize",handleResize);
    }
  },[])
  return size;

} */

function App() {
 /*  const[height,width]=useWindowSize(); */
  return (
    <> 
    <Navbar sticky='top'/>
    <Home />
    <Projects />
    <Skills />
    <Experience/>
    <About />
    <Footer/>


    </>
  );
}

export default App;
