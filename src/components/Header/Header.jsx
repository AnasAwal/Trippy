import Hero from '../Hero/Hero'
import NavBar from '../NavBar/NavBar'
import './HeaderStyle.css'
import pic from './../../assets/images/12.jpg'

const Header = () => {
  return (
    <header>
      <NavBar logo = "Trippy"
          list={[
                {name :'Home', icon: "fa-solid fa-house-chimney-user"},
                {name : 'About', icon: "fa-solid fa-circle-info"},
                {name : 'Service', icon: "fa-solid fa-briefcase"},
                {name : 'Contact', icon : "fa-solid fa-address-book"}
              ]}
          button= "Sign up"/>

      <Hero heroPic= {pic} title="Your Journey Your Story" secTilte="Choose Your Favourite Destination" button="Travel Now"/>
    </header>
  )
}

export default Header