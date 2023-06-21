import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";

function SharedLayout() {
    return (
        <div>
      <header>
      <nav>
          <NavLink to="/" end> Home </NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </nav>
      </header>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
      </div>

      
    )
}

export default SharedLayout;