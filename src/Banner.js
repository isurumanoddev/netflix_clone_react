import React from 'react';

function Banner(props) {
    const [movie,setMovie] = React.useState([])
    return (
        <header>
            <h1 className="banner__title"></h1>
            <div className="button__container"></div>
            <div className="banner__des"></div>
        </header>
    );
}

export default Banner;
