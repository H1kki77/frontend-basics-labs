import Header from './components/Header.jsx'
import Content from './components/Content.jsx'
import GoodsCard from './components/GoodsCard.jsx'
import goods from './goods.js'

function App() {
  return (
    <div className="app">
      <Header title="Коробай Владислав Максимович" subtitle="ІП-44 · Лабораторна робота №7" />

      <h2 className="section-title">Завдання 1. Лаб. роб. №4 на React</h2>
      <Content />

      <h2 className="section-title">Завдання 2. Галерея товарів</h2>
      <div className="gallery">
        {goods.map((item) => (
          <GoodsCard key={item.id} image={item.image} name={item.name} price={item.price} />
        ))}
      </div>
      <p className="credits">
        Фото з Wikimedia Commons:{' '}
        {goods.filter((item) => item.credit).map((item, i) => (
          <span key={item.id}>
            {i > 0 && '; '}
            <a href={item.source} target="_blank" rel="noopener noreferrer">{item.credit}</a>
          </span>
        ))}
      </p>
    </div>
  )
}

export default App
