import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import displayList from './displayList.js';
import addScore from './addScore.js';

const scoresList = document.querySelector('#scoresList');
const scoresName = document.querySelector('#name');
const scoresNumber = document.querySelector('#score');
const submitBtn = document.querySelector('#submitBtn');

const scores = [
  { name: 'Vikita', score: 30 },
  { name: 'Vikita', score: 30 },
  { name: 'Vikita', score: 30 },
  { name: 'Vikita', score: 30 },
];

displayList(scoresList, scores);

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const scoreData = {
    name: scoresName.value,
    score: scoresNumber.value,
  };

  // console.log(scoreData);
  addScore(scores, scoreData);
  scoresList.innerHTML = '';
  displayList(scoresList, scores);
  scoresName.value = '';
  scoresNumber.value = '';
});