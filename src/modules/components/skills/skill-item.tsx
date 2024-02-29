import React from 'react';
import './skills.css'

interface SkillItemProps { }

export const SkillItem: React.FC<SkillItemProps> = props => {

  return (


    <div className="skill">
      <div className="skillNameID">
        <p className="skillNameIDLeft">HTML</p>
        <p className="skillNameIDRight">95%</p>
      </div>
      <div className="skillBar"><div className="skillBarProg" id="JavaSkill" style={{ width: '95%' }}></div></div>
    </div>


  )
}

