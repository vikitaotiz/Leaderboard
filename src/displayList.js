export default (scoresList, data) => {
  if (data.length) {
    data.forEach((val) => {
      const li = document.createElement('li');
      li.classList.add('list-group-item');

      const text = `
      <div class="d-flex" id="${val.index}">
        <div class="fw-bold flex-grow-1">
          ${val.name} : ${val.score}
        </div>
      </div>`;

      li.innerHTML = text;
      scoresList.appendChild(li);
    });
  }
};