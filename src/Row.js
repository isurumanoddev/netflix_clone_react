import React from 'react';
import requests from "./requests";

function Row({title}) {
    
    const [movies,setMovies] = React.useState([])

    return (
        <div>
            <h2>{title}</h2>
        </div>
    );
}

export default Row;
