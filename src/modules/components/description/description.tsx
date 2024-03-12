import React from 'react'
import './description.css'
import descriptionImage from '../../../assets/img/description.png'
import githubIcon from '../../../assets/img/mlgithub.png'
import linkedinIcon from '../../../assets/img/mllinkedin.png'
import { ContactButton } from './contact-button'



interface DescriptionProps { }

export const Description: React.FC<DescriptionProps> = props => {

  return (

    <div className="container-fluid justify-content-center">
      <div className="row flex-wrap gap-5 justify-content-center px-5">

        <div className="col col-auto align-self-center">
          <div className='pb-3'>
            <a href="https://github.com/marcoslafoz" target="_blank" rel="noreferrer">
              <img className="description-icons-img" src={githubIcon} alt='' />
            </a>
          </div>
          <div className='pt-3'>
            <a href="https://www.linkedin.com/in/marcoslafoz" target="_blank" rel="noreferrer">
              <img className="description-icons-img" src={linkedinIcon} alt='' />
            </a>
          </div>
        </div>

        <div className="col col-md-4 d-flex flex-column justify-content-center">
          <div className="row font-size-1 text-bold">Marcos Lafoz</div>
          <div className="row font-size-2 font-color-secondary text-medium my-2 mb-4">Junior Developer</div>
          <div className="row font-color-secondary font-size-3">Conocimientos en desarrollo web, programación y diseño, como desarrollador junior en búsqueda de oportunidades para seguir creciendo profesionalmente.</div>
          <div className="row justify-content-start mt-5"><ContactButton /></div>
        </div>

        <div className="col col-auto justify-content-center mt-4">
          <img className="img-fluid" src={descriptionImage} alt="Descrition" />
        </div>
      </div>
    </div>


  )
}

