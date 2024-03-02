import React from 'react'
import { Header, Description, Skills, AboutMe, Footer, Projects } from '../../components'
import './main.css'
import { marcosSkillsData } from '../../utils'

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
          <div className="row my-6 component"><Projects/></div>
        </div>
      </div>
      <div className="row"><Footer /></div>
    </div>
  )
}

