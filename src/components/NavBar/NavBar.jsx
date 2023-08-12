import './NavBarStyle.css'

const NavBar = ({logo, list, button }) => {
  return (
    <nav>
      <h1>{logo}</h1>
      <div className='containt'>
        <ul className='nav-items'>
          <li> <a href="#">{list[0].name} <i className={list[0].icon}></i></a></li>
          <li> <a href="#">{list[1].name} <i className={list[1].icon}></i></a></li>
          <li> <a href="#">{list[2].name} <i className={list[2].icon}></i></a></li>
          <li> <a href="#">{list[3].name} <i className={list[3].icon}></i></a></li>
        </ul>
        <button>{button}</button>

      </div>
    </nav>
  )
}

export default NavBar