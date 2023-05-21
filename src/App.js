import './App.css';
import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner";




function App() {


    return (
        <div className="App">

            <Banner fetchUrl={requests.fetchNetflixOriginals}/>
            <Row
                title="NETFLIX ORIGINALS"
                fetchUrl={requests.fetchNetflixOriginals}
                isLargeRow ={true}/>

            <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
            <Row title="Discover" fetchUrl={requests.fetchTopRated}/>
            <Row title="Action Movies" fetchUrl={requests.fetchAction}/>
            <Row title="Comedy Movies" fetchUrl={requests.fetchComedy}/>
            <Row title="Horror Movies" fetchUrl={requests.fetchHorror}/>
            <Row title="Romance Movies" fetchUrl={requests.fetchRomance}/>
            <Row title="Documentaries" fetchUrl={requests.fetchDoc}/>



        </div>
    );
}

export default App;
