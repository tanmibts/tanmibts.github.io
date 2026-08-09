import { Link } from "react-router-dom";
import { BookRecs } from "./BookRecs";
import { Dots } from "../../Misc/Misc";

export const BookRecsPage = () => {
    return (
        <div>
            <Dots />
            <BookRecs />
            <Dots />
            <div className="App-div sticky-back-container">
                <Link to="/" className="App-link">← back</Link>
            </div>
        </div>

    );
};
