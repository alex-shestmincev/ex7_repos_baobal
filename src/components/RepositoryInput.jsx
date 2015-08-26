import React, { Component } from 'react';
import {branch} from 'baobab-react/decorators';
import PropTypes from 'baobab-react/prop-types';
import loadIssues from '../actions/loadIssues';


@branch({
  cursors: {
    githubUser: ['githubUser'],
    githubBranch: ['githubBranch'],
  },
})
export default class RepositoryInput extends Component {
  static contextTypes = {
    cursors: PropTypes.cursors,
  }

  handleInput(e) {
    var value = e.target.value.split("/");
    if (value.length === 2){
      this.context.cursors.githubUser.set(value[0]);
      this.context.cursors.githubBranch.set(value[1]);
    }
  }

  handleSubmit(e) {
    loadIssues(this.props.githubUser, this.props.githubBranch);

    e.preventDefault();
  }

  render() {
    return (
      <form onSubmit={::this.handleSubmit}>
        <input type="text" value={this.props.githubUser + '/' + this.props.githubBranch} onChange={::this.handleInput}/>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
