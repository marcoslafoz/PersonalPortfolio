import React from 'react';
import '../skills.css'
import { SkillItem } from './skill-item';
import { SkillType } from '../../../../types';

interface SkillsCategoryProps {
  categoryName: string
  categoryIcon: any
  skills: SkillType[]
}

export const SkillsCategory: React.FC<SkillsCategoryProps> = props => {

  const { skills, categoryIcon, categoryName } = props

  return (

    < div className="col col-auto" >
      <div className="row d-flex skills-group-container">
        <div className="row align-items-center gap-3 my-4">
          <div className='col col-auto align-items-center p-0'><img className='skills-group-img' src={categoryIcon} alt='' /></div>
          <div className="col align-items-center text-medium font-size-3 p-0">{categoryName}</div>
        </div>

        {skills.map((p, index) => (
          <SkillItem key={index} name={p.name} percentage={p.percentage} />
        ))}

      </div>
    </div >

  )
}

