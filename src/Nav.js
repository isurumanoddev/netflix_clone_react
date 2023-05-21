import React, {useEffect} from 'react';
import "./Nav.css"
function Nav(props) {

    useEffect(() =>{
        window.addEventListener("scroll",() =>{

        })

    },[])



    return (
        <div className="nav">
            <img
                src="https://www.edigitalagency.com.au/wp-content/uploads/netflix-logo-png-large.png"
                alt="nav-logo"
                className="nav__logo"/>
            <img
                src="https://i.pinimg.com/550x/e3/94/30/e39430434d2b8207188f880ac66c6411.jpg"
                alt="nav-logo"
                className="nav__avatar"/>
        </div>

    );
}

export default Nav;
