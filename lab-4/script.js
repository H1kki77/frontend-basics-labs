// Варіант 119: номер елемента = (119 mod 10) + 1 = 10.
// 10-й елемент сторінки — абзац про місто (#city-text), 11-й — підпис до фото (.photo-caption).

// Завдання 1
// Набори кольорів, які чергуються при кожному кліку: [фон, текст]
const colorsById = [
  ['#2c3e50', '#f1c40f'],
  ['#f1c40f', '#2c3e50'],
];
const colorsByQuery = [
  ['#8e44ad', '#ffffff'],
  ['#ffffff', '#8e44ad'],
];

let clicksById = 0;
let clicksByQuery = 0;

// 10-й елемент — через getElementById()
const tenthElement = document.getElementById('city-text');
tenthElement.addEventListener('click', function () {
  const [bg, text] = colorsById[clicksById % colorsById.length];
  tenthElement.style.backgroundColor = bg;
  tenthElement.style.color = text;
  clicksById++;
});

// Наступний (11-й) елемент — через querySelector()
const nextElement = document.querySelector('.photo-caption');
nextElement.addEventListener('click', function () {
  const [bg, text] = colorsByQuery[clicksByQuery % colorsByQuery.length];
  nextElement.style.backgroundColor = bg;
  nextElement.style.color = text;
  clicksByQuery++;
});

// Завдання 2: кнопки для роботи із зображенням
const IMAGE_SRC = 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/2018_-_%D0%9A%D0%BE%D0%BC%D0%BF%D0%BB%D0%B5%D0%BA%D1%81_%D0%9A%D0%B8%D1%94%D0%B2%D0%BE-%D0%9F%D0%B5%D1%87%D0%B5%D1%80%D1%81%D1%8C%D0%BA%D0%BE%D1%97_%D0%BB%D0%B0%D0%B2%D1%80%D0%B8.jpg/1280px-2018_-_%D0%9A%D0%BE%D0%BC%D0%BF%D0%BB%D0%B5%D0%BA%D1%81_%D0%9A%D0%B8%D1%94%D0%B2%D0%BE-%D0%9F%D0%B5%D1%87%D0%B5%D1%80%D1%81%D1%8C%D0%BA%D0%BE%D1%97_%D0%BB%D0%B0%D0%B2%D1%80%D0%B8.jpg';
const STEP = 50;
const MIN_WIDTH = 100;

const imageLink = document.querySelector('a[href="https://kyivcity.gov.ua/"]');

function getImage() {
  return document.getElementById('city-photo');
}

// ширину беремо з атрибута width, а не з поточного відображення
function getWidth(img) {
  return parseInt(img.getAttribute('width'), 10);
}

document.getElementById('btn-add').addEventListener('click', function () {
  if (getImage()) {
    alert('Зображення вже є на сторінці');
    return;
  }
  const img = document.createElement('img');
  img.id = 'city-photo';
  img.src = IMAGE_SRC;
  img.alt = 'Києво-Печерська лавра, Київ';
  img.width = 640;
  imageLink.appendChild(img);
});

document.getElementById('btn-zoom-in').addEventListener('click', function () {
  const img = getImage();
  if (img) img.width = getWidth(img) + STEP;
});

document.getElementById('btn-zoom-out').addEventListener('click', function () {
  const img = getImage();
  if (img) img.width = Math.max(MIN_WIDTH, getWidth(img) - STEP);
});

document.getElementById('btn-remove').addEventListener('click', function () {
  const img = getImage();
  if (img) img.remove();
});
