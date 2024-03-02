import React from 'react'
import './skills.css'
import { SkillsCategoryType } from '../../../types'
import { SkillsCategory } from './skills-category'


interface SkillsProps {
  skillsData: SkillsCategoryType[]
}

export const Skills: React.FC<SkillsProps> = props => {

  const { skillsData } = props

  return (

    <div className="container-fluid justify-content-center">
      <div className="row justify-content-center">
        <div className="col col-md-5 align-self-center ">

          <div className="row justify-content-center my-3 mb-5">
            <div className="row font-color-primary justify-content-center text-bold font-size-1">Conocimientos</div>
            <div className="row font-color-secondary justify-content-center font-size-4">Mi nivel técnico</div>
          </div>

          <div className="row row-auto justify-content-center gap-5">

            {skillsData.map((s, index) => (
              <SkillsCategory categoryIcon={s.icon} categoryName={s.name} skills={s.skills} key={index} />
            ))}

          </div>

        </div>
      </div>
    </div>


  )
}

