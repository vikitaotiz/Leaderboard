import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import displayList from './displayList.js';

const scoresList = document.querySelector('#scoresList');

const scores = [
  { name: 'Vikita', score: 30 },
  { name: 'Vikita', score: 30 },
  { name: 'Vikita', score: 30 },
  { name: 'Vikita', score: 30 },
];

displayList(scoresList, scores);