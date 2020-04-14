import React, { useEffect, useState } from 'react';
import Babylon from '../Babylon';
import './header.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

import logo from './img/logo.png';

function Header() {  
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    const bab = new Babylon(100, 100);
  });

  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 header-top">
            <div className="menu-brand">
              <a href="#">                  
                <img src={logo} alt="" />
                <span className="black">black</span>
                <span className="dev">development</span>
              </a>              
            </div>            
            <canvas id="renderCanvas" touch-action="none"></canvas>            
          </div>
        </div>
      </div>
      <div className="line"></div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 main-menu">            
            <Navbar light expand="md">
              <NavbarBrand href="/">HOME</NavbarBrand>
              <NavbarToggler onClick={toggle} />
              <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                  <NavItem>
                    <NavLink href="/components/">Components</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                  </NavItem>
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                      Options
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>
                        Option 1
                      </DropdownItem>
                      <DropdownItem>
                        Option 2
                      </DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem>
                        Reset
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </Nav>
                <NavbarText>
                  <span>CALL ME:</span>
                  <span className="phone">0176 xxx xxx xxx</span>
                </NavbarText>
              </Collapse>
            </Navbar>


          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;