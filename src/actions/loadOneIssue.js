import fetch from 'isomorphic-fetch';
import tree from '../state';

export default function (url) {
  fetch(url).then(
    (response) => response.json()
  ).then(
    (currentIssue) => {tree.set('currentIssue', currentIssue);}
  );
}