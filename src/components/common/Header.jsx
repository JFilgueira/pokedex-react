import styled, { ThemeContext } from "styled-components";
import React, { useContext, useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { ToggleToBeUsedInHeader } from "./Toggle";
import { Link } from "react-router-dom";
import Menu from "./Menu";
import { PokemonContext } from "context/PokemonContext";

const HeaderWrapper = styled.header`
    background-color: #55aaaa;
    padding: 15px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 3px solid #448c8c;

    h1 {
        color: #fff;
    }

    .header-actions {
        display: flex;
        align-items: center;
        gap: 20px;
    }

    svg {
        font-size: 30px;
        color: #fff;
        cursor: pointer;
    }

    a {
        color: ${props => props.theme.fontColor};
    }

    @media (max-width: 450px) {
        width: 100%;
    }
`;

const Header = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const { id, setTheme } = useContext(ThemeContext);

    return (
        <HeaderWrapper>
            <Link to='/'>
                <h1 className="logo">Pokédex</h1>
            </Link>

            <div className="header-actions">
                <ToggleToBeUsedInHeader isActive={id === 'dark'} onToggle={setTheme}/>
                <GiHamburgerMenu onClick={() => setOpenMenu(!openMenu)}/>
            </div>
            <Menu openMenu={openMenu} setOpenMenu={setOpenMenu}/>
        </HeaderWrapper>
    )
}

export default Header