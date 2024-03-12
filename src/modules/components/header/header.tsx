import React from 'react'
import './header.css'

interface HeaderProps { }

export const Header: React.FC<HeaderProps> = props => {

  return (

    <header className="container-fluid d-flex flex-wrap justify-content-center p-4">

      <div className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none ">
        <span className='text-bold font-size-2 font-color-primary' >marcos</span>
        <span className='font-size-2 font-color-primary'>lafoz</span>
      </div>

      <ul className="nav nav-pills">
        <li className="nav-item"><a href='#description' className="nav-link font-color-primary text-medium">Inicio</a></li>
        <li className="nav-item"><a href='#aboutme' className="nav-link font-color-primary text-medium">Sobre Mí</a></li>
        <li className="nav-item"><a href='#skills' className="nav-link font-color-primary text-medium">Conocimientos</a></li>
        <li className="nav-item"><a href='#projects' className="nav-link font-color-primary text-medium">Proyectos</a></li>
      </ul>

    </header>

  )
}

