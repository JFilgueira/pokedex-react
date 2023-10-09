import MainTitle from 'components/common/MainTitle';
import PokemonCard from 'components/common/PokemonCard';
import PokemonGrid, { PokemonGridWrapper } from 'components/common/PokemonGrid';
import { PokemonContext } from 'context/PokemonContext';
import { useFavoriteContext } from 'context/useContexts/useFavoriteContext';
import React, { useContext } from 'react'
import styled from 'styled-components'

const FavoriteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;
`;

const Favorite = () => {
  const { favorite } = useContext(PokemonContext)
  console.log(favorite);

  return (
    <FavoriteWrapper>
      <MainTitle title="Your's Pokémons" size='32px' mobileSize='16px' />
      <PokemonGridWrapper>
        {favorite.length < 1 && <p>You didn't catch any pokemon!</p>}
        {favorite.map(fav => <PokemonCard data={fav} key={fav.id}/>)}
      </PokemonGridWrapper>
    </FavoriteWrapper>
  )
}

export default Favorite