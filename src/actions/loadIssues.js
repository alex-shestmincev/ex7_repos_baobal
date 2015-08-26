import fetch from 'isomorphic-fetch';
import tree from '../state';

export default function (user,branch) {
  fetch('https://api.github.com/repos/' + user + '/' + branch + '/issues').then(
    (response) => response.json()
  ).then(
    (issues) => {
      tree.set('issues', issues);
      tree.set('url', '/list/' + user + '/' + branch);
      tree.set('currentPage', 'list');
    }
  );
}
