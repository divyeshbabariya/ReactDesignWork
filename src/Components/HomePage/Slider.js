import React, {Fragment, useState} from 'react';

const Slider = () => {
const [img, setImg]=useState(0);

    const data = [
        {image: "./images/new.png"},
        {image: "./images/slider2.png"},
    ]
    
    const pre = () => { 
      img==0? setImg(1) : setImg(0)
    }
    const next = () => { 
        img==0? setImg(1) : setImg(0)
      }
    return(
        <Fragment>
<div className="slider" id="slider" >
<i class="fas fa-chevron-left" onClick={pre}></i>
<img src={data[img].image} alt="slidepic" style={{height:(img==0)? "450px" : "270px"}}/>

<i class="fas fa-chevron-right" onClick={next}></i>
</div>
        </Fragment>
    )
}

export default Slider;