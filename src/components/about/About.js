import React, { useEffect, useState } from 'react';
import './about.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import sign from './img/sign.png';
import logo from './img/img1.jpg';

function About() {  

    return (
        <section className="about">
            <div class="container">
                <div class="row row-fit-lg fade-bottom" data-anima="" data-time="1000">
                    <div class="col-lg-6 overflow">                        
                        <a class="img-box img-box-caption btn-video lightbox" href="https://www.youtube.com/watch?v=Lb4IcGF5iTQ" data-lightbox-anima="fade-top">
                            <img src={logo} alt="" />
                            <span>Albert Patterson</span>
                        </a>
                    </div>
                    <div class="col-lg-6">
                        <div class="title">
                            <h2>Our values and goals</h2>
                            <p>About us</p>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt utlabore et dolore magna aliqua.
                            Utenim ad minim veniam quis nostrud exercitation ullamco laboris.
                        </p>
                        <div class="box-sign">
                            <img alt="sign" src={sign} />
                            <b>Albert Patterson</b>
                            <span>Founder &amp; CEO</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;