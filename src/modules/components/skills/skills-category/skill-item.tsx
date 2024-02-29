import React from 'react';
import '../skills.css'
import { SkillType } from '../../../../types';

interface SkillItemProps extends SkillType { }

export const SkillItem: React.FC<SkillItemProps> = props => {

  const { name, percentage } = props

  return (

    <div className="row my-2">
      <div className="skill">
        <div className="skillNameID text-medium font-size-4">
          <p className="skillNameIDLeft">{name}</p>
          <p className="skillNameIDRight">{percentage}%</p>
        </div>
        <div className="skillBar"><div className="skillBarProg" style={{ width: `${percentage}%` }}></div></div>
      </div>
    </div>

  )
}

