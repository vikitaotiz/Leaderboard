export default (scoresList, scoreData) => {
  if (scoreData.name.trim() && scoreData.score.trim()) {
    scoresList.push(scoreData);
    return scoresList;
  }
  return scoresList;
};
