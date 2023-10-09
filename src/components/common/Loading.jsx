import React from 'react'
import styled, { keyframes } from 'styled-components'
import HourGlass from 'img/hourglass.png'

const rotation = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

const LoadingWrapper = styled.div`
    font-size: 10px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;

    p {
        margin-top: 10px;
    }

    img {
        width: 20px;
        animation: ${rotation} 1s ease-in-out infinite;
    }
`;

const Loading = () => {
    return (
        <LoadingWrapper>
            <img src={HourGlass} alt="Hourglass" />
            <p className='loading-title'>loading...</p>
        </LoadingWrapper>
    )
}

export default Loading