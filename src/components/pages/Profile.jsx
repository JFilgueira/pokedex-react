import MainTitle from 'components/common/MainTitle';
import { Overlay } from 'components/common/Overlay'
import React, { useContext } from 'react'
import styled from 'styled-components'
import { AiOutlineClose } from 'react-icons/ai'
import { PokemonContext } from 'context/PokemonContext';
import { Link, useNavigate } from 'react-router-dom';

const OverlayForProfile = styled(Overlay)`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ProfileWrapper = styled.div`
    width: 80%;
    height: 90%;
    background-color: ${props => props.theme.backgroundColor};
    padding: 10px;

    .detailed-titles {
        color: #55aaaa;
        font-size: 16px;
    }

    .closeIcon {
        cursor: pointer;
    }

    .profile-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;

        h1, svg {
            color: ${props => props.theme.highlightFontColor} !important;
        }

        svg {
            font-size: 25px;
        }
    }

    .profile-main {
        display: flex;
        justify-content: center;
        padding: 30px;

        .profile-basic-info, .profile-detailed-info {
            border: 3px solid #55aaaa;
            padding: 10px;
            height: 350px;
        }

        .profile-basic-info {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            margin-right: 30px;
            width: 30%;
            text-align: center;

            img {
                width: 100%;
            }

            #name {
                text-transform: capitalize;
            }

            .profile-info-types {
                display: flex;
                justify-content: center;
                gap: 10px;

                p {
                    padding: 3px 5px;
                }
            }

            .profile-weight-height {
                display: flex;
                justify-content: space-between;
                margin-top: 10px;

                p {
                    font-size: 10px;
                    display: flex;
                }

                #weight {
                    color: red;
                    margin-right: 5px;
                }

                #height {
                    color: blue;
                }
            }
        }

        .profile-detailed-info {
            width: 60%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            .profile-abilities {
                margin-bottom: 10px;
                
                h1 {
                    font-size: 16px;
                    margin-bottom: 10px;
                }

                #abilities {
                    display: flex;
                    gap: 50px;
                }
            }

            .profile-stats {
                h1 {
                    font-size: 16px;
                    margin-bottom: 10px;
                }
            }

            .profile-alt-sprites {

                h1 {
                    font-size: 16px;
                }

            }
        }
    }

    @media (max-width: 450px) {
        width: 95%;
        overflow-y: auto;

        .abilities, .stats, .alt {
            font-size: 35px;
        }

        .alt {
            margin-top: 10px;
        }

        #alt-sprites {
            display: flex;
            flex-direction: column;
            align-items: center;
            

            img {
                width: 200px;
            }
        }

        .profile-header {
            h1 {
                font-size: 18px;
            }
            svg {
                font-size: 30px;
            }
        }

        .detailed-titles {
            font-size: 20px;
        }

        .profile-main {
            flex-direction: column;
            padding: 0;
            gap: 30px;

            .profile-basic-info, .profile-detailed-info {
                width: 100%;
                height: 100%;
            }

            .profile-basic-info {
                
                #name {
                    font-size: 30px;
                    margin-bottom: 10px;
                }

                p {
                    font-size: 20px;
                }

                .profile-weight-height {
                    margin: 20px 0;

                    p {
                        font-size: 12px;
                    }
                }
            }

            .profile-detailed-info {

            }
        }
    }
`;

const TypesTag = styled.p`
    font-family: 'Press Start 2P', cursive;
    color: ${props => props.theme.fontColor};
    font-size: 12px;
    background-color: ${props => {
        switch (props.type) {
            case 'normal':
                return '#a8a878';
            case 'fighting':
                return '#df1814';
            case 'flying':
                return '#a890f0';
            case 'poison':
                return '#a040a0';
            case 'ground':
                return '#e0c068';
            case 'rock':
                return '#b8a038';
            case 'bug':
                return '#a8b820';
            case 'ghost':
                return '#705898';
            case 'steel':
                return '#b8b8d0';
            case 'fire':
                return '#f08030';
            case 'water':
                return '#6890f0';
            case 'grass':
                return '#78c850';
            case 'electric':
                return '#f8d030';
            case 'psychic':
                return '#f85888';
            case 'ice':
                return '#98d8d8';
            case 'dragon':
                return '#7038f8';
            case 'dark':
                return '#705848';
            case 'fairy':
                return '#ee99ac';
        }
    }};
`;

const Profile = () => {
    const navigate = useNavigate();
    const { pokemonData } = useContext(PokemonContext);

    const {
        name,
        sprites,
        types,
        id,
        weight,
        height,
        abilities,
        stats
    } = pokemonData

    return (
        <OverlayForProfile>
            <ProfileWrapper>
                <div className="profile-header">
                    <h1>Who's That Pokémon?</h1>
                    <AiOutlineClose className='closeIcon' onClick={() => navigate(-1)} />
                </div>
                <div className="profile-main">
                    <div className="profile-basic-info">
                        <p className='poke-id'>#{id}</p>
                        <img src={sprites.front_default} alt={name} />
                        <p id='name'>{name}</p>
                        <div className='profile-info-types'>
                            {types.map(type => <TypesTag key={type.type.name} type={type.type.name}>{type.type.name}</TypesTag>)}
                        </div>
                        <div className="profile-weight-height">
                            <p>Weight: <span id='weight'>{weight}</span></p>
                            <p>Height: <span id='height'>{height}</span></p>
                        </div>
                    </div>
                    <div className="profile-detailed-info">
                        <div className="profile-abilities">
                            <h1 className='detailed-titles abilities'>Abilities:</h1>
                            <div id='abilities'>
                                {abilities.map(ability => <p>{ability.ability.name}</p>)}
                            </div>
                        </div>
                        <div className="profile-stats">
                            <h1 className='detailed-titles stats'>Stats:</h1>
                            {stats.map(stat => <p>{stat.stat.name}: <span>{stat.base_stat}</span></p>)}
                        </div>
                        <div className="profile-alt-sprites">
                            <h1 className='detailed-titles alt'>Alt version:</h1>
                            <div id="alt-sprites">
                                <img src={sprites.front_shiny} alt={name} />
                                <img src={sprites.back_default} alt={name} />
                            </div>
                        </div>
                    </div>
                </div>
            </ProfileWrapper>
        </OverlayForProfile>
    )
}

export default Profile