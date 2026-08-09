import { Link } from "react-router-dom";
import { PhotoBlog } from "./PhotoBlog";
import { Dots } from "../../Misc/Misc";

export const PhotoBlogPage = () => {
    return (
        <div>
            <Dots />
            <PhotoBlog />
            <Dots />
            <div className="App-div sticky-back-container">
                <Link to="/" className="App-link">← back</Link>
            </div>
        </div>

    );
};
