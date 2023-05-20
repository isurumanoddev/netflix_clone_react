import './App.css';
import Row from "./Row";
import requests from "./requests";
import instance from "./axios";

function App() {


    return (
        <div className="App">
            <h1>Hello isuru</h1>

            <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}/>
            <Row title="Trending Now"/>
            <Row title="Discover"/>



        </div>
    );
}

export default App;
