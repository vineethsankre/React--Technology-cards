import './index.css'

const CardItem = props => {
  const {card} = props
  const {title, description, imgUrl, className} = card
  return (
    <li className={`${className} cardItem`}>
      <div>
        <h1 className="title">{title}</h1>
        <p className="description">{description}</p>
      </div>
      <img className="image" src={imgUrl} alt={title} />
    </li>
  )
}

export default CardItem
