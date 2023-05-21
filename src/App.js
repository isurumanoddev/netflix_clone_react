import './App.css';
import Row from "./Row";
import requests from "./requests";




function App() {


    return (
        <div className="App">
            <h1>Hello isuru</h1>

            <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}/>
            <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
            <Row title="Discover" fetchUrl={requests.fetchTopRated}/>
            <Row title="Action" fetchUrl={requests.fetchAction}/>
            <Row title="Comedy" fetchUrl={requests.fetchComedy}/>
            <Row title="Horror" fetchUrl={requests.fetchHorror}/>
            <Row title="Romance" fetchUrl={requests.fetchRomance}/>
            <Row title="Documentaries" fetchUrl={requests.fetchDoc}/>



        </div>
    );
}

export default App;
