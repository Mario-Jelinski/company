import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import './topBanner.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import me from './img/me.png';

function TopBanner() {  
   
    useEffect(() => {
        
      });
    return (
        <div className="top-banner">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        <hr className="space-lg" />
                        <h3 className="text-color-2">
                            ACCELERATE THE USER EXPERIENCE
                        </h3>
                        <Carousel controls={false} number={3000}>
                            <Carousel.Item>                                
                                <Carousel.Caption>
                                    <h1>First slide label</h1>                                
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Carousel.Caption>
                                    <h1>Second slide label</h1>                                
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Carousel.Caption>
                                    <h1>Third slide label</h1>                                
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>


                        <p>
                            Try now our free trial membership.  Duis aute irure dolor in reprehenderit
                            in voluptate velit esse cillum dolore eu fugiat nulla pariature irure dolore.
                        </p>
                        <hr className="space-sm" />
                        <a href="#" className="btn btn-sm width-190 full-width-sm">Request a quote</a>
                        <a href="#" className="btn btn-border btn-sm width-190 active full-width-sm">Free trial</a>
                        <hr className="space-lg" />
                        <hr className="space-lg" />
                    </div>  
                    <div className="col-lg-5 me">
                        <img 
                            data-anima="" 
                            data-time="1000" 
                            className="slide-image fade-bottom" 
                            src={me} alt=""                             
                        />
                    </div>                  
                </div>
            </div>
        </div>
    );

}


export default TopBanner;