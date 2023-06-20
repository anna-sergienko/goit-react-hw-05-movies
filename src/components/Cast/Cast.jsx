import {useEffect, useState } from 'react';
import { useParams} from 'react-router-dom';
import {getMovieCast} from '../../API/Api';
import defaultImage from '../../defaultImg/default-image.png';



const IMG_URL = 'https://image.tmdb.org/t/p/w500/';


function Cast (){
const { movieId } = useParams();
const [cast, setCast] = useState(null);

useEffect(() =>{
    getMovieCast(movieId).then(response =>{
        setCast(response.data.cast)
    })
},[movieId]);


return (
    <>
    {cast && cast.length > 0 ? (
        <ul>
          {cast.map((item, index) => (
            <li key={index}>
              <div>
                <img
                  src={
                    item.profile_path
                      ? `${IMG_URL}${item.profile_path}`
                      : defaultImage
                  }
                  alt={item.name}
                  height="100px"
                />
                <div>{item.name}</div>
                <div>Charater: {item.character}</div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div>We don't have any cast for this movie.</div>
      )}   
    </>
)}

export default Cast;



// {cast && cast.length > 0 ? (
//     <ul>
//         {cast.map((actor, index) =>(
//             <li key={index}>
// <div>
// <img src={actor.profile_path ? `${IMG_URL}${actor.profile_path}` :  defaultImage} alt={actor.original_name}/>
// <div>
//     <p>{actor.name}</p>
//     <p>Character: {actor.character}</p>
// </div>
// </div>
//             </li>
//         ))}
//     </ul>
// ): (
//     <div><p>We have no cast for this movie.</p></div>
// )}      