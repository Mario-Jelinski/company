import React, { useEffect, useState } from 'react';
import './footer.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus } from '@fortawesome/free-solid-svg-icons'

function Footer() {  

    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <h3>Black-Development</h3>
                        <p>Full suite enable teams to develop unique search and discovery experiences.</p>
                        <div className="icon-links icon-social icon-links-grid social-colors">
                            <a className="facebook"><i className="icon-facebook"></i></a>
                            <a className="twitter"><i className="icon-twitter"></i></a>
                            <a className="instagram"><i className="icon-instagram"></i></a>
                            <a className="pinterest"><i className="icon-pinterest"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        {/*
                        <h3>Resources</h3>
                        <ul className="icon-list icon-line">
                            <li><FontAwesomeIcon icon={faMinus} /><a href="#">Partners and advertising</a></li>
                            <li><FontAwesomeIcon icon={faMinus} /><a href="#">About us and the company</a></li>
                            <li><FontAwesomeIcon icon={faMinus} /><a href="#">Services and projects</a></li>
                            <li><FontAwesomeIcon icon={faMinus} /><a href="#">Contact us online</a></li>
                        </ul>
                        */}
                    </div>
                    <div className="col-lg-4">
                        <ul className="text-list text-list-line">
                            <li><b>Address</b><hr /><p>Goethepark 14, 10627, Berlin</p></li>
                            <li><b>Email</b><hr /><p>GrinderFX@gmx.de</p></li>
                            <li><b>Phone</b><hr /><p>+49 176 231 22 674</p></li>
                            <li><b>Opening hours</b><hr /><p>8am-5pm Mon - Fri</p></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-bar">
                <div className="container">
                    <span>© 2020 Black-Development - Technology And Business.</span>
                </div>
            </div>        
        </footer>
    )
}


export default Footer;