import React, { Component } from 'react';
import {branch} from 'baobab-react/decorators';


@branch({
  cursors: {
    currentIssue: ['currentIssue'],
  },
})
export default class CurrentIssue extends Component {
  static propTypes = {
    currentIssue: React.PropTypes.object,
  }

  render() {

    return (
      <p>
        {this.props.currentIssue.body}
      </p>
    );
  }
}
