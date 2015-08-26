import React, { Component } from 'react';
import {root} from 'baobab-react/decorators';

import tree from './state';
import Router from './Router';

@root(tree)
export default class App extends Component {
  render() {
    return (
      <Router />
    );
  }
}
