import React from "react";
import Typewriter from "typewriter-effect";

  
function Text(props) {
  return (
    <div id={props.id}>
      <Typewriter
  
       onInit={(typewriter)=> {
  
       typewriter
      .typeString("Video Editor | Web Developer | Creative ")
       .start()
      
       }}
       />
    </div>
  );
}
  
export default Text;