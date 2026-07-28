import { Link } from "react-router-dom";
import "./PhotoBlog.css";

const jtree_1 = require("./assets/2026/a_2026-06-07_20_16.jpg");

export const PhotoBlogFolder = () => {
    return (
        <div className="margin-xy">
            <Link to="/photoblog" className="folder-item">
                <div className="photoblog-folder-icon background">
                    <img className="photoblog-folder-img" src={jtree_1} alt="jtree_1" />
                </div>
                <div className="folder-item-label">photoblog</div>
            </Link>
        </div>
    );
};
