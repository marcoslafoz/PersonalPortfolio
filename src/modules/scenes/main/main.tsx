import React from 'react'
import { Header, Description, Skills, AboutMe } from '../../components'
import './main.css'
import { marcosSkillsData } from '../../utils/data'

interface MainProps { }

export const Main: React.FC<MainProps> = props => {

  return (
    <div className="container-fluid">
      <div className="row"><Header /></div>

      <div className="row">
        <div className="col">
          <div className="row my-6 component"><Description /></div>
          <div className="row my-6 component"><AboutMe /></div>
          <div className="row my-6 component"><Skills skillsData={marcosSkillsData} /></div>
        </div>
      </div>

    </div>
  )
}

