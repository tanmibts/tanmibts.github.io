import "./PhotoBlog.css"
import jtree_1 from "./assets/2026/a_2026-06-07_19_29.jpg";
import jtree_2 from "./assets/2026/a_2026-06-07_20_16.jpg";
import { Dots } from "../../Misc/Misc";

interface PhotoItemProps {
    src: string;
    alt?: string;
    label: string;
    title: string;
}

const PhotoItem = ({ src, alt, label, title }: PhotoItemProps) => {
    return (
        <div className="photoblog-item">
            <div className="photoblog-wrapper">
                <div className="label photoblog-date">{label}</div>
                <img className="photoblog-img" src={src} alt={alt || title} />
            </div>
            <div className="label">{title}</div>
        </div>
    );
};

export const PhotoBlog = () => {
    return (
        <div className="photoblog-container">
            <div className="photoblog-year">2026</div>
            <PhotoItem
                src={jtree_1}
                label="2026-06-07_19_29"
                title="Joshua Tree #1"
            />
            <PhotoItem
                src={jtree_2}
                label="2026-06-07_20_16"
                title="Joshua Tree #2"
            />
            <Dots />
            <div className="photoblog-year">2025</div>
            <Dots />
            <div className="photoblog-year">2024</div>
            <Dots />
            <div className="photoblog-year">2023</div>
            <Dots />
            <div className="photoblog-year">2022</div>
            <Dots />
            <div className="photoblog-year">2021</div>
        </div>
    );
};