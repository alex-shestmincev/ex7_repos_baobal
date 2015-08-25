import React, { Component } from 'react';
import RepositoryInput from '../components/RepositoryInput';
import ListIssues from '../components/ListIssues';

export default class ListView extends Component {

  render() {
    return (
      <div>
        <RepositoryInput />
        <ListIssues />
      </div>
    );
  }
}
