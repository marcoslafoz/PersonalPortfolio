import React from 'react';
import { ProjectType } from '../../../../types';
import '../projects.css'
import websiteIcon from '../../../../assets/img/browser.svg'
import githubIcon from '../../../../assets/img/github.svg'

interface ProjectItemProps extends ProjectType { }

export const ProjectItem: React.FC<ProjectItemProps> = props => {

  const { description, github, name, previewImg, website } = props

  return (

    <div className="row gap-5 my-5">
      <div className="col ">
        <img className="img-fluid project-img" src={previewImg} alt="" />
      </div>

      <div className="col ">
        <div className="row font-color-primary font-size-3 text-medium">{name}</div>
        <div className="row font-color-secondary font-size-4 my-3">{description}</div>
        <div className="row gap-3">

          <div className="col col-auto p-0">
            <a href={website} target='_blank' rel="noopener noreferrer">
              <div className='project-button'>
                <img src={websiteIcon} alt='Website' />
              </div>
            </a>
          </div>

          <div className="col col-auto p-0 ">
            <a href={github} target='_blank' rel="noopener noreferrer">
              <div className='project-button'>
                <img src={githubIcon} alt='Website' />
              </div>
            </a>
          </div>

        </div>

      </div>
    </div>

  )
}

