import React, { useEffect, useState } from 'react';

import { Container, Name } from './styles';

import Button from '../Button/index.jsx';

import pokeapi from '../../services/api';
function CardPokemon({ pokemon, clickEvent }) {
    const typesPokemons = [
        {
            name:"normal",
            color:'#f2f2f2' 
        },
        {
            name:"fighting",
            color:'#34495E' 
        },
        {
            name:"flying",
            color:'#AEB6BF' 
        },
        {
            name:"poison",
            color:'#884EA0' 
        },
        {
            name:"ground",
            color:'#895C15' 
        },
        {
            name:"rock",
            color:'#895C15' 
        },
        {
            name:"bug",
            color:'#661d77' 
        },
        {
            name:"ghost",
            color:'#4D3B52' 
        },
        {
            name:"steel",
            color:'#BABABA' 
        },
        {
            name:"fire",
            color:'#881a1a' 
        },
        {
            name:"water",
            color:'#18286f' 
        },
        {
            name:"grass",
            color:'#21734e' 
        },
        {
            name:"electric",
            color:'#CDCD08' 
        },
        {
            name:"psychic",
            color:'#9E9E13' 
        },
        {
            name:"ice",
            color:'#10A0C0' 
        },
        {
            name:"dragon",
            color:'#881a1a' 
        },
        {
            name:"dark",
            color:'#3A3A3A' 
        },
        {
            name:"fairy",
            color:'#CD237B' 
        },
        {
            name:"unknown",
            color:'#6A6A6A' 
        },
        {
            name:"shadow",
            color:'#A7A7A7' 
        },
    ]

    const [color, setColor] = useState(null);
    
    useEffect(() => {
        (async function() {
            const type = pokemon.types[0].type.name;
            const { color: hexColor } = (typesPokemons.find(typePokemon => typePokemon.name === type))
            setColor(hexColor)
            
        })()
    }, [])

    return (
        <Container color={color}>
            <div className="divImg">
                <img src={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`} alt=""/>
            </div>
            <div className="body">
                <Name>{pokemon.name}</Name>
                <ul>
                    {pokemon.types.map(element => <li key={element.type.name}>{element.type.name}</li>)}
                </ul>
                <Button dataPokemon={pokemon} id="button">See more</Button>
            </div>
            
        </Container>
    );
}

export default CardPokemon;


    