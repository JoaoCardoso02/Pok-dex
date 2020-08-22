
import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Container, Content, Title, ListPokemons } from './styles';

import pokeapi from '../../services/api';
import Axios from 'axios';

import CardPokemon from '../../components/CardPokemon/index.jsx';



function List() {
  const dispatch = useDispatch();
  const endPage = useRef('end');
  const pokemons = useSelector(state => state.pokemons);
  const [nextCallAPI, setNextCallAPI] = useState('');


  const getPokemons = async () => {
    
    const { data: resultPokemon } = await pokeapi.get(nextCallAPI ? nextCallAPI : '/pokemon');
    setNextCallAPI(resultPokemon.next);

    const pokemonsPromisse = resultPokemon.results.map(async (pokemon) => {
      
      const { data } = await pokeapi.get(`pokemon/${pokemon.name}`);
      const stats = data.stats.map((stats, index) => {
        return {
          'name': stats.stat.name,
          'value': stats.base_stat
        }
      });

      data.stats = stats;
      return data;

    })
    const pokemonsList = await Promise.all(pokemonsPromisse)
    dispatch({ type: 'ADD_POKEMON_LIST', payload: pokemonsList})
  }

  useEffect(() => {
    getPokemons();
  }, [])
  const teste = () => {
    // Height page + number pixels that the document has been scrolled vertically
    // >= height page total
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      getPokemons();
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", teste)

    return () => {
      window.removeEventListener("scroll", teste)
    }
  }, [endPage.current])

  return (
    <Container onClick={() => console.log(nextCallAPI)} className="container">
      <Title onClick={getPokemons}>Pokédex</Title>
      <Content>
        <ListPokemons>
          {pokemons.map((pokemon) => (
            <CardPokemon key={pokemon.id} pokemon={pokemon} />
          ))}
        </ListPokemons>
        <h1 ref={endPage} >fim</h1>
      </Content>
    </Container>
  );
}

export default List;