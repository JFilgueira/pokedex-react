import React, { useContext } from 'react'
import styled from 'styled-components'
import PokemonCard from './PokemonCard';
import { PokemonContext } from 'context/PokemonContext';
import Loading from './Loading';

export const PokemonGridWrapper = styled.div`
    margin: 50px auto;
    width: 90%;
    min-height: 50vh;
    background-color: ${props => props.theme.pokegridColor};
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 10px;
    max-height: 50vh;
    max-width: 900px;
    overflow-y: auto;
    padding: 45px 0;

    @media (max-width: 450px) {
      height: 400px;
      margin-top: 20%;
    }
    
`;

const PokemonGrid = () => {
  const { allPokemons, searchedPokemons, loading } = useContext(PokemonContext);

  return (
    <PokemonGridWrapper>
      {loading && <Loading />}
      {
        searchedPokemons.length < 1
          ?
          allPokemons.map(pokemon => <PokemonCard data={pokemon.data} key={pokemon.data.id} />)
          :
          searchedPokemons.map(pokemon => <PokemonCard data={pokemon.data} key={pokemon.data.id} />)
      }

    </PokemonGridWrapper>
  )
}

export default PokemonGrid