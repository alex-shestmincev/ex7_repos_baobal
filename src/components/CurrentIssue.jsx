import React, { Component } from 'react';
import {branch} from 'baobab-react/decorators';
import backToList from '../actions/backToList';


@branch({
  cursors: {
    currentIssue: ['currentIssue'],
  },
})
export default class CurrentIssue extends Component {
  static propTypes = {
    currentIssue: React.PropTypes.object,
  }

  backToList(){
    backToList();
  }

  render() { console.log(this.props.currentIssue)

    return (
      <div>
        <button type="button" onClick={::this.backToList}> Back </button>
        <h1>
          {this.props.currentIssue.title}
        </h1>
        <p>
          {this.props.currentIssue.body}
        </p>
      </div>
    );
  }
}
