import './FooterStyle.css'
import {AiFillFacebook} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {AiFillBehanceSquare} from 'react-icons/ai'
import {AiFillTwitterSquare} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
        <div className="top">
            <div className="info">
                <h1>Trippy</h1>
                <p>Choose your favourite destination.</p>
            </div>
            <div className="social">
                <AiFillFacebook className='icon'/>
                <AiFillInstagram className='icon'/>
                <AiFillBehanceSquare className='icon'/>
                <AiFillTwitterSquare className='icon'/>
            </div>
        </div>
        <div className="bottom">
          <div>
            <h4>Project</h4>
            <a href="/">Changelog</a>
            <a href="/">Status</a>
            <a href="/">License</a>
            <a href="/">All Versions</a>
          </div>
          <div>
            <h4>Community</h4>
            <a href="/">GitHub</a>
            <a href="/">Issues</a>
            <a href="/">Project</a>
            <a href="/">Twitter</a>
          </div>
          <div>
            <h4>Help</h4>
            <a href="/">Support</a>
            <a href="/">Troubleshooting</a>
            <a href="/">Contact us</a>
          </div>
          <div>
            <h4>Others</h4>
            <a href="/">Terms of Service</a>
            <a href="/">Privacy Policy</a>
            <a href="/">License</a>
          </div>
        </div>

    </footer>
  )
}

export default Footer