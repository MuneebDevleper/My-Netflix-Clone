
import React, { useEffect, useState } from 'react'
import back_arrow from '../../assets/back_arrow_icon.png';
import "./Player.css"
import { useNavigate, useParams } from 'react-router-dom';

function Player() {

  const navigate = useNavigate();

  const { id } = useParams();

  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    type: ""
  })
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NzJjOTZiMzBlODY1MmNlODBmM2EyNGFjZjliYjMxOSIsIm5iZiI6MTc5MjE0NjI1NS45MDgsInN1YiI6IjZhZDFmYjRmNjI3N2I4MTBkOGIzZTk0YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9wpygGeUMjHIpchw9hPFJpboyXf-hNACkzgyvB-_mks'
    }
  };
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
      .then(res => res.json())
      .then(res => setApiData(res.results[0]))
      .catch(err => console.error(err));
  }, [])


  return (
    <div className='play'>
      <img src={back_arrow} alt="" onClick={()=> navigate('/')} />
      <iframe height="90%" width="80%"
        src={`https://www.youtube.com/embed/${apiData.key}`} title='trailer' frameborder="0" allowFullScreen></iframe>
      <div className='player-info'>
        <p>Published At: <span>{apiData.published_at.slice(0, 10)}</span></p>
        <p>Name: <span>{apiData.name}</span></p>
        <p>Type: <span>{apiData.type}</span></p>
      </div>
    </div>

  )
}

export default Player
