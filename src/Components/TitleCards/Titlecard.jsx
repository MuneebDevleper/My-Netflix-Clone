import React, { useEffect, useRef, useState } from 'react'
import './Titlecard.css'
import card_data from "../../assets/cards/Cards_data"
import { Link } from 'react-router-dom';

function Titlecard({ Title, Category }) {

    const [apiData, setapiData] = useState([]);
    const cardref = useRef();

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NzJjOTZiMzBlODY1MmNlODBmM2EyNGFjZjliYjMxOSIsIm5iZiI6MTc5MjE0NjI1NS45MDgsInN1YiI6IjZhZDFmYjRmNjI3N2I4MTBkOGIzZTk0YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9wpygGeUMjHIpchw9hPFJpboyXf-hNACkzgyvB-_mks'
        }
    };





    const handlewheel = (e) => {
        e.preventDefault();
        cardref.current.scrollLeft += e.deltaX + e.deltaY;
    }

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${Category? Category:"now_playing"}?language=en-US&page=1`, options)
            .then(res => res.json())
            .then(res => setapiData(res.results))
            .catch(err => console.error(err));
        cardref.current.addEventListener("wheel", handlewheel)
    }, [])

    return (
        <div className='titlecard'>
            <h1>{Title ? Title : "Popular on Netflix"}</h1>
            <div className="card-data" ref={cardref}>
                {apiData.map((item, index) => (
                    <Link to={`/player/${item.id}`} className='card' key={index}>
                        <img src={`https://image.tmdb.org/t/p/w500`+item.backdrop_path} alt="" />
                        <p>{item.original_title}</p>
                    </Link>
                ))}
            </div>

        </div>
    )
}

export default Titlecard
