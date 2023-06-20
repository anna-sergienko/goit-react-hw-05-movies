import defaultImg from '../../defaultImg/default-image.png';

const IMG_URL = 'https://image.tmdb.org/t/p/w500/';

function MovieInfo({description}){


    const {
        poster_path, 
        original_title, 
        title,
        release_date,
        vote_average, 
        overview, 
        genres } = description;

    return(
      <>
      {/* movie card */}
        <div>
            <img src={poster_path ? 
                `${IMG_URL}${poster_path}` :  defaultImg} alt={original_title} />
        </div>  
       
{/* movie description  */}
<div>
    <ul>
         <li>
         <h1>{title}</h1>
        <span>({release_date})</span>
        </li>

        <li>
            <h2>User score: <span>{vote_average}</span></h2>
        </li>
        <li>
            <h2>Overview</h2>
            <p>{overview}</p>
        </li>
    </ul>
    <div>
        {genres && (
            <ul> <h2>Genres</h2>
                {genres.map((genre, index) => (
                    <li key={index}>{genre.name}</li>
                ))}
            </ul>
        )}
    </div>
</div>
     </>
    )


}

export default MovieInfo;

