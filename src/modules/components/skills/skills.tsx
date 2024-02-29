import React from 'react';
import './skills.css'
import { SkillItem } from './skill-item';

interface SkillsProps { }

export const Skills: React.FC<SkillsProps> = props => {

  return (


    <div className="container-fluid justify-content-center">
      <div className="row justify-content-center">
        <div className="col col-md-4 align-self-center ">

          <div className="row justify-content-center my-3">
            <div className="row font-color-primary justify-content-center text-bold font-size-1">Conocimientos</div>
            <div className="row font-color-secondary justify-content-center font-size-4">Mi nivel técnico</div>
          </div>

          <div className="row row-auto justify-content-center ">
            <SkillItem/>
          </div>



        </div>
      </div>
    </div>


  )
}

