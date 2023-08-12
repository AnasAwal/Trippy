import Card from '../Card/Card'
import './RecentStyle.css'
import firstPic from './../../assets/images/5.jpg'
import secPic from './../../assets/images/8.jpg'
import thirdPic from './../../assets/images/6.jpg'
import { useState } from 'react'

const Recent = () => {
  const [info] = useState([
    {
      img : firstPic,
      title : "Trip in Indonesia",
      decs : "Indonesia, officially the Republic of Indonesia, is a country in Southeast Asia and Oceania between the Indian and Pacific oceans. It consists of over 17,000 islands, including Sumatra, Java, Sulawesi, and parts of Borneo and New Guinea"

    },
    {
      img : secPic,
      title : "Trip in Malaysia",
      decs : "Malaysia, is a country in Southeast Asia. The federal constitutional monarchy consists of thirteen states and three federal territories, separated by the South China Sea into two regions, Peninsular Malaysia and Borneo's East Malaysia"
    },
    {
      img : thirdPic,
      title: "Trip in France",
      decs : "France, officially the French Republic is a transcontinental country predominantly located in Western Europe and spanning overseas regions and territories in the Americas and the Atlantic, Pacific and Indian Oceans."
    }
  ]);
  return (
    <div className='recent'>
        <h1 className='title'>Recent Trips</h1>
        <p className='secTitle'>You can discover unique destination using Google Maps.</p>
        <div className="container">
            {/* <Card
              img={firstPic}
              title={"Trip in Indonesia"}
              decs={"Indonesia, officially the Republic of Indonesia, is a country in Southeast Asia and Oceania between the Indian and Pacific oceans. It consists of over 17,000 islands, including Sumatra, Java, Sulawesi, and parts of Borneo and New Guinea"}/>
            <Card
              img={secPic}
              title={"Trip in Malaysia"}
              decs={"Malaysia, is a country in Southeast Asia. The federal constitutional monarchy consists of thirteen states and three federal territories, separated by the South China Sea into two regions, Peninsular Malaysia and Borneo's East Malaysia"}/>
            <Card
              img={thirdPic}
              title={"Trip in France"}
              decs={"France, officially the French Republic is a transcontinental country predominantly located in Western Europe and spanning overseas regions and territories in the Americas and the Atlantic, Pacific and Indian Oceans."}/> */}
          {
            info.map((e, i) => {
              return <Card key={i} img={e.img} title={e.title} decs={e.decs}/>
            })
          }
        </div>
    </div>
  )
}

export default Recent