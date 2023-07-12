import React, { useEffect, useState } from "react";
import Home from "./Components/Home";
import Skills from "./Components/Skills";
import Experience from "./Components/Experience";
import Projects from "./Components/Projects";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";



function App() {
 
  return (
    <> 
    
    <Home />
    <Projects />
    <Skills /> 
    <Experience/>
    <About /> 
    <Contact/>
    <Footer/> 


    </>
  );
}

export default App;
