import React from 'react';
import { Header } from '../../components';
import './main.css'

interface MainProps { }

export const Main: React.FC<MainProps> = props => {
 
  return (
    <div className="main-container container-fluid">
      <Header/>
    </div>
  )
}

