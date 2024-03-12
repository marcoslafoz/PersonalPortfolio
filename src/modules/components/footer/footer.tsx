import React from 'react'
import './footer.css'

import githubIcon from '../../../assets/img/github.svg'
import linkedinIcon from '../../../assets/img/linkedin.svg'
import gmailIcon from '../../../assets/img/mail.svg'


interface FooterProps { }

export const Footer: React.FC<FooterProps> = () => {

  return (

    <footer className="d-flex flex-wrap justify-content-between align-items-center p-4 border-top">
      <div className="col-md-4 d-flex align-items-center">
        <span className='text-bold font-size-2 text-white' >marcos</span>
        <span className='font-size-2 text-white'>lafoz</span>
      </div>
      <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
        <li className="ms-3">
          <div className="row align-items-cente gap-2">
            <div className="col col-auto align-self-end bg-error">
              <a href="https://github.com/marcoslafoz" target="_blank" rel="noreferrer"><img className="footer-icons-img" src={githubIcon} alt='Github' /></a>
            </div>
            <div className="col col-auto align-self-end bg-error">
              <a href="https://www.linkedin.com/in/marcoslafoz" target="_blank" rel="noreferrer"><img className="footer-icons-img" src={linkedinIcon} alt='Linkedin' /></a>
            </div>
            <div className="col col-auto align-self-end bg-error">
              <a href="mailto:marcos.lafoz96@gmail.com" target="_blank" rel="noreferrer"><img className="footer-icons-img" src={gmailIcon} alt='Gmail' /></a>
            </div>
          </div>
        </li>
      </ul>
    </footer>

  )
}

