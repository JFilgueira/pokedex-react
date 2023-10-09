import { PokemonContext } from "context/PokemonContext";
import { useContext } from "react";

export function useFavoriteContext() {
    const {favorite, setFavorite} = useContext(PokemonContext);

    function addFavorite(newFav) {
        const isFavRepeated = favorite.some(pokemon => pokemon.id === newFav.id);

        let newListOfFavorite = [...favorite];

        if(!isFavRepeated) {
            newListOfFavorite.push(newFav);
            return setFavorite(newListOfFavorite);
        } else {
            newListOfFavorite.splice(newListOfFavorite.indexOf(newFav), 1);
            return setFavorite(newListOfFavorite);
        }
    }

    return {
        favorite,
        addFavorite
    }
}