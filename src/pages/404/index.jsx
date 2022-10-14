import { Link } from "react-router-dom";

import "./styles.scss";

const NotFoundPage = () => {
    return (
        <div className="not-found">
            <h3 className="not-found__title">Page not found</h3>
            <Link to="/" className="not-found__link">Go home</Link>
        </div>
    )
}

export default NotFoundPage;
