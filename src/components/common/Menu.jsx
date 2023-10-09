import React, { useContext, useState } from 'react'
import { Overlay } from './Overlay'
import styled, { ThemeContext } from 'styled-components'
import { AiOutlineClose, AiFillGithub } from 'react-icons/ai'
import { Link } from 'react-router-dom';
import Toggle from './Toggle';
import About from './About';

const StyledMenu = styled.nav`
    height: 100%;
    width: 25%;
    min-width: 250px;
    background-color: ${props => props.theme.backgroundColor};
    padding: 10px;
    z-index: 1;
    
    .menu-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
    }

    .menu-logo, svg {
        color: ${props => props.theme.highlightFontColor} !important;
    }

    .menu-header h1 {
        font-size: 1rem;
    }

    .menu-header svg {
        font-size: 16px;
    }

    .menu-main {
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin-bottom: 20px;
    }

    .menu-main a, .menu-main p {
        font-size: 10px;
        color: ${props => props.theme.fontColor};
    }

    .menu-main p {
        cursor: pointer;
    }

    .favorite {
        background-color: #55aaaa;
        padding: 10px;
    }

    .app-resume {
        margin-top: 20px;
    }

    .menu-footer {
        position: absolute;
        bottom: 30px;
    }

    .menu-footer p {
        font-size: 10px;
        margin-bottom: 10px;
        text-align: center;
    }

    .menu-footer a {
        font-size: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${props => props.theme.highlightFontColor};
    }

    .menu-footer svg {
        font-size: 13px;
        margin-right: 5px;
    }

    @media (max-width: 450px) {
        width: 70%;

        .menu-header h1 {
            font-size: 1.5rem;
        }

        .menu-header svg {
            font-size: 25px;
        }

        .menu-main {
            gap: 20px;
        }

        .menu-main a, .menu-main p {
            font-size: 15px;
        }

        .app-resume {
            margin-top: 30px;
            font-size: 1.5rem;
        }

    }
`;

const OverlayForMenu = styled(Overlay)`
    display: ${props => props.openMenu ? 'flex' : 'none'};
    justify-content: flex-end;
`;

const Menu = ({ openMenu, setOpenMenu }) => {
    const { id, setTheme } = useContext(ThemeContext);
    const [openAbout, setOpenAbout] = useState(false);

    return (
        <OverlayForMenu openMenu={openMenu}>
            <StyledMenu>
                <div className='menu-header'>
                    <h1 className='menu-logo'>Pokédex</h1>
                    <AiOutlineClose onClick={() => setOpenMenu(!openMenu)} /> {/* warning in console. Need overwrite the component in a new on e import the latest as done in the Toggle.jsx in the Notch component */}
                </div>

                <div className="menu-main">
                    <Link to='/'>
                        Home
                    </Link>
                    <p onClick={() => setOpenAbout(!openAbout)}>
                        About
                    </p>
                    <Link to='/favorite' className='favorite'>
                        Your's pokémons
                    </Link>
                </div>
                <Toggle isActive={id === 'dark'} onToggle={setTheme}/>

                <p className='app-resume'>Get to know all pokémons and catch your favorite ones!</p>

                <div className='menu-footer'>
                    <p>Built with React, PokéAPI and Styled-Components</p>
                    <Link to='https://github.com/jfilgueira' target='_blank'>
                        <AiFillGithub />JFilgueira
                    </Link>
                </div>
            </StyledMenu>
            <About openAbout={openAbout} setOpenAbout={setOpenAbout}/>
        </OverlayForMenu>
    )
}

export default Menu