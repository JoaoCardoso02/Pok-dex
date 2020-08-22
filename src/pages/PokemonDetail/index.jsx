import React from 'react';

import { Container, Detail } from './styles';

function PokemonDetail() {
  return (
    <Container className="container">
      <Detail>
        <div className="divImg">
          <img src="https://pokeres.bastionbot.org/images/pokemon/1.png" alt=""/>
        </div>
        <div className="characteristics">
          <h1>Characteristics</h1>
          <ul>
            <li>a</li>
            <li>b</li>
            <li>c</li>
          </ul>
        </div>
        <div className="title">
          <h1>Bulbasaur</h1>
        </div>
        
      </Detail>

    </Container>
  );
}

export default PokemonDetail;