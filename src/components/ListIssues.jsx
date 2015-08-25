import React, { Component } from 'react';
import {branch} from 'baobab-react/decorators';
import loadOneIssue from '../actions/loadOneIssue';
import ListIssuesItem from './ListIssuesItem';

@branch({
  cursors: {
    issues: ['issues'],
  },
})
export default class ListIssues extends Component {
  static propTypes = {
    issues: React.PropTypes.array,
  }

  render() {
    return (
      <ul>
        {
            this.props.issues.map((issue) => <ListIssuesItem key={issue.id} issue={issue} />)
        }
      </ul>
    );
  }
}
