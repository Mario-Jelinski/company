import React, { useEffect, useState } from 'react';
import './about.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

function About() {  

    return (
        <section className="about">
            <div class="container">
                <div class="row row-fit-lg fade-bottom" data-anima="" data-time="1000">
                    <div class="col-lg-6">
                        <div class="slider glide glide--ltr glide--slider glide--swipeable" data-options="arrows:true,nav:false"><div data-glide-el="track" class="glide__track">
                            <ul class="glide__slides">
                                <li class="glide__slide glide__slide--active">
                                    <a class="img-box img-box-caption btn-video lightbox" href="https://www.youtube.com/watch?v=Lb4IcGF5iTQ" data-lightbox-anima="fade-top">
                                        <img src="media/image-3.jpg" alt="" />
                                        <span>Albert Patterson</span>
                                    </a>
                                </li>
                                <li class="glide__slide">
                                    <a class="img-box img-box-caption lightbox" href="media/image-16.jpg" data-lightbox-anima="fade-top">
                                        <img src="media/image-16.jpg" alt="" />
                                        <span>Security team</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="glide__arrows" data-glide-el="controls"><button class="glide__arrow glide__arrow--left" data-glide-dir="<"></button><button class="glide__arrow glide__arrow--right" data-glide-dir=">"></button></div></div>
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
                            <img alt="sign" src="media/sign-dark.png" />
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