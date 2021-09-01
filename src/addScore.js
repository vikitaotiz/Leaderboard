export default async (scoreData) => {
  if (scoreData.user.trim() && scoreData.score.trim()) {
    await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/1KSRjwxXecJqFZWRwz8v/scores/', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(scoreData),
    });
  }
};
