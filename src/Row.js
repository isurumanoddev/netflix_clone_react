import React, {useEffect, useState} from 'react';
import "./Row.css"
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer"


const base_url = "https://image.tmdb.org/t/p/original/"

function Row({title, fetchUrl, isLargeRow}) {
    const [movies, setMovies] = useState([])
    const [trailerUrl, settrailerUrl] = useState("")


    useEffect(() => {
        async function fetchData() {
            const request = await fetch(fetchUrl);
            const data = await request.json()
            setMovies(data.results)


        }

        fetchData()
    }, [])

    const getTrailer = (movie) => {
        if (trailerUrl) {
            settrailerUrl("")
        } else {
            movieTrailer(movie?.name || movie?.title || "")
                .then(url => {
                    const urlParams = new URLSearchParams(new URL(url).search)
                    settrailerUrl(urlParams.get("v"));
                }).catch(error => console.log(error))

        }
    }
    const opts = {
        position: "absolute",
        top: "0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: '590',
        width: '100%',
        playerVars: {

            autoplay: 1, // Auto-play the video
            controls: 0, // Hide the player controls


        },
    };

    return (
        <div className="row">
            <h2>{title}</h2>


            <div className="row__posters">
                {movies.map((movie) =>
                    <img
                        onClick={() => getTrailer(movie)}
                        className={`row__poster ${isLargeRow && "row__poster__large"}`}
                        src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                        alt={movie.name}
                        key={movie.id}
                    />
                )}
            </div>
            {
                trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>
            }


        </div>
    );

}

export default Row;
