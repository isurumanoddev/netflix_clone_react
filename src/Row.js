import React, {useState, useEffect} from 'react';
import "./Row.css"

const base_url = "https://image.tmdb.org/t/p/original/"


function Row({title, fetchUrl, isLargeRow}) {

    const [movies, setMovies] = useState([])


    useEffect(() => {
        async function fetchData() {
            const request = await fetch(fetchUrl)
            const data = await request.json()

            setMovies(data.results)


            return request
        }

        fetchData()


    }, [fetchUrl])


    return (
        <div className="row">
            <h2>{title}</h2>


            <div className="row__posters">
                {
                    movies.map(movie =>
                        <img
                            key={movie.id}
                            alt={movie.name}
                            // className={ "row__poster"}
                            className={`row__poster ${isLargeRow && "row__poster__large"}`}
                            src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}/>)

                }

            </div>
        </div>
    );
}

export default Row;
