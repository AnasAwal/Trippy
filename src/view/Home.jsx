import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Popular from '../components/Popular/Popular'
import Recent from '../components/Recent/Recent'
import './HomeStyle.css'

const Home = () => {
  return (
    <div>
         <Header />
         <Popular />
         <Recent />
         <Footer />

        
    </div>
  )
}

export default Home