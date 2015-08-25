import React, { Component } from 'react';
import {root} from 'baobab-react/decorators';

import tree from './state';
import ListView from './views/ListView';

import ReactiveRouter from 'reactive-router';
import state from './state.js';


@root(tree)
export default class App extends Component {
  render() {
    return (
      <ListView />
    );
  }
}
