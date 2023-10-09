import React, { useContext } from 'react'
import styled from 'styled-components'
import OpenBall from 'img/openball.png'
import CloseBall from 'img/closeball.png'
import { backgroundCardColors } from 'components/utils/backgroundCardColors';
import { useFavoriteContext } from 'context/useContexts/useFavoriteContext';
import { PokemonContext } from 'context/PokemonContext';
import { Link } from 'react-router-dom';
import Loading from './Loading';

const PokemonCardWrapper = styled.div`
    width: 200px;
    height: 200px;
    background-color: ${props => props.defaultColor};
    text-align: center;
    border: 3px solid #55aaaa;
    position: relative;

    .poke-id {
        font-size: 13px;
        position: absolute;
        left: 10px;
        top: 10px;
        color: ${props => props.theme.fontColor};
    }

    .poke-sprite {
        width: 70%;
        min-width: 100px;
        max-width: 250px;
    }

    .poke-info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: .7em;
        padding: 0 10px;
    }

    .poke-info p {
        font-size: 10px;
        text-transform: capitalize;
    }

    .poke-info-types {
        display: flex;
        flex-direction: column;
        gap: 5px;
    }

    .poke-info-types p {
        font-size: 8px;
        padding: 2px 10px;
        background-color: rgba(250, 250, 250, 0.5);
    }

    .fav-icon {
        width: 40px;
        position: absolute;
        z-index: 1;
        top: 70%;
        left: 50%;
        transform: translate(-50%, -50%);
        cursor: pointer;
    }

    @media (max-width: 450px) {
        width: 100%;
        height: 100%;
        margin: 0 10px;

        .poke-info {
            margin-top: 1em;
        }

        .poke-info p {
            font-size: 16px;
        }

        .poke-info-types p {
            font-size: 14px;
            padding: 5px 10px;
        }

        .fav-icon {
            width: 70px;
        }

        .poke-id {
            font-size: 25px;
        }
    }
`;

const PokemonCard = ({ data }) => {
    const {
        name,
        sprites,
        types,
        id
    } = data;

    const { addFavorite } = useFavoriteContext();
    const { favorite, setPokemonData, loading } = useContext(PokemonContext);

    const isPokemonFav = () => {
        const isFav = favorite.some((fav) => fav.id === id);
        const icon = !isFav ? OpenBall : CloseBall;
        return icon;
    }

    const ballIcon = isPokemonFav();

    const setBgColor = (types) => {
        const defaultType = types[0].type.name;
        const colorTypes = backgroundCardColors();
        const colorTypesFiltered = colorTypes.filter(colorType => colorType.type === defaultType);
        const defaultColor = colorTypesFiltered[0].color;
        return defaultColor
    }

    return (
        <PokemonCardWrapper defaultColor={setBgColor(types)}>
            <Link to={`/${id}`} onClick={() => setPokemonData(data)}>
                <p className='poke-id'>#{id}</p>
                <img src={sprites.front_default} alt={name} className='poke-sprite' />
                <div className='poke-info'>
                    <p>{name}</p>
                    <div className='poke-info-types'>
                        {types.map(type => <p className='poke-info-type'>{type.type.name}</p>)}
                    </div>
                </div>
            </Link>
            <img
                src={ballIcon}
                alt=""
                className='fav-icon'
                onClick={() => {
                    addFavorite(data);
                }}
            />
        </PokemonCardWrapper>
    )
}

export default PokemonCard