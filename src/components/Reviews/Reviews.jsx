import {useEffect, useState } from 'react';
import { useParams} from 'react-router-dom';
import {getMovieReview} from '../../API/Api';


function Reviews (){
const { movieId } = useParams();
const [reviews, setReviews] = useState([]);

useEffect(() => {
    getMovieReview(movieId).then(response => {
        setReviews(response.data.results);
    })
},[movieId])

return (
    <>
    {reviews && reviews.length > 0 ? (
        <ul>
          {reviews.map((review, index) => (
            <li key={index}>
              <div>
                <p>{review.author}</p>
                <p>{review.content}</p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div><p>We don't have any reviews for this movie.</p></div>
      )}   
    </>

)

}

export default Reviews; 