import { Component } from 'react'
import Image from './Image.jsx'

const CITY_PHOTO =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/2018_-_%D0%9A%D0%BE%D0%BC%D0%BF%D0%BB%D0%B5%D0%BA%D1%81_%D0%9A%D0%B8%D1%94%D0%B2%D0%BE-%D0%9F%D0%B5%D1%87%D0%B5%D1%80%D1%81%D1%8C%D0%BA%D0%BE%D1%97_%D0%BB%D0%B0%D0%B2%D1%80%D0%B8.jpg/1280px-2018_-_%D0%9A%D0%BE%D0%BC%D0%BF%D0%BB%D0%B5%D0%BA%D1%81_%D0%9A%D0%B8%D1%94%D0%B2%D0%BE-%D0%9F%D0%B5%D1%87%D0%B5%D1%80%D1%81%D1%8C%D0%BA%D0%BE%D1%97_%D0%BB%D0%B0%D0%B2%D1%80%D0%B8.jpg'

// Кольори [фон, текст], що чергуються при кліках (як у лаб. роб. №4)
const FIRST_COLORS = [
  { backgroundColor: '#2c3e50', color: '#f1c40f' },
  { backgroundColor: '#f1c40f', color: '#2c3e50' },
]
const SECOND_COLORS = [
  { backgroundColor: '#8e44ad', color: '#ffffff' },
  { backgroundColor: '#ffffff', color: '#8e44ad' },
]

const STEP = 50
const MIN_WIDTH = 100

// Компонент-клас
class Content extends Component {
  state = {
    firstClicks: 0, // 10-й елемент: (119 mod 10) + 1
    secondClicks: 0, // наступний, 11-й елемент
    imageVisible: true,
    imageWidth: 640,
  }

  handleFirstClick = () => {
    this.setState((s) => ({ firstClicks: s.firstClicks + 1 }))
  }

  handleSecondClick = () => {
    this.setState((s) => ({ secondClicks: s.secondClicks + 1 }))
  }

  addImage = () => this.setState({ imageVisible: true })

  zoomIn = () => this.setState((s) => ({ imageWidth: s.imageWidth + STEP }))

  zoomOut = () => this.setState((s) => ({ imageWidth: Math.max(MIN_WIDTH, s.imageWidth - STEP) }))

  removeImage = () => this.setState({ imageVisible: false })

  render() {
    const { firstClicks, secondClicks, imageVisible, imageWidth } = this.state
    const firstStyle = firstClicks > 0 ? FIRST_COLORS[(firstClicks - 1) % 2] : undefined
    const secondStyle = secondClicks > 0 ? SECOND_COLORS[(secondClicks - 1) % 2] : undefined

    return (
      <main className="content">
        <h1>Про автора сторінки</h1>
        <h2>Коробай Владислав Максимович</h2>
        <p>Народився 24 грудня 2006 року в місті Хмельницький.</p>
        <p>
          Навчався у Хмельницькому ліцеї №16. Зараз студент групи ІП-44 факультету інформатики та
          обчислювальної техніки КПІ ім. Ігоря Сікорського.
        </p>

        <h3>Моє хобі</h3>
        <ul>
          <li>Силові тренування у спортзалі</li>
          <li>Складання програм тренувань</li>
          <li>Відстеження прогресу та правильне харчування</li>
        </ul>

        <h3>Улюблені фільми</h3>
        <ol>
          <li>Інтерстеллар (2014)</li>
          <li>F1 (2025)</li>
          <li>Легенда (2015)</li>
        </ol>

        <h3>Улюблене місто</h3>
        <p className="clickable" style={firstStyle} onClick={this.handleFirstClick}>
          Київ — столиця України і моє улюблене місто. Тут поєднуються історія та сучасність:
          Києво-Печерська лавра, Софійський собор, Андріївський узвіз, широкий Дніпро з мостами та
          зелені схили.
        </p>
        <p className="clickable" style={secondStyle} onClick={this.handleSecondClick}>
          Фото Києво-Печерської лаври (клікніть на фото, щоб перейти на сайт міста):
        </p>

        {imageVisible && (
          <Image src={CITY_PHOTO} alt="Києво-Печерська лавра, Київ" width={imageWidth} link="https://kyivcity.gov.ua/" />
        )}

        <div className="buttons">
          <button onClick={this.addImage}>Додати</button>
          <button onClick={this.zoomIn}>Збільшити</button>
          <button onClick={this.zoomOut}>Зменшити</button>
          <button onClick={this.removeImage}>Видалити</button>
        </div>
      </main>
    )
  }
}

export default Content
