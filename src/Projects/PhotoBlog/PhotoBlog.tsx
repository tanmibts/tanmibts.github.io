import React from "react";
import "./PhotoBlog.css";
import { Dots } from "../../Misc/Misc";

interface PhotoItemProps {
    src: string;
    alt?: string;
    label: string;
    title?: string;
    description?: string;
}

const PhotoItem = ({ src, alt, label, title, description }: PhotoItemProps) => {
    return (
        <div className="photoblog-item">
            <div className="photoblog-wrapper">
                <div className="label photoblog-date">{label}</div>
                <img className="photoblog-img" src={src} alt={alt || title || label} />
            </div>
            {title && <div className="label">{title}</div>}
            {description && <div className="label photoblog-description">{description}</div>}
        </div>
    );
};

interface PhotoMetadata {
    title?: string;
    description?: string;
}

// Separate metadata map for optional custom titles & descriptions
// TODO victoria: edit this map when needed
const photoMetadataMap: Record<string, PhotoMetadata> = {
    "a_2026-06-07_19_29.jpg": {
        title: "Joshua Tree #1",
        description: "this is a long descrition. i love joshua tree. I want to see what this looks like when it's long.I want to see what this looks like when it's long.I want to see what this looks like when it's long.I want to see what this looks like when it's long.I want to see what this looks like when it's long.I want to see what this looks like when it's long.I want to see what this looks like when it's long."
    },
    "a_2026-06-07_20_16.jpg": {
        title: "Joshua Tree #2",
    },
    "a_2026-07-23": {
        title: "Sublime Study"
    },
    "a_2026-07-19": {
        title: "World Cup"
    }
};

// Dynamically require all image assets from assets folder and subdirectories
const req = (require as any).context("./assets", true, /\.(png|jpe?g|JPG|JPEG|svg)$/);

interface PhotoData {
    src: string;
    key: string;
    year: string;
    filename: string;
    label: string;
    title?: string;
    description?: string;
}

const loadPhotos = (): Record<string, PhotoData[]> => {
    const photosByYear: Record<string, PhotoData[]> = {};

    req.keys().forEach((key: string) => {
        const parts = key.split("/");
        // Format: "./2026/a_2026-06-07_19_29.jpg"
        const year = parts[1] || "Other";
        const filename = parts[parts.length - 1];

        // Strip leading "a_" from label if present
        const label = filename.replace(/^a_/, "");

        const metadata =
            photoMetadataMap[filename] ||
            photoMetadataMap[label] ||
            photoMetadataMap[key] ||
            {};

        const photoObj: PhotoData = {
            src: req(key),
            key,
            year,
            filename,
            label,
            title: metadata.title,
            description: metadata.description,
        };

        if (!photosByYear[year]) {
            photosByYear[year] = [];
        }
        photosByYear[year].push(photoObj);
    });

    Object.keys(photosByYear).forEach((yr) => {
        photosByYear[yr].sort((a, b) => b.filename.localeCompare(a.filename));
    });

    return photosByYear;
};

const DISPLAY_YEARS = ["2026", "2025", "2024", "2023", "2022", "2021"];

export const PhotoBlog = () => {
    const photosByYear = loadPhotos();

    const allYears = Array.from(
        new Set([...DISPLAY_YEARS, ...Object.keys(photosByYear)])
    ).sort((a, b) => b.localeCompare(a));

    return (
        <div className="photoblog-container">
            {allYears.map((year, index) => {
                const yearPhotos = photosByYear[year] || [];
                return (
                    <React.Fragment key={year}>
                        {index > 0 && <Dots />}
                        <div className="photoblog-year">{year}</div>
                        {yearPhotos.map((photo) => (
                            <PhotoItem
                                key={photo.key}
                                src={photo.src}
                                label={photo.label}
                                title={photo.title}
                                description={photo.description}
                            />
                        ))}
                    </React.Fragment>
                );
            })}
        </div>
    );
};