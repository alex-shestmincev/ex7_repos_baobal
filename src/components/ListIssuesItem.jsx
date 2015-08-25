import React, { Component } from 'react';
import {branch} from 'baobab-react/decorators';
import loadOneIssue from '../actions/loadOneIssue';

export default class ListIssuesItem extends Component {
  static propTypes = {
    issue: React.PropTypes.object,
  }

  showIssue(e){
    e.preventDefault();
    loadOneIssue(this.props.issue.url);
  }

  render() {
    let {issue} = this.props;
    return (
       <li key={issue.id} >
         <a href="#" onClick={::this.showIssue}>
           {issue.title}
         </a>
       </li>
    );
  }
}
