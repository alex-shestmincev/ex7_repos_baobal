import fetch from 'isomorphic-fetch';
import tree from '../state';

export default function (url) {
  fetch('https://api.github.com/repos/' + url + '/issues').then(
    (response) => response.json()
  ).then(
    (issues) => tree.set('issues', issues)
  );
}
