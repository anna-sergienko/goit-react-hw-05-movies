import { Routes, Route, NavLink } from "react-router-dom";
import Home from "pages/Home/Home";
import Movies from "pages/Movies/Movies";


export const App = () => {
  return (
    <div>
      <header>
      <nav>
          <NavLink to="/" end> Home </NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </nav>
      </header>
 <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/movies" element={<Movies />} />
    </Routes>
    </div>
   
  );
};
