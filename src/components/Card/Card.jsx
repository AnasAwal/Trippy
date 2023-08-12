import './CardStyle.css'

const Card = ({img, title, decs}) => {
  return (
    <div className='card'>
      <div className='image'>
        <img src={img} alt="" />
      </div>  
      <h2>{title}</h2>
      <p>{decs}</p>

    </div>
  )
}

export default Card