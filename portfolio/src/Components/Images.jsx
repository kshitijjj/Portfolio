import React from 'react';

function Images(props) {
    return (
        <div className='main3' > 
            <img id={props.id} src={props.src} alt="" />
        </div>
    );
}

export default Images;
