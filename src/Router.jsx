import React, { Component } from 'react';
import ReactiveRouter from 'reactive-router';
import {branch} from 'baobab-react/decorators';
import state from './state.js';

import IndexView from './views/IndexView/IndexView';
import ListView from './views/ListView/ListView';
import IssueView from './views/IssueView/IssueView';

@branch({
  cursors: {
    currentPage: ['currentPage'],
  },
})
export default class Router extends Component {
  static propTypes = {
    currentPage: React.PropTypes.string,
  }

  render() {
    switch (this.props.currentPage) {
      case 'index':
        return <IndexView/>;
      case 'list':
        return <ListView/>;
      case 'issue':
        return <IssueView/>;
      break;
    };
  }
}

const indexRouted = function (context) {
  state.set('url', context.path);
  state.set('currentPage', 'index');
};

const listRouted = function (context) {
  state.set('url', context.path);
  state.set('currentPage', 'list');
  state.set('githubUser', context.params.user);
  state.set('githubBranch', context.params.branch);
};

const issueRouted = function (context) {
  state.set('url', context.path);
  state.set('currentPage', 'issue');
  state.set('githubUser', context.params.user);
  state.set('githubBranch', context.params.branch);
  state.set('currentIssue', context.params.id);
};

const router = ReactiveRouter({
  '/' : indexRouted,
  '/list/:user/:branch': listRouted,
  '/issue/:user/:branch/:id': issueRouted
}, {
  hashbang: true
});

state.on('change', function (state) {
  router.set(state.url);
  // or silently set, will not trigger the callback
  router.setSilent(state.url);
});