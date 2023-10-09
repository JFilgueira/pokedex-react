import { createContext, useState } from "react";

export const PokemonContext = createContext();

export default function PokemonProvider({children}) {
    const [pokemons, setPokemons] = useState([]);
    const [searchedPokemons, setSearchedPokemons] = useState([]);
    const [allPokemons, setAllPokemons] = useState([]);
    const [favorite, setFavorite] = useState([]);
    const [pokemonData, setPokemonData] = useState();
    const [loading, setLoading] = useState(false);

    const value = {
        pokemons,
        setPokemons,

        searchedPokemons, 
        setSearchedPokemons,

        allPokemons,
        setAllPokemons,

        favorite,
        setFavorite,

        pokemonData,
        setPokemonData,

        loading, 
        setLoading
    }

    return (
        <PokemonContext.Provider value={value}>
            {children}
        </PokemonContext.Provider>
    )
} 