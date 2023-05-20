import React,{useState,useEffect} from 'react';



function Row({title,fetchUrl}) {
    
    const [movies,setMovies] = useState([])

    useEffect(() => {
        async function fetchData(){
            const request =await fetch(fetchUrl)
            const data = await request.json()
            console.log(data.results)


            return request
        }
        fetchData()


    },[])

    return (
        <div>
            <h2>{title}</h2>
        </div>
    );
}

export default Row;
