import { Link } from "react-router-dom";
import "./Wood.css";
import chair from "./assets/chair_popout.png";

export const WoodFolder = () => {
    return (
        <div className="margin-xy">
            <Link to="/2023-chair" className="folder-item">
                <img className="folder-item-img" src={chair} alt="chair" />
                <div className="folder-item-label">remainders: chair</div>
            </Link>
        </div>
    );
};
