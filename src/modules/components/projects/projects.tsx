import React from 'react'
import { ProjectItem } from './project-item'
import { marcosProjectData } from '../../utils'

interface ProjectsProps { }

export const Projects: React.FC<ProjectsProps> = () => {

  return (


    <div className="container-fluid justify-content-center">
      <div className="row justify-content-center">
        <div className="col col-md-5 align-self-center ">

          <div className="row justify-content-center my-3 mb-5">
            <div className="row font-color-primary justify-content-center text-bold font-size-1">Proyectos</div>
            <div className="row font-color-secondary justify-content-center font-size-4">Mis proyectos</div>
          </div>

          <div className="row row-auto justify-content-center my-3 ">
            <div className="col col-auto">
              {marcosProjectData.map((p, index) => (
                <ProjectItem name={p.name} description={p.description} github={p.github} website={p.website} previewImg={p.previewImg} key={index} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>


  )
}

