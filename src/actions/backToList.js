import fetch from 'isomorphic-fetch';
import tree from '../state';

export default function () {
  tree.set('currentIssue', null)
}