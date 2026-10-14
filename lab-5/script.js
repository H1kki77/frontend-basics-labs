// ---------- Завдання 1: перевірка форми регулярними виразами ----------
const UA_UPPER = 'А-ЯІЇЄҐA-Z';
const UA_LOWER = "а-яіїєґa-z'’";

const rules = {
  // ТТТТТТ Т.Т.  — прізвище та ініціали
  fio: new RegExp(`^[${UA_UPPER}][${UA_LOWER}]+(-[${UA_UPPER}][${UA_LOWER}]+)? [${UA_UPPER}]\\.[${UA_UPPER}]\\.$`),
  // (ЧЧЧ)-ЧЧЧ-ЧЧ-ЧЧ
  phone: /^\(\d{3}\)-\d{3}-\d{2}-\d{2}$/,
  // ТТ №ЧЧЧЧЧЧ
  idcard: new RegExp(`^[${UA_UPPER}]{2} №\\d{6}$`),
  // ЧЧ.ЧЧ.ЧЧЧЧ (день 01-31, місяць 01-12)
  birth: /^(0[1-9]|[12]\d|3[01])\.(0[1-9]|1[0-2])\.\d{4}$/,
  // тттттт@ттттт.com
  email: /^[a-z0-9._-]+@[a-z0-9-]+\.com$/i,
};

const labels = {
  fio: 'ПІБ',
  phone: 'Телефон',
  idcard: 'ID-card',
  birth: 'Дата народж.',
  email: 'e-mail',
};

const form = document.getElementById('info-form');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const data = {};
  let hasErrors = false;

  for (const field in rules) {
    const row = form.querySelector(`[data-field="${field}"]`);
    const value = document.getElementById(field).value.trim();
    const valid = rules[field].test(value);

    row.classList.toggle('error', !valid);
    if (!valid) hasErrors = true;
    data[field] = value;
  }

  if (!hasErrors) showInNewWindow(data);
});

// Прибираємо підсвітку помилки, коли користувач редагує поле
form.addEventListener('input', function (event) {
  event.target.closest('.form-row').classList.remove('error');
});

function escapeHtml(text) {
  return text.replace(/[&<>"]/g, (ch) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[ch]));
}

function showInNewWindow(data) {
  const win = window.open('', '_blank', 'width=420,height=360');
  if (!win) {
    alert('Браузер заблокував нове вікно. Дозвольте спливаючі вікна для цієї сторінки.');
    return;
  }
  const rows = Object.keys(data)
    .map((key) => `<tr><th>${labels[key]}</th><td>${escapeHtml(data[key])}</td></tr>`)
    .join('');

  win.document.write(`<!DOCTYPE html>
<html lang="uk"><head><meta charset="UTF-8"><title>Введені дані</title>
<style>body{font-family:Arial,sans-serif;padding:16px}th{text-align:left;padding-right:16px}td,th{padding:4px}</style>
</head><body><h2>Введені дані</h2><table>${rows}</table></body></html>`);
  win.document.close();
}

// ---------- Завдання 2: таблиця 6x6 ----------
const VARIANT_CELL = 9;
const SIZE = 6;
const grid = document.getElementById('grid');
const palette = document.getElementById('palette');

for (let r = 0; r < SIZE; r++) {
  const tr = document.createElement('tr');
  for (let c = 0; c < SIZE; c++) {
    const td = document.createElement('td');
    td.textContent = r * SIZE + c + 1;
    tr.appendChild(td);
  }
  grid.appendChild(tr);
}

const target = grid.querySelectorAll('td')[VARIANT_CELL - 1];
target.classList.add('target');

function randomColor() {
  return '#' + Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, '0');
}

// mouseover — випадковий колір
target.addEventListener('mouseover', function () {
  target.style.backgroundColor = randomColor();
});

// click — колір з палітри
target.addEventListener('click', function () {
  target.style.backgroundColor = palette.value;
});

// dblclick (варіант 9) — клітинки обраного стовпця, починаючи з обраної, через одну
target.addEventListener('dblclick', function () {
  const colIndex = target.cellIndex;
  const startRow = target.parentElement.rowIndex;
  const color = palette.value;

  for (let r = startRow; r < SIZE; r += 2) {
    grid.rows[r].cells[colIndex].style.backgroundColor = color;
  }
});
