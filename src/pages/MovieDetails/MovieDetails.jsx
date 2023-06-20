import {useEffect, useState } from 'react';
import { useParams, Link} from 'react-router-dom';
import {getMovieById} from '../../API/Api';
import MovieInfo from 'components/MovieInfo/MovieInfo';


function MovieDetails(){
const [description, setDescription] = useState(null);
const { movieId } = useParams();


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
</div>
</>
)}
</>
)
}

export default  MovieDetails;
    

