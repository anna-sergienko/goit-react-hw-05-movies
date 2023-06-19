import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import TrendingList from "components/TrendingList/TrendingList";
import Searchbar from "components/Searchbar/Searchbar";
import {searchMovie} from '../../API/Api';

function Movies () {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState([]);
  const query = searchParams.get("query");

useEffect(()=>{
  if (query === "" || !query) return;

  searchMovie(query).then(
    response => {
      setSearchQuery(response.data.results);
    })
},[query]);


const handleSubmit = data => {
  return setSearchParams({ query: data});
};



    return (
      <main>
       <Searchbar onSubmit={handleSubmit}/>
       {searchQuery && <TrendingList data={searchQuery}/>}
      </main>
    );
  };

  export default Movies;