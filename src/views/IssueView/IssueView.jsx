import React, { Component } from 'react';
import RepositoryInput from '../../components/RepositoryInput';
import ListIssues from '../../components/ListIssues';
import {branch} from '../../../node_modules/baobab-react/decorators';
import CurrentIssue from './../../components/CurrentIssue';

export default class IssueView extends Component {
  render() {
    return (
      <div>
        <CurrentIssue />
      </div>
    );
  }
}
