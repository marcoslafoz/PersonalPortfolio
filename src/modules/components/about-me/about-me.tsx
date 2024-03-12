import React from 'react'
import { DownloadCvButton } from './download-cv-button'

interface AboutMeProps { }

export const AboutMe: React.FC<AboutMeProps> = props => {

  return (


    <div className="container-fluid justify-content-center">
      <div className="row justify-content-center">
        <div className="col col-md-4 align-self-center ">

          <div className="row justify-content-center my-3">
            <div className="row font-color-primary justify-content-center text-bold font-size-1">Sobre Mi</div>
            <div className="row font-color-secondary justify-content-center font-size-4">Introducción</div>
          </div>

          <div className="row row-auto justify-content-center font-color-secondary font-size-3 text-center my-3">
            Soy Marcos Lafoz, estudiante de Desarrollo de Aplicaciones Multiplataforma en Zaragoza. Me apasiona la tecnologíay la programación
          </div>

          <div className="row justify-content-center my-5"><DownloadCvButton/></div>

        </div>
      </div>
    </div>


  )
}

