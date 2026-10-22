import React from 'react'
import "./Home.css"
import Navebar from '../../Components/NaveBar/Navebar';
import hero_title from "../../assets/hero_title.png";
import play_icon from "../../assets/play_icon.png";
import info_icon from "../../assets/info_icon.png";
import Titlecard from '../../Components/TitleCards/Titlecard.jsx';
import Footer from '../../Components/Footer/Footer.jsx';


function Home() {
  return (

    <>
      <div className='hero'>
        <Navebar />
        <div className='hero-in'>
          <img src={hero_title} alt="" />
          <p>Discovering his ties to a secret ancient order, a young man living in modren
            Instanbul embarks on a quest to save the city from an immortal enemy. </p>
          <div className='hero-btn'>
            <button><img src={play_icon} alt="" /><p>Play</p></button>
            <button className='info'><img src={info_icon} alt="" /><p>More Info</p></button>
          </div>
        </div>
        <Titlecard />
      </div>
      <div className="more-cards">
            <Titlecard Title={"Blockbuster Moveis"} Category={"top_rated"}/>  
              <Titlecard Title={"Only on Netflix"} Category={"popular"}/>   
               <Titlecard Title={"Upcomming"} Category={"upcoming"}/>
                   <Titlecard Title={"Top Pickd for you"} Category={""}/>
      </div>
    <Footer />
    </>

  )
}

export default Home
