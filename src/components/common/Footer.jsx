import styled from "styled-components";
import React from 'react'
import { Link } from "react-router-dom";
import {AiFillGithub} from 'react-icons/ai'

const FooterWrapper = styled.footer`
    width: 100%;
    //background-color: #55aaaa;
    position: absolute;
    bottom: 0;
    padding: 5px;
    text-align: center;
    //border-top: 3px solid #448c8c;

    a {
        font-size: 10px;
        color: ${props => props.theme.highlightFontColor};
    }

    a svg {
        font-size: 13px;
        margin-right: 5px;
    }

    @media (max-width: 450px) {
        a {
            font-size: 12px;
        }
    }
`;

export const Footer = () => {
    return (
      <FooterWrapper>
        <Link>
            <AiFillGithub/>
            JFilgueira
        </Link>
      </FooterWrapper>
    )
  }

