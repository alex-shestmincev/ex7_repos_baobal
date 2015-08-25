import React, { Component } from 'react';
import {root} from 'baobab-react/decorators';

import tree from './state';
import ListView from './views/ListView';


@root(tree)
export default class App extends Component {
  render() {
    return (
      <ListView />
    );
  }
}
