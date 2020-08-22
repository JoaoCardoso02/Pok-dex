import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { GlobalStyle, Container, DataPokemon, Content, DivImg, DivCharacteristics, StatsCharacteristics, ButtonBack } from './styles';
import { useSelector } from 'react-redux';

function PokemonSelected() {
  const pokemon = useSelector(state => state.pokemonSelected);
  const history = useHistory();

  const convertToKg = (value) => parseFloat((value * 0.1).toFixed(2));
  useEffect(() => {
    if (!pokemon) {
      history.goBack();
    }
    console.log(pokemon)
  }, [pokemon])
  return (
    <Container className="container">
      <GlobalStyle />
      <DataPokemon>
        {pokemon ? 
          <Content>
            <DivImg>
              <img src={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`} alt=""/>
            </DivImg>
            <DivCharacteristics>
              <h2 className="name">{pokemon.name}</h2>
              <div className="divCharacteristicsIntern">
                  <h4 className="titleCharacteristics">Stats and Characteristics</h4>
                  <StatsCharacteristics>
                    <ul>
                      {pokemon.stats.map((stat) => <li>{stat.name}: {stat.value}</li>)}
                    </ul>
                    <ul>
                      <li>{`Weight: ${convertToKg(pokemon.weight)}`}</li>
                      <li>{`Height: ${convertToKg(pokemon.height)}`}</li>
                    </ul>
                  </StatsCharacteristics>
              </div>
              <div className="divCharacteristicsIntern typesAbilities">

                <div>
                  <h4 className="titleCharacteristics">Types</h4>
                  <ul>
                    {pokemon.types.map(element => <li>{element.type.name}</li>)}
                  </ul>
                </div>
                <div>
                  <h4 className="titleCharacteristics">Abilities</h4>
                  <ul>
                    {pokemon.abilities.map(element => <li>{element.ability.name}</li>)}
                  </ul>
                </div>
              </div>
              <ButtonBack onClick={() => history.goBack()}>Go back</ButtonBack>
            </DivCharacteristics>
          </Content>
        : null }
      </DataPokemon>
    </Container>
  );
}

export default PokemonSelected;