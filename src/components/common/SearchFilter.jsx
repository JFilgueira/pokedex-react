import { PokemonContext } from 'context/PokemonContext';
import React, { useContext, useState } from 'react'
import styled from 'styled-components'

const SearchFilterWrapper = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    gap: 5px;
    flex-wrap: wrap;

    label {
        display: flex;
        flex-direction: column;
        gap: 5px;
        font-size: 12px;
        color: ${props => props.theme.highlightFontColor};
    }

    .selects {
            display: flex;
            gap: 10px;
    }

    input {
        max-width: 500px;
        width: 60vw;
    }

    .selects select {
        width: 100px;
    }

    input, select {
        border: none;
       border: 2px solid #55aaaa;
       padding: 2px;
    }

    .nofound-message {
        font-size: 16px;
        padding-top: 10px;
        margin-bottom: -10px;
        text-align: center;
    }

    @media (max-width: 450px) {
        flex-direction: column;

        label {
            font-size: 16px;
        }

        input {
            width: 300px;
        }

        .selects {
            margin-top: 10px;
        }

        input, select {
            padding: 6px;
        }

        input::placeholder {
            font-size: 16px;
        }
    }
`;

const SearchFilter = () => {
    const [name, setName] = useState('');
    const [pokeExist, setPokeExist] = useState(false);

    const {
        pokemons,
        setSearchedPokemons
    } = useContext(PokemonContext);

    const handleChangeInput = (name) => {
        setName(name);

        if (name === '') {
            setSearchedPokemons(pokemons);
        } else {
            if (pokemons.filter(pokemon => pokemon.data.name.includes(name))) {

            }
            const filtered = pokemons.filter(pokemon => pokemon.data.name.includes(name))
            console.log(filtered.length);
            if (filtered.length < 1) {
                setPokeExist(true);
                setTimeout(() => {
                    setPokeExist(false)
                    setName('');
                }, 5000)
            }
            setSearchedPokemons([...filtered]);
        }
    }

    const pokemonsTypes = [
        'all-types',
        'bug',
        'dark',
        'dragon',
        'electric',
        'fairy',
        'fighting',
        'fire',
        'flying',
        'ghost',
        'grass',
        'ground',
        'ice',
        'normal',
        'poison',
        'psychic',
        'rock',
        'steel',
        'water',
    ]

    return (
        <SearchFilterWrapper>
            <label>
                Search
                <input
                    type="search"
                    name="search"
                    placeholder='Search Pokémon...'
                    value={name}
                    onChange={(e) => handleChangeInput(e.target.value)}
                />
            </label>
            {pokeExist && <p className='nofound-message'>Sorry... We didn't found any Pokémon!</p>}
        </SearchFilterWrapper>

    )
}

export default SearchFilter