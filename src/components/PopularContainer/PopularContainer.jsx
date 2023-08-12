import './PopularContainerStyle.css'

const PopularContainer = ({firstPic, secPic, title, desc, reverse}) => {
  return (
    <div className= {(reverse) ? 'container reverse' : 'container' }>
        <div className="images">
            <img src={firstPic} alt="" />
            <img src={secPic} alt="" />
        </div>
        <div className="info">
            <h2>{title}</h2>
            <p>{desc}</p>
        </div>

    </div>
  )
}

export default PopularContainer