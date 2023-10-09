import PokemonGrid from 'components/common/PokemonGrid';
import SearchFilter from 'components/common/SearchFilter';
import React from 'react'
import styled from 'styled-components'

const HomeStyled = styled.h1`
   display: flex;
   flex-direction: column;
   justify-content: center;

   .grid {
    align-self: center;
   }
`;


const Home = () => {
  return (
    <>
    <HomeStyled>
        <SearchFilter/>
        <PokemonGrid classname='grid'/>
    </HomeStyled>
    </>
  )
}

export default Home