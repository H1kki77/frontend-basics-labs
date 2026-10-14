// Дані для галереї товарів. Фото 1, 2, 4, 5 — Wikimedia Commons (автор і ліцензія в полі credit),
// фото пляшки й сумки лежать у проєкті (src/assets) і підключаються через import — Vite додає їх у збірку
import bottle from './assets/bottle.png'
import bag from './assets/bag.jpg'

const WIKI = 'https://upload.wikimedia.org/wikipedia/commons/thumb'

const goods = [
  {
    id: 1,
    name: 'Гантелі',
    price: 1850,
    image: `${WIKI}/f/f1/Colorful_dumbbells_of_various_sizes.jpg/500px-Colorful_dumbbells_of_various_sizes.jpg`,
    credit: 'Ser Amantio di Nicolao, CC BY-SA 4.0',
    source: 'https://commons.wikimedia.org/wiki/File:Colorful_dumbbells_of_various_sizes.jpg',
  },
  {
    id: 2,
    name: 'Килимок для фітнесу',
    price: 690,
    image: `${WIKI}/6/6d/Yoga_mat.jpg/500px-Yoga_mat.jpg`,
    credit: 'Gausanchennai, CC BY-SA 4.0',
    source: 'https://commons.wikimedia.org/wiki/File:Yoga_mat.jpg',
  },
  {
    id: 3,
    name: 'Спортивна пляшка',
    price: 320,
    image: bottle,
  },
  {
    id: 4,
    name: 'Фітнес-браслет',
    price: 2499,
    image: `${WIKI}/5/50/Fitbit_Alta_HR_landscape.jpg/500px-Fitbit_Alta_HR_landscape.jpg`,
    credit: 'PamD, CC BY-SA 4.0',
    source: 'https://commons.wikimedia.org/wiki/File:Fitbit_Alta_HR_landscape.jpg',
  },
  {
    id: 5,
    name: 'Кросівки для бігу',
    price: 3999,
    image: `${WIKI}/b/b2/Brooks_Adrenaline_GTS_18.jpg/500px-Brooks_Adrenaline_GTS_18.jpg`,
    credit: 'JSFarman, CC BY-SA 4.0',
    source: 'https://commons.wikimedia.org/wiki/File:Brooks_Adrenaline_GTS_18.jpg',
  },
  {
    id: 6,
    name: 'Спортивна сумка',
    price: 1199,
    image: bag,
  },
]

export default goods
