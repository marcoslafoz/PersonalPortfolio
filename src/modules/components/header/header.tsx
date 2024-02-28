import React from 'react';
import './header.css'

interface Props { }

export const Header: React.FC<Props> = props => {

  return (

    <header className=" container-fluid d-flex flex-wrap justify-content-center py-4 mb-4">

      <div className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none ">
        <span className='text-bold font-size-2 font-color-primary' >marcos</span>
        <span className='font-size-2 font-color-primary'>lafoz</span>
      </div>

      <ul className="nav nav-pills">
        <li className="nav-item"><div className="nav-link font-color-primary text-medium" >Inicio</div></li>
        <li className="nav-item"><div className="nav-link font-color-primary text-medium">Sobre Mí</div></li>
        <li className="nav-item"><div className="nav-link font-color-primary text-medium">Conocimientos</div></li>
        <li className="nav-item"><div className="nav-link font-color-primary text-medium">Proyectos</div></li>
      </ul>

    </header>

  )
}

