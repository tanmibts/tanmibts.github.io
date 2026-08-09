import { Link } from "react-router-dom";
import { Wood } from "./Wood";
import { Dots } from "../../Misc/Misc";

export const WoodPage = () => {
    return (
        <div>
            <Dots />
            <Wood />
            <Dots />
            <div className="App-div sticky-back-container">
                <Link to="/" className="App-link">← back</Link>
            </div>
        </div>

    );
};
