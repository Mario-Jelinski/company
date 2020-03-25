import React, { useEffect } from 'react';
import Babylon from '../Babylon';
import './header.scss';

function Header() {
  
  useEffect(() => {
    const bab = new Babylon(100, 100);
  });
  return (
    <div className="header">
        <canvas id="renderCanvas" touch-action="none"></canvas>
    </div>
  );
}

export default Header;