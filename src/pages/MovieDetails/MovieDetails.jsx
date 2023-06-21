import {useEffect, useState, Suspense } from 'react';
import { useParams, Link, Outlet, useLocation} from 'react-router-dom';
import {getMovieById} from '../../API/Api';
import MovieInfo from 'components/MovieInfo/MovieInfo';
import GoBackButton from 'components/GoBackButton/GoBackButton';

function MovieDetails(){
const [description, setDescription] = useState(null);
const { movieId } = useParams();
const location = useLocation();
const goBackLink = location.state?.from ?? "/";


useEffect(() => {
    getMovieById(movieId).then(response => {
        setDescription(response.data)
    });
},[movieId]);

if(!description){
    return null;
};


return (
<>
{description &&( 
<>
<GoBackButton to={goBackLink}/>
<MovieInfo description={description}/>
<div>
    <h3>Aditional information</h3>
    <ul>
        <li>
            <Link to="cast">Cast</Link>
        </li>
        <li>
            <Link to="reviews">Reviews</Link>
        </li>
    </ul>
   
    <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    
</div>
</>
)}
</>
)
}

export default  MovieDetails;
    

