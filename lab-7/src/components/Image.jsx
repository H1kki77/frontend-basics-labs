// Компонент-функція: показує зображення, параметри приходять через props
function Image({ src, alt, width, link }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <img className="city-photo" src={src} alt={alt} width={width} />
    </a>
  )
}

export default Image
