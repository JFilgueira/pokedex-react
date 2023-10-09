import React, { useContext, useEffect, useState } from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import LightTheme from 'themes/light'
import DarkTheme from 'themes/dark'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './common/Header';
import Home from './pages/Home';
import Favorite from './pages/Favorite';
import { Footer } from './common/Footer';
import { PokemonContext } from 'context/PokemonContext';
import axios from 'axios';
import Profile from './pages/Profile';

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        background-color: ${props => props.theme.backgroundColor};
        height: 100vh;
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: 'Press Start 2P', cursive;
        color: black;
    }

    p {
        font-family: 'Press Start 2P', cursive;
        color: ${props => props.theme.fontColor};
    }

    a {
        text-decoration: none;
        font-family: 'Press Start 2P', cursive;
    }

    li {
        font-family: 'Press Start 2P', cursive;
    }
`;

const App = () => {
    const [theme, setTheme] = useState(LightTheme);
    const {
        pokemons,
        setPokemons,
        setAllPokemons,
        setLoading
    } = useContext(PokemonContext);

    useEffect(() => {
        getPokemons();
    }, []);

    setAllPokemons(pokemons);

    const getPokemons = () => {
        setLoading(true);
        const endpoints = [];
        const numberOfPokemons = 150;

        for(let i = 1; i <= numberOfPokemons; i++) {
            endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}`);
        }
        
        axios.all(endpoints.map(endpoint => axios.get(endpoint)))
            .then(response => {
                setPokemons(response);
                setLoading(false);
            })
            .catch(console.log('Fail to conect the API'));
    }

    return (
        <ThemeProvider theme={{
            ...theme, setTheme: () => {
                setTheme(currentTheme => currentTheme.id === 'light' ? DarkTheme : LightTheme);
            }
        }}>
            <GlobalStyle />
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/favorite' element={<Favorite />} />
                    <Route path='/:id' element={<Profile />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </ThemeProvider>
    )
}

export default App