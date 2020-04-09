import React, { useEffect, useState } from 'react';
import './coreBox.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

function CoreBox() {  

    return (
        <section className="core-box">
            <div class="container">
                <div class="row fade-bottom" data-anima="" data-time="1000">
                    <div class="col-lg-6">
                        <div class="title">
                            <h2>Core Technology services</h2>
                            <p>Our services</p>
                        </div>
                    </div>
                    <div class="col-lg-6 align-right align-left-md">
                        <hr class="space-sm hidden-md" />
                        <a href="#" class="btn-text active">All services</a>
                    </div>
                </div>


                <div class="grid-list fade-bottom" data-columns="3" data-columns-md="2" data-columns-sm="1" data-anima="" data-time="1000">
                    <div class="grid-box">
                        <div class="grid-item">
                            <div class="cnt-box cnt-box-info boxed" data-href="#">
                                <a href="#" class="img-box"><img src="media/image-17.jpg" alt="" /></a>
                                <div class="caption">
                                    <h2>Security audit</h2>
                                    <div class="cnt-info">
                                        <div><span>Price</span><span>$50</span></div>
                                        <div><span>Type</span><span>Software</span></div>
                                        <div><span>Client</span><span>Private</span></div>
                                    </div>
                                    <p>
                                        Excepteur sint occaecat cupidatat non proidento in culpa qui officia deserunt mollit anim id est laborum.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="grid-item">
                            <div class="cnt-box cnt-box-info boxed" data-href="#">
                                <a href="#" class="img-box"><img src="media/image-16.jpg" alt="" /></a>
                                <div class="caption">
                                    <h2>Performance checks</h2>
                                    <div class="cnt-info">
                                        <div><span>Price</span><span>$80</span></div>
                                        <div><span>Type</span><span>App</span></div>
                                        <div><span>Client</span><span>Private</span></div>
                                    </div>
                                    <p>
                                        Excepteur sint occaecat cupidatat non proidento in culpa qui officia deserunt mollit anim id est laborum.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="grid-item">
                            <div class="cnt-box cnt-box-info boxed" data-href="#">
                                <a href="#" class="img-box"><img src="media/image-9.jpg" alt="" /></a>
                                <div class="caption">
                                    <h2>Vulnerability report</h2>
                                    <div class="cnt-info">
                                        <div><span>Price</span><span>$50</span></div>
                                        <div><span>Type</span><span>App</span></div>
                                        <div><span>Client</span><span>Business</span></div>
                                    </div>
                                    <p>
                                        Excepteur sint occaecat cupidatat non proidento in culpa qui officia deserunt mollit anim id est laborum.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="grid-item">
                            <div class="cnt-box cnt-box-info boxed" data-href="#">
                                <a href="#" class="img-box"><img src="media/image-5.jpg" alt="" /></a>
                                <div class="caption">
                                    <h2>Web development</h2>
                                    <div class="cnt-info">
                                        <div><span>Price</span><span>$30</span></div>
                                        <div><span>Type</span><span>Saas</span></div>
                                        <div><span>Client</span><span>Business</span></div>
                                    </div>
                                    <p>
                                        Excepteur sint occaecat cupidatat non proidento in culpa qui officia deserunt mollit anim id est laborum.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="grid-item">
                            <div class="cnt-box cnt-box-info boxed" data-href="#">
                                <div class="extra-field">30% discount today</div>
                                <a href="#" class="img-box"><img src="media/image-11.jpg" alt="" /></a>
                                <div class="caption">
                                    <h2>Legal contracts</h2>
                                    <div class="cnt-info">
                                        <div><span>Price</span><span>$100</span></div>
                                        <div><span>Type</span><span>Software</span></div>
                                        <div><span>Client</span><span>Business</span></div>
                                    </div>
                                    <p>
                                        Excepteur sint occaecat cupidatat non proidento in culpa qui officia deserunt mollit anim id est laborum.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="grid-item">
                            <div class="cnt-box cnt-box-info boxed" data-href="#">
                                <div class="extra-field">30% discount today</div>
                                <a href="#" class="img-box"><img src="media/image-12.jpg" alt="" /></a>
                                <div class="caption">
                                    <h2>Strategic planning</h2>
                                    <div class="cnt-info">
                                        <div><span>Price</span><span>$100</span></div>
                                        <div><span>Type</span><span>Consulting</span></div>
                                        <div><span>Client</span><span>Business</span></div>
                                    </div>
                                    <p>
                                        Excepteur sint occaecat cupidatat non proidento in culpa qui officia deserunt mollit anim id est laborum.
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