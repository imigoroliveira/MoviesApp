import React from 'react';

import { Route } from 'react-router-dom';
import App from './components/App';
import Movies from '../src/components/movies'

const routes = (
  <Route exact path="/" component={App}>
    <Route exact path="/about" component={Movies} />
    <Route exact path="/movie" component={Movies} />
    <Route exact path="/teste" component={Movies} />
  </Route>
)

export default routes