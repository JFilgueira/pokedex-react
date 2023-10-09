
import { PokemonContext } from "context/PokemonContext";
import { useContext, useEffect } from "react";

export function getPokemons(url) {
    const {setPokemons} = useContext(PokemonContext);
}

/* export default function usePokemonsContext() {
    const { setPokemons } = useContext(PokemonContext);

    const getPokemons = () => {

        const endpoints = [];
        const numberOfPokemons = 10;

        for (let i = 1; i = numberOfPokemons; i++) {
            endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}`);
        }

        setPokemons(endpoints);
        /* axios.all(endpoints.map(endpoint => axios.get(endpoint)))
            .then(response => setPokemons(response)); */

    /* }

} */



