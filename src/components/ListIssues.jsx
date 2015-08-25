import React, { Component } from 'react';
import {branch} from 'baobab-react/decorators';

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
            this.props.issues.map((issue) => <li key={issue.id}>{issue.title}</li>)
        }
      </ul>
    );
  }
}
