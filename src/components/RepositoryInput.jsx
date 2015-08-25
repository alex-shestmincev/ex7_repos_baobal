import React, { Component } from 'react';
import {branch} from 'baobab-react/decorators';
import PropTypes from 'baobab-react/prop-types';
import loadIssues from '../actions/loadIssues';


@branch({
  cursors: {
    repository: ['repository'],
  },
})
export default class RepositoryInput extends Component {
  static contextTypes = {
    cursors: PropTypes.cursors,
  }

  handleInput(e) {
    this.context.cursors.repository.set(e.target.value);
  }

  handleSubmit(e) {
    loadIssues(this.props.repository);

    e.preventDefault();
  }

  render() {
    console.log(this.context);
    return (
      <form onSubmit={::this.handleSubmit}>
        <input type="text" value={this.props.repository} onChange={::this.handleInput}/>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
