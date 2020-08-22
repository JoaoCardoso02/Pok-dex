import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import List from './pages/List/index.jsx';
import PokemonSelected from './pages/PokemonSelected/index.jsx';

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={List} />
            <Route path="/pokemon" exact component={PokemonSelected} />
        </BrowserRouter>
    )
}

export default Routes;