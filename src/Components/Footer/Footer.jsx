import React from 'react'
import youtube_icon from "../../assets/youtube_icon.png";
import twitter_icon from '../../assets/twitter_icon.png';
import insta_icon from "../../assets/instagram_icon.png";
import facebook_icon from "../../assets/facebook_icon.png";
import "./Footer.css"


function Footer() {
  return (
    <div className='footer'>
        <div className="footer-icon">
            <img src={youtube_icon} alt="" />
              <img src={twitter_icon} alt="" />
                <img src={insta_icon} alt="" />
                  <img src={facebook_icon} alt="" />
        </div>
        <ul>
            <li>Audio Description </li>
            <li>Help Center</li>
            <li>Gift Cards</li>
            <li>Meia Center</li>
            <li>Invester Relations</li>
            <li>Jobs</li>
            <li>Terms of use</li>
            <li>Privacy</li>
            <li>Legal Notices</li>
            <li>Cookie Prefrence</li>
            <li>Corporate Information</li>
            <li>Contect Us</li>
        </ul>
        <p> @ 1997-2023 Netflix, Inc.</p>
      
    </div>
  )
}

export default Footer
