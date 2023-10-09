import React from 'react'
import { Overlay } from './Overlay'
import styled from 'styled-components'
import {AiOutlineClose} from 'react-icons/ai'
import Closeball from 'img/closeball.png'
import { Link } from 'react-router-dom'
import MainTitle from './MainTitle'

const AboutPopup = styled.div`
  width: 500px;
  height: 400px;
  background-color: ${props => props.theme.backgroundColor};
  padding: 20px;
  position: relative;
  margin: 0 15px;

  .about-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  svg {
    color: ${props => props.theme.highlightFontColor} !important;
  }

  .about-main p {
    margin-bottom: 10px;
    line-height: 20px;
    color: ${props => props.theme.fontColor};
  }

  .main-features {
    padding-left: 30px;
    margin-top: 20px;
  }

  .feature {
    font-size: 12px;
    margin-bottom: 5px;
    color: ${props => props.theme.fontColor};
  }

  .about-footer {
    position: absolute;
    bottom: 0;
    margin-bottom: 10px;
  }

  .about-footer p {
    font-size: 10px;
  }

  .about-footer a {
    color: #55aaaa;

  }

  @media (max-width: 450px) {
    height: 80vh;

    .about-main {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    .feature {
      margin-bottom: 10px;
    }
  }
`;


const OverlayForAboutPopup = styled(Overlay)`
    display: ${props => props.openAbout ? 'flex' : 'none'};
    justify-content: center;
    align-items: center;
`;

const About = ({openAbout, setOpenAbout}) => {
  return (
    <OverlayForAboutPopup openAbout={openAbout}>
      <AboutPopup>
        <div className="about-header">
          <MainTitle title='About' size='32px'/>
          <AiOutlineClose onClick={() => setOpenAbout(!openAbout)}/>
        </div>
        <div className="about-main">
          <p>A simple Pokémon catalogue built with React, PokéAPI and Styled-components.</p>
          <p>The main features are:</p>
          <ul className='main-features'>
            <li className='feature'>List Pokémons basic info in cards</li>
            <li className='feature'>View detailed info of each Pokémon</li>
            <li className='feature'>Favorite Pokémons</li>
            <li className='feature'>Search Pokémon by it's Name</li>
            <li className='feature'>Dark mode</li>
            <li className='feature'>Responsive design</li>
          </ul>
        </div>
        <div className="about-footer">
          <p>
            More information in the
            <Link to='https://github.com/jfilgueira' target='_blank'> Git Repository.</Link>
            </p>
        </div>
      </AboutPopup>
    </OverlayForAboutPopup>
  )
}

export default About