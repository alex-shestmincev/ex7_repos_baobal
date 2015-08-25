import React, { Component } from 'react';
import RepositoryInput from '../components/RepositoryInput';
import ListIssues from '../components/ListIssues';
import {branch} from 'baobab-react/decorators';
import CurrentIssue from './../components/CurrentIssue';

@branch({
  cursors: {
    issues: ['issues'],
    currentIssue: ['currentIssue']
  },
})
export default class ListView extends Component {

  static propTypes = {
    issues: React.PropTypes.array,
    currentIssue: React.PropTypes.object,
  }

  render() {

    if (this.props.currentIssue){
      return (
        <div>
          <CurrentIssue />
        </div>
      );
    }else{
      return (
        <div>
          <RepositoryInput />
          <ListIssues />
        </div>
      );
    }


  }
}
