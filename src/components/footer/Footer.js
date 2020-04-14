import React, { useEffect, useState } from 'react';
import './footer.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus } from '@fortawesome/free-solid-svg-icons'

function Footer() {  

    return (
        <footer class="footer">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4">
                        <h3>Execoore</h3>
                        <p>Full suite enable teams to develop unique search and discovery experiences.</p>
                        <div class="icon-links icon-social icon-links-grid social-colors">
                            <a class="facebook"><i class="icon-facebook"></i></a>
                            <a class="twitter"><i class="icon-twitter"></i></a>
                            <a class="instagram"><i class="icon-instagram"></i></a>
                            <a class="pinterest"><i class="icon-pinterest"></i></a>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <h3>Resources</h3>
                        <ul class="icon-list icon-line">
                            <li><FontAwesomeIcon icon={faMinus} /><a href="#">Partners and advertising</a></li>
                            <li><FontAwesomeIcon icon={faMinus} /><a href="#">About us and the company</a></li>
                            <li><FontAwesomeIcon icon={faMinus} /><a href="#">Services and projects</a></li>
                            <li><FontAwesomeIcon icon={faMinus} /><a href="#">Contact us online</a></li>
                        </ul>
                    </div>
                    <div class="col-lg-4">
                        <ul class="text-list text-list-line">
                            <li><b>Address</b><hr /><p>139 Baker St, E1 7PT, London</p></li>
                            <li><b>Email</b><hr /><p>contacts@example.com</p></li>
                            <li><b>Phone</b><hr /><p>(02) 123 333 444</p></li>
                            <li><b>Opening hours</b><hr /><p>8am-5pm Mon - Fri</p></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="footer-bar">
                <div class="container">
                    <span>© 2019 Execoore - Technology And Business Template Handmade by <a href="https://schiocco.com" target="_blank">schiocco.com</a>.</span>
                    <span><a href="#">Contact us</a> | <a href="#">Privacy policy</a></span>
                </div>
            </div>        
        </footer>
    )
}


export default Footer;