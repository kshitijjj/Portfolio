import React from "react";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Skills from "./Components/Skills";
import Experience from "./Components/Experience";
import Projects from "./Components/Projects";
import About from "./Components/About";
import Footer from "./Components/Footer";



function App() {
  return (
    <> 
    <Navbar/>
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
