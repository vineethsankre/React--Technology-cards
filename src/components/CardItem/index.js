import './index.css'

const CardItem = props => {
  const {card} = props
  const {title, description, imgUrl, className} = card
  return (
    <li className={`${className} cardItem`}>
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <img src={imgUrl} alt="" />
    </li>
  )
}

export default CardItem
