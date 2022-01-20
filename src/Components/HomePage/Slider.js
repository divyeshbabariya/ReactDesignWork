import React, {Fragment, useState} from 'react';

const Slider = () => {
const [img, setImg]=useState(0);

    const data = [
        {image: "./images/carousel_img1.png"},
        {image: "./images/carousel_img2.png"},
    ]
    
    const pre = () => { 
      img==0? setImg(1) : setImg(0)
    }
    const next = () => { 
        img==0? setImg(1) : setImg(0)
      }
    return(
        <Fragment>
<div className="slider" id="slider">
<img src={data[img].image} alt="" />
<i class="fas fa-chevron-left position-absolute" onClick={pre}></i>
<i class="fas fa-chevron-right position-absolute" onClick={next}></i>
</div>
        </Fragment>
    )
}

export default Slider;