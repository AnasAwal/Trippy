import './HeroStyle.css'

const Hero = ({heroPic, title, secTilte, button}) => {
  return (
    <div className='hero'>
      <img src={heroPic} alt="" />
      <div className="info">
        <h1>{title}</h1>
        <p>{secTilte}</p>
        <button>{button}</button>
      </div>

    </div>
  )
}

export default Hero