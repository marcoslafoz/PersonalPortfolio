import React from 'react';
import './header.css'

interface Props {
  prop1?: string
}

export const Header: React.FC<Props> = props => {
 
  //const {prop1} = props
 
  return (

  <header className="headerNav">
    <div className="topName">marcos<span className="lafozName">lafoz</span></div>
    <nav className="topNav">
      <ul>
        <li><button id="btn-about-me">Inicio</button></li>
        <li><button id="btn-about-me">Sobre Mí</button></li>
        <li><button id="btn-about-me">Conocimientos</button></li>
        <li><button id="btn-about-me">Proyectos</button></li>
      </ul>
    </nav>
  </header>
  );
}

