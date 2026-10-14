// Варіант 19: виводимо поля табл. 2 у порядку 1, 4, 2, 3, 8
// 1 — picture, 4 — city, 2 — name, 3 — cell, 8 — phone
const API_URL = 'https://randomuser.me/api/?results=5';

const button = document.getElementById('load-btn');
const usersContainer = document.getElementById('users');
const statusText = document.getElementById('status');

function createUserCard(user) {
  const card = document.createElement('div');
  card.className = 'user-card';

  const img = document.createElement('img');
  img.src = user.picture.large;
  img.alt = `${user.name.first} ${user.name.last}`;
  card.appendChild(img);

  const fields = [
    ['City', user.location.city],
    ['Name', `${user.name.title} ${user.name.first} ${user.name.last}`],
    ['Cell', user.cell],
    ['Phone', user.phone],
  ];

  for (const [label, value] of fields) {
    const p = document.createElement('p');
    p.innerHTML = `<b>${label}:</b> `;
    p.append(value); // текст додаємо як текст, а не як HTML
    card.appendChild(p);
  }

  return card;
}

button.addEventListener('click', function () {
  statusText.textContent = 'Завантаження...';
  button.disabled = true;

  // fetch повертає Promise з об'єктом Response
  fetch(API_URL)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }
      return response.json(); // теж Promise: JSON-рядок -> JS-об'єкт
    })
    .then((data) => {
      usersContainer.innerHTML = '';
      data.results.forEach((user) => usersContainer.appendChild(createUserCard(user)));
      statusText.textContent = `Отримано користувачів: ${data.results.length}`;
    })
    .catch((error) => {
      statusText.textContent = `Помилка завантаження: ${error.message}`;
    })
    .finally(() => {
      button.disabled = false;
    });
});
