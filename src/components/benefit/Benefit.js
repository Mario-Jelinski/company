import React, { useEffect, useState } from 'react';
import './benefit.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Collapse, Button } from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

import logo from './img/box.png';

function Benefit() {  

    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
    
    const toggle = (flag) => {

        if (flag === 1) {
            setIsOpen1(!isOpen1);
        }
        
    };    
    let class1 = '';
    let class2 = '';
    let class3 = '';

    if (isOpen1) {
        class1 = ' active';
    }
    if (isOpen2) {
        class2 = ' active';
    }
    if (isOpen3) {
        class3 = ' active';
    }

    return (
        <section className="benefit">
            <div class="container">
                <div class="row align-items-center fade-bottom" data-anima="" data-time="1000">
                    <div class="col-lg-6">
                        <div class="title">
                            <h2>You should choose us</h2>
                            <p>Exclusive benefits</p>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet consecteture Duis aute irure dolor innocente reprehenderit
                            in voluptate velit esse cillum dolore eu fugiat nulla.
                        </p>
                        <hr class="space-sm" />
                        <div className="menu-entry">
                            <Button color="primary" className={class1} 
                                onClick={() => {                                
                                    setIsOpen1(!isOpen1);
                                    if (!isOpen1) {
                                        setIsOpen2(false);
                                        setIsOpen3(false);   
                                    }                                
                                }} 
                            >
                                    <FontAwesomeIcon icon={faAngleRight} />The membership cards</Button>
                            <Collapse isOpen={isOpen1}>
                                <p>Lorem ipsum dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt utlabore et dolore magna aliqua. Utenim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                            </Collapse>                        
                        </div>
                        <div className="menu-entry">
                            <Button color="primary" className={class2}  
                                onClick={() => {                                
                                    setIsOpen2(!isOpen2);
                                    if (!isOpen2) {
                                        setIsOpen1(false);
                                        setIsOpen3(false);   
                                    }                                
                                }}  
                            >
                                <FontAwesomeIcon icon={faAngleRight} />
                                Financials helps and money back</Button>
                            <Collapse isOpen={isOpen2}>
                                <p>Lorem ipsum dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt utlabore et dolore magna aliqua. Utenim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                            </Collapse>
                        </div>   
                        <div className="menu-entry">                     
                            <Button color="primary" className={class3}
                                onClick={() => {                                
                                    setIsOpen3(!isOpen3);
                                    if (!isOpen3) {
                                        setIsOpen1(false);
                                        setIsOpen2(false);   
                                    }                                
                                }}
                            >
                                <FontAwesomeIcon icon={faAngleRight} />Team creation and support</Button>
                            <Collapse isOpen={isOpen3}>
                                <p>Lorem ipsum dolor sit amet consectetur adipiscing elitsed do eiusmod tempor incididunt utlabore et dolore magna aliqua. Utenim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                            </Collapse>
                        </div>   
                    </div>
                    <div class="col-lg-6">
                        <img src={logo} alt="" />
                    </div>
                </div>
            </div>
        </section> 
    );
}

export default Benefit;