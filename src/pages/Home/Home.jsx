import {getTrendingMovies} from '../../API/Api';
import { useState, useEffect } from 'react';
import TrendingList from "../../components/TrendingList/TrendingList";

function Home(){

const [trendingMovies, setTrendingMovies] = useState([]);

useEffect(() =>{
  getTrendingMovies().then(
    response => {
      setTrendingMovies(response.data.results);
    })
},[])

    return (
      <main>
        <h1> Trending today </h1>      
{trendingMovies && <TrendingList data={trendingMovies}/>}
  </main>
    );
  };

  export default Home;