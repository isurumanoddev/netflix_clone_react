import React,{useState,useEffect} from 'react';
import "./Row.css"

const base_url ="https://image.tmdb.org/t/p/original/"



function Row({title,fetchUrl}) {
    
    const [movies,setMovies] = useState([])


    useEffect(() => {
        async function fetchData(){
            const request =await fetch(fetchUrl)
            const data = await request.json()

            setMovies(data.results)


            return request
        }
        fetchData()


    },[fetchUrl])


    const movie = movies.map(movie =>
        <img
            key={movie.id}
            alt={movie.name}
            className="row__poster"
            src={`${base_url}${movie.poster_path}`}/> )

    return (
        <div className="row">
            <h2>{title}</h2>


            <div className="row__posters">
                {movie}



            </div>
        </div>
    );
}

export default Row;
