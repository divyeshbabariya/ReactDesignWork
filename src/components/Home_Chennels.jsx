
import React, { Fragment } from 'react';
import './Home_Chennels.css';


const Home_Chennels = () => {
    
    const chennels = [
        {
            img:"./images/per1.png",
            name:"Isacc"
        },
        {
            img:"./images/per2.png",
            name:"Abigail"
        },
        {
            img:"./images/per3.png",
            name:"Alexandra"
        },
        {
            img:"./images/per4.png",
            name:"Murray"
        },
        {
            img:"./images/per5.png",
            name:"Jack"
        },
        {
            img:"./images/per6.png",
            name:"Amanda"
        },
        {
            img:"./images/per7.png",
            name:"Amy"
        },
        {
            img:"./images/per8.png",
            name:"Cameron"
        },
        {
            img:"./images/per9.png",
            name:"Andrea"
        },
        {
            img:"./images/per10.png",
            name:"Baker"
        },
        {
            img:"./images/per11.png",
            name:"Paul"
        },
        {
            img:"./images/per12.png",
            name:"Angela"
        },
        {
            img:"./images/per13.png",
            name:"Paul"
        },
        {
            img:"./images/per14.png",
            name:"Alexander"
        },
        {
            img:"./images/per15.png",
            name:"MacLeod"
        }
    ];
    
        
    return (
        <Fragment>
            <div className="chennels mt-3">
            {
                chennels.map((data) => {
                    return (
                        <div className="boxes mx-1">
                            <img src={data.img} alt="chennels" />
                            <p>{data.name}</p>
                        </div>
                    );
                })
            }
</div>
       
             <p className="text-center bottom">See All <i class="fas fa-angle-double-right"></i></p>

        </Fragment>
    );
};

export default Home_Chennels;