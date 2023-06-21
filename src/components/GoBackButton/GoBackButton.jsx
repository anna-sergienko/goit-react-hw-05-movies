import { Link } from "react-router-dom";

function GoBackButton ({to}) {
return (
    <Link to={to}>
        <button type="button">Go back</button>
    </Link>
)

}

export default GoBackButton;