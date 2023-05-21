import React,{useState,useEffect} from 'react';

const base_url ="https://image.tmdb.org/t/p/original/"



function Row({title,fetchUrl}) {
    
    const [movies,setMovies] = useState([])
    const [data,setData] = useState(["https://wallpapers.com/images/hd/cool-profile-picture-7aecpj5vptd1a0ib.jpg","https://upload.wikimedia.org/wikipedia/commons/a/a6/Ananya_panday_%28cropped%29.jpg","https://static.toiimg.com/thumb/msid-99302368,width-960,height-1280,resizemode-6.cms"])

    useEffect(() => {
        async function fetchData(){
            const request =await fetch(fetchUrl)
            const data = await request.json()

            setMovies(data.results)


            return request
        }
        fetchData()


    },[fetchUrl])


console.log(movies)
    const movie = movies.map(movie => <img className="row__poster" key={movie.id} src={`${base_url}${movie.poster_path}`}/> )

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
