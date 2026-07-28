import { Link } from "react-router-dom";
import { Zines } from "./Zines";
import { Dots } from "../../Misc/Misc";

export const ZinesPage = () => {
    return (
        <div>
            <Dots />
            <Zines />
            <Dots />
            <div className="App-div">
                <Link to="/" className="App-link">← back</Link>
            </div>
        </div>
    );
};
