import { Link } from "react-router-dom";

function TrendingList ({data}) {
return (
    <ul>
{data.map(({id, title}) => (
    <li key={id}>
        <Link to={`/movies/${id}`}>
            <h2>{title}</h2>
        </Link>
        </li>
))}
    </ul>
)
}

export default TrendingList;