import React from 'react'
import { Header, Description } from '../../components'
import './main.css'

interface MainProps { }

export const Main: React.FC<MainProps> = props => {

  return (
    <div className="container-fluid">
      <div className="row"><Header /></div>

      <div className="row">
        <div className="col">
          <div className="row my-6 component"><Description /></div>
        </div>
      </div>

    </div>
  )
}

