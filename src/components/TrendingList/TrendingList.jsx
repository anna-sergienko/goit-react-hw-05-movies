import { Link } from "react-router-dom";
import { ListItem, List} from "./TrendingList.styled";

function TrendingList ({data}) {
return (
    <div>
    <List>
{data.map(({id, title}) => (
    <ListItem key={id}>
        <Link to={`/movies/${id}`}>
            <h2>{title}</h2>
        </Link>
        </ListItem>
))}
    </List>
    </div>
)
}

export default TrendingList;