export default async (scoresList) => {
  let scores = [];
  const res = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/1KSRjwxXecJqFZWRwz8v/scores/');
  const data = await res.json();
  scores = data.result;

  if (scores.length) {
    scores.forEach((val) => {
      const li = document.createElement('li');
      li.classList.add('list-group-item');

      const text = `
      <div class="d-flex justify-content-between align-items-start" id="${val.index}">
        <span class="fw-bold">
          ${val.user}
        </span>
        <span class="fw-bold">
         Score : ${val.score}
        </span>
      </div>`;

      li.innerHTML = text;
      scoresList.appendChild(li);
    });
  }
};