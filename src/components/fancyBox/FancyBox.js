import React, { useEffect, useState } from 'react';
import './fancyBox.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDesktop, faLock, faSitemap, faUsers } from '@fortawesome/free-solid-svg-icons'

function FancyBox() {  

    return (
        <section className="section-base section-overflow-top fancy-box">
            <div class="container">
                <div class="grid-list" data-columns="4" data-columns-md="2" data-columns-sm="1">
                    <div class="grid-box">
                        <div class="grid-item">
                            <div class="cnt-box cnt-box-top-icon boxed">                                
                                <div class="caption">
                                    <FontAwesomeIcon icon={faDesktop} />
                                    <h2>Smart softwares</h2>
                                    <p>
                                        Get your own unique software
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="grid-item">
                            <div class="cnt-box cnt-box-top-icon boxed">
                                <div class="caption">
                                    <FontAwesomeIcon icon={faLock} />
                                    <h2>Trusted security</h2>
                                    <p>
                                        Security, as part of the software development
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="grid-item">
                            <div class="cnt-box cnt-box-top-icon boxed">
                                <div class="caption">
                                    <FontAwesomeIcon icon={faSitemap} />
                                    <h2>Api development</h2>
                                    <p>
                                        Protected access to your datasets
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="grid-item">
                            <div class="cnt-box cnt-box-top-icon boxed">
                                <div class="caption">
                                    <FontAwesomeIcon icon={faUsers} />
                                    <h2>User experience</h2>
                                    <p>
                                        meaningful and relevant experiences to users
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

export default FancyBox;