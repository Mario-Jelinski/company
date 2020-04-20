import React, { useEffect, useState } from 'react';
import './about.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import sign from './img/signing.png';
import logo from './img/img1.jpg';

function About() {  

    return (
        <section className="about">
            <div className="container">
                <div className="row row-fit-lg fade-bottom" data-anima="" data-time="1000">
                    <div className="col-lg-6 overflow">                        
                        <a className="img-box img-box-caption btn-video lightbox" href="#" data-lightbox-anima="fade-top">
                            <img src={logo} alt="" />
                            <span>Mario Schwarz</span>
                        </a>
                    </div>
                    <div className="col-lg-6">
                        <div className="title">
                            <h2>My values and goals</h2>
                            <p>About me</p>
                        </div>
                        <p>
                            Clean code and Simplicity. software that’s easy to understand and maintain that allows us to continue making changes.
                            Software that contains no more complexity than it needs to do a good job which keeps the cost low.
                        </p>
                        <div className="box-sign">
                            <img alt="sign" src={sign} />
                            <b>Mario Schwarz</b>
                            <span>Sofware Engineer</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;