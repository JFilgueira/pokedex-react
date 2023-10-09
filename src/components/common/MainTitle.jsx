import React from 'react'
import styled from 'styled-components';
import Closeball from 'img/closeball.png'

const Title = styled.h1`
    display: flex;
    align-items: center;

    img {
        width: 50px;
    }

    h1 {
        color: ${props => props.theme.highlightFontColor} !important;
        font-size: ${props => props.size};
    }

    @media (max-width: 450px) {
        font-size: ${props => props.mobileSize};
    }
`;

const MainTitle = ({ title, size, mobileSize }) => {
    return (
        <Title size={size} mobileSize={mobileSize}>
            <h1>{title}</h1>
            <img src={Closeball} alt="pokéball" />
        </Title>
    )
}

export default MainTitle
