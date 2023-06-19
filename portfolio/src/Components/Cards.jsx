import React, { useState } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import { useSearchParams } from 'react-router-dom';

function Cards(props){
    return (
        <>
        <div id={props.id3} data-aos={props.aos}  className='card1'>
            <p  id={props.id}>{props.work}</p>
            <p  id={props.id2}>{props.company}</p>
            <p id='time'>{props.time}</p>
            <div className='line1'></div>
            <div className='details'>
                <p id='desc1'>{props.desc1}</p>
                <p id='desc2'>{props.desc2}</p>
                <p id='desc3'>{props.desc3}</p>
                <p id='desc4'>{props.desc4}</p>

            <div className="button">
                <a id='a3' href="">Go Somewhere</a>
            </div>
            </div>
        </div>
        </>
    );
}

export default Cards;
