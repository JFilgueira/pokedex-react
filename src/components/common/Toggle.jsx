import React from 'react'
import styled, { css } from 'styled-components'

const ToggleWrapper = styled.div`
    width: 50px;
    min-width: 50px;
    height: 25px;
    border-radius: 25px;
    margin: auto;
    border: 3px solid #448c8c;
    background-color: ${props => props.theme.backgroundColor};

    @media (max-width: 450px) {
        #header-toggle {
            display: none;
        }
    }
`;

const HeaderToggle = styled(ToggleWrapper)`
    @media (max-width: 450px) {
        display: none;
    }
`;

const Notch = styled.div`
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background-color: #61bfbf;
    display: flex;
    transition: transform 0.1s linear;
    cursor: pointer;
`;

const StyledNotch = styled(({ isActive, ...props }) => <Notch {...props} />)`
    ${props =>
        props.isActive &&
        css`
            transform: translate(${props => props.isActive ? '26px' : '1px'});
        `
    }
`;

export const ToggleToBeUsedInHeader = ({ isActive, onToggle }) => {
    return (
        <HeaderToggle onClick={onToggle}>
            <StyledNotch isActive={isActive}/>
        </HeaderToggle>
    )
}

const Toggle = ({ isActive, onToggle }) => {

    return (
        <ToggleWrapper onClick={onToggle}>
            <StyledNotch isActive={isActive} />
        </ToggleWrapper>
    )
}

export default Toggle