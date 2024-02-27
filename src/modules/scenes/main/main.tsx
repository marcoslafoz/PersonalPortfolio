import React from 'react';
import { Header } from '../../components';
import './main.css'

interface MainProps {
  prop1?: string
}

export const Main: React.FC<MainProps> = props => {
 
  //const {prop1} = props
 
  return (
    <Header/>
  )
}

