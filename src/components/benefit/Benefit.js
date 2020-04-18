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
                            <h2>You should choose me</h2>
                            <p>Exclusive benefits</p>
                        </div>
                        <p>
                            Each organization has its own business model and in-house processes.
                            There're many benefits of designing and developing software exactly as per your requirements.
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
                            <FontAwesomeIcon icon={faAngleRight} />Customized software</Button>
                            <Collapse isOpen={isOpen1}>
                                <p>Business operations can be complex and every organization has different needs and issues. The numerous advantages of custom software development include integration, personalization, and cost effectiveness. It's better to create tailor-made products than to go off-the-shelf.</p>
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
                                Long time experience</Button>
                            <Collapse isOpen={isOpen2}>
                                <p>I worked a long time for the biggest company from europe, USA and South America</p>
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
                                <p>I worked in many teams and learned a lot about team characters, personality and leader in groups.</p>
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