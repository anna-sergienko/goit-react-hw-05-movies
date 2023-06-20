import { Routes, Route, Link} from "react-router-dom";
import Home from '../../pages/Home/Home';
import Movies from "../../pages/Movies/Movies";
import MovieDetails from "pages/MovieDetails/MovieDetails";
import Cast from "../Cast/Cast";




export const App = () => {
  return (
    <>
    <div>
      <header>
      <nav>
          <Link to="/" > Home </Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </header>
      </div>

      <div>
 <Routes>
    <Route path="/"  element={<Home />} />
    <Route path="/movies" element={<Movies />} />
    <Route path="/movies/:movieId" element={<MovieDetails/>}>
        <Route path="cast" element={<Cast/>}/>
    </Route>
 </Routes>
 </div>
    </>
   
  );
};
