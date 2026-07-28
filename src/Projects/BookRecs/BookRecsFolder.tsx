import { Link } from "react-router-dom";
import bookstack from "./assets/bookstack.png";

export const BookRecsFolder = () => {
    return (
        <div className="margin-xy">
            <Link to="/bookshelf" className="folder-item">
                <img className="folder-item-img" src={bookstack} alt="bookshelf" />
                <div className="folder-item-label">my bookshelf</div>
            </Link>
        </div>
    );
};
