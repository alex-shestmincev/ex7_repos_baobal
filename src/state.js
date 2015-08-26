import Baobab from 'baobab';

export default new Baobab({
  issues: [],
  currentIssue: null,

  url: '/',

  // for router
  currentPage: 'list',

  githubUser: 'test',
  githubBranch: 'test',
});
