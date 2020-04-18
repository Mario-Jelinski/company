import React, { useEffect, useState } from 'react';
import './coreBox.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import logo1 from './img/3d.jpg';
import logo2 from './img/logo2.jpg';
import logo3 from './img/logo3.jpg';
import logo4 from './img/logo4.jpg';
import logo5 from './img/logo5.jpg';
import logo6 from './img/logo6.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

function CoreBox() {  

    return (
        <section className="core-box">
            <div class="container">
                <div class="row fade-bottom" data-anima="" data-time="1000">
                    <div class="col-lg-6">
                        <div class="title">
                            <h2>Core Technology services</h2>
                            <p>My services</p>
                        </div>
                    </div>
                    <div class="col-lg-6 align-right align-left-md">
                        <hr class="space-sm hidden-md" />
                        <a href="#" class="btn-text active">
                            All services 
                            <FontAwesomeIcon icon={faAngleRight} />
                        </a>
                    </div>
                </div>
                <hr class="space" />

                <div class="grid-list fade-bottom" data-columns="3" data-columns-md="2" data-columns-sm="1" data-anima="" data-time="1000">
                    <div class="grid-box">
                        <div class="grid-item">
                            <div class="cnt-box cnt-box-info boxed" data-href="#">
                                <a href="#" class="img-box"><img src={logo4} alt="" /></a>
                                <div class="caption">
                                    <h2>Web development</h2>
                                    <div class="cnt-info">
                                        <div><span>Price</span><span>650€</span></div>
                                        <div><span>Type</span><span>Saas</span></div>
                                        <div><span>Client</span><span>Business</span></div>
                                    </div>
                                    <p>
                                        Get support for your web project in React, Javascript, NodeJS, PHP or even C++.  
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="grid-item">
                            <div class="cnt-box cnt-box-info boxed" data-href="#">
                                <div class="extra-field">20% discount today</div>
                                <a href="#" class="img-box"><img src={logo5} alt="" /></a>
                                <div class="caption">
                                    <h2>Prototyping</h2>
                                    <div class="cnt-info">
                                        <div><span>Price</span><span>520€</span></div>
                                        <div><span>Type</span><span>Software</span></div>
                                        <div><span>Client</span><span>Business</span></div>
                                    </div>
                                    <p>
                                        Get an early sample, model, or release of a product built to test a concept or process.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="grid-item">
                            <div class="cnt-box cnt-box-info boxed" data-href="#">                                
                                <a href="#" class="img-box"><img src={logo6} alt="" /></a>
                                <div class="caption">
                                    <h2>API development</h2>
                                    <div class="cnt-info">
                                        <div><span>Price</span><span>650€</span></div>
                                        <div><span>Type</span><span>Consulting</span></div>
                                        <div><span>Client</span><span>Business</span></div>
                                    </div>
                                    <p>
                                        Secure and fast API with logging system, error handling and token authentication.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="grid-item">
                            <div class="cnt-box cnt-box-info boxed" data-href="#">
                                <div class="extra-field">20% discount today</div>
                                <a href="#" class="img-box"><img src={logo2} alt="" /></a>
                                <div class="caption">
                                    <h2>Performance checks</h2>
                                    <div class="cnt-info">
                                        <div><span>Price</span><span>520€</span></div>
                                        <div><span>Type</span><span>App</span></div>
                                        <div><span>Client</span><span>Private</span></div>
                                    </div>
                                    <p>
                                        Do you want to test your app and improve it's performance? I can help you to find slow implementations.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="grid-item">
                            <div class="cnt-box cnt-box-info boxed" data-href="#">
                                <a href="#" class="img-box"><img src={logo3} alt="" /></a>
                                <div class="caption">
                                    <h2>Test development</h2>
                                    <div class="cnt-info">
                                        <div><span>Price</span><span>650€</span></div>
                                        <div><span>Type</span><span>App</span></div>
                                        <div><span>Client</span><span>Business</span></div>
                                    </div>
                                    <p>
                                        You are missing integration and performance test or you want to implement selenium tests ?
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="grid-item">
                            <div class="cnt-box cnt-box-info boxed" data-href="#">
                                <a href="#" class="img-box"><img src={logo1} alt="" /></a>
                                <div class="caption">
                                    <h2>WebGL 3D</h2>
                                    <div class="cnt-info">
                                        <div><span>Price</span><span>700€</span></div>
                                        <div><span>Type</span><span>Software</span></div>
                                        <div><span>Client</span><span>Private</span></div>
                                    </div>
                                    <p>
                                        Rendering interactive 2D and 3D graphics without the use of plug-ins with babylonJS or ThreeJS
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CoreBox;