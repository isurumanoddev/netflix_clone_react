import React, {useEffect, useState} from 'react';
import "./Banner.css"

function Banner({fetchUrl}) {
    const [movie,setMovie] = useState([])

    useEffect(() =>{
        async function fetchData(){
            const request = await fetch(fetchUrl);
            const data =await request.json()
            const randomMovie = Math.floor(Math.random() * data.results.length-1)
            setMovie(data.results[randomMovie])
            return data
        }
        fetchData()
    },[])
    console.log("movie : ",movie)

    return (
        <header className="banner"
                style={{
                    backgroundSize: "cover",
                    backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
                    backgroundPosition: "center center",
                    maxHeight: "448px"

                }}
        >
            <div className="banner__content">

                <h1 className="banner__title">{movie?.title || movie?.original_name || movie?.name}</h1>
                <div className="banner__butoons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>
                <h1 className="banner__des">{movie.overview}</h1>
            </div>
            <div className="banner__fade"></div>

        </header>
    );
}

export default Banner;
