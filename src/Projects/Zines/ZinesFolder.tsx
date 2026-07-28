import { Link } from "react-router-dom";
import "./Zines.css";

const slappy1 = require("./assets/slappy/1.png");
const slant1 = require("./assets/slant/1.png");

export const ZinesFolder = () => {
    return (
        <div className="margin-xy">
            <Link to="/2023-slappy-slant-chapbooks" className="folder-item">
                <div className="zines-folder-icon background">
                    <img className="zines-folder-img" src={slappy1} alt="slappy cover" />
                    <img className="zines-folder-img" src={slant1} alt="slant cover" />
                </div>
                <div className="folder-item-label">slappy/slant chapbooks</div>
            </Link>
        </div>
    );
};
