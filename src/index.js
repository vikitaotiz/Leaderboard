import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import displayList from './displayList.js';
import addScore from './addScore.js';

const scoresList = document.querySelector('#scoresList');
const scoresUser = document.querySelector('#user');
const scoresNumber = document.querySelector('#score');
const submitBtn = document.querySelector('#submitBtn');
const refreshData = document.querySelector('#refreshData');

refreshData.addEventListener('click', () => {
  scoresList.innerHTML = '';
  displayList(scoresList);
});

submitBtn.addEventListener('click', async (e) => {
  e.preventDefault();
  const scoreData = {
    user: scoresUser.value,
    score: scoresNumber.value,
  };

  const scoreAdded = await addScore(scoreData);
  if (scoreAdded) {
    scoresList.innerHTML = '';

  await displayList(scoresList);

  scoresUser.value = '';
  scoresNumber.value = ''; 
  }
});

displayList(scoresList);
