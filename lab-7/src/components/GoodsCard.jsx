// Картка товару: фото, назва, ціна передаються через props
function GoodsCard({ image, name, price }) {
  return (
    <div className="goods-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p className="price">{price.toLocaleString('uk-UA')} ₴</p>
    </div>
  )
}

export default GoodsCard
