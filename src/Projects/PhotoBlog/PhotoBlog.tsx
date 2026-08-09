import React, { useState, useRef, useEffect } from "react";
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
    const imgRef = useRef<HTMLImageElement>(null);
    const [imgWidth, setImgWidth] = useState<number | undefined>(undefined);

    const updateWidth = () => {
        if (imgRef.current && imgRef.current.clientWidth > 0) {
            setImgWidth(imgRef.current.clientWidth);
        }
    };

    useEffect(() => {
        const img = imgRef.current;
        if (img) {
            if (img.complete) {
                updateWidth();
            } else {
                img.addEventListener("load", updateWidth);
                return () => img.removeEventListener("load", updateWidth);
            }
        }
    }, [src]);

    useEffect(() => {
        window.addEventListener("resize", updateWidth);
        return () => window.removeEventListener("resize", updateWidth);
    }, []);

    return (
        <div className="photoblog-item">
            <div className="photoblog-wrapper">
                <div
                    className="photoblog-text-container"
                    style={{ width: imgWidth ? `${imgWidth}px` : "100%" }}
                >
                    <div className="label photoblog-date">{label}</div>
                </div>
                <img
                    ref={imgRef}
                    className="photoblog-img"
                    src={src}
                    alt={alt || title || label}
                    onLoad={updateWidth}
                />
                <div
                    className="photoblog-text-container"
                    style={{ width: imgWidth ? `${imgWidth}px` : "100%" }}
                >
                    {title && <div className="label photoblog-title">{title}</div>}
                    {description && (
                        <div className="label photoblog-description">{description}</div>
                    )}
                </div>
            </div>
        </div>
    );
};

interface CollectionPhotoProps {
    src: string;
    alt?: string;
    label: string;
    title?: string;
    description?: string;
}

const CollectionPhoto = ({ src, alt, label, title, description }: CollectionPhotoProps) => {
    const imgRef = useRef<HTMLImageElement>(null);
    const [imgWidth, setImgWidth] = useState<number | undefined>(undefined);

    const updateWidth = () => {
        if (imgRef.current && imgRef.current.clientWidth > 0) {
            setImgWidth(imgRef.current.clientWidth);
        }
    };

    useEffect(() => {
        const img = imgRef.current;
        if (img) {
            if (img.complete) {
                updateWidth();
            } else {
                img.addEventListener("load", updateWidth);
                return () => img.removeEventListener("load", updateWidth);
            }
        }
    }, [src]);

    useEffect(() => {
        window.addEventListener("resize", updateWidth);
        return () => window.removeEventListener("resize", updateWidth);
    }, []);

    return (
        <div className="photoblog-collection-photo">
            <div
                className="photoblog-text-container"
                style={{ width: imgWidth ? `${imgWidth}px` : "100%" }}
            >
                <div className="label photoblog-date">{label}</div>
            </div>
            <img
                ref={imgRef}
                className="photoblog-collection-img"
                src={src}
                alt={alt || title || label}
                onLoad={updateWidth}
            />
            <div
                className="photoblog-text-container"
                style={{ width: imgWidth ? `${imgWidth}px` : "100%" }}
            >
                {title && <div className="label photoblog-title">{title}</div>}
                {description && (
                    <div className="label photoblog-description">{description}</div>
                )}
            </div>
        </div>
    );
};

interface CollectionItemProps {
    folderName: string;
    label: string;
    title?: string;
    description?: string;
    photos: PhotoData[];
}

const PhotoCollectionItem = ({
    folderName,
    label,
    title,
    description,
    photos,
}: CollectionItemProps) => {
    const carouselRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const carousel = carouselRef.current;
        if (!carousel) return;

        const onWheel = (e: WheelEvent) => {
            const isVerticalScroll = Math.abs(e.deltaY) >= Math.abs(e.deltaX);
            let rawDelta = isVerticalScroll ? e.deltaY : e.deltaX;

            if (e.deltaMode === 1) rawDelta *= 30;
            else if (e.deltaMode === 2) rawDelta *= 300;

            const maxScroll = carousel.scrollWidth - carousel.clientWidth;
            const currentScroll = carousel.scrollLeft;

            // Boundary checks: allow vertical page scroll only when already at the edge and attempting to scroll past
            const atStart = currentScroll <= 1 && rawDelta < 0;
            const atEnd = currentScroll >= maxScroll - 1 && rawDelta > 0;

            if (atStart || atEnd) {
                return;
            }

            // Always intercept wheel events when not at boundary to prevent vertical page scroll
            e.preventDefault();

            // Direct smooth scroll update
            carousel.scrollLeft = Math.min(Math.max(0, currentScroll + rawDelta), maxScroll);
        };

        carousel.addEventListener("wheel", onWheel, { passive: false });
        return () => {
            carousel.removeEventListener("wheel", onWheel);
        };
    }, []);





    return (
        <div className="photoblog-collection">
            <div className="photoblog-collection-header">
                {title && <div className="label photoblog-collection-title">{title}</div>}
                <div className="label photoblog-collection-name">{label}</div>
                {description && (
                    <div className="label photoblog-collection-description">
                        {description}
                    </div>
                )}
            </div>
            <div ref={carouselRef} className="photoblog-collection-carousel">
                <div className="photoblog-collection-bar-wrapper">
                    <div className="photoblog-collection-bar" />
                </div>
                {photos.map((photo) => (
                    <CollectionPhoto
                        key={photo.key}
                        src={photo.src}
                        label={photo.label}
                        title={photo.title}
                        description={photo.description}
                    />
                ))}
                <div className="photoblog-collection-bar-wrapper">
                    <div className="photoblog-collection-bar" />
                </div>
            </div>

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
    "a_2026-06-27_04_34.JPG": {
        title: "Limei at Green Gulch"
    },
    "a_2026-06-07_19_29.jpg": {
        title: "Joshua Tree #1",
    },
    "a_2026-06-07_20_16.jpg": {
        title: "Joshua Tree #2",
    },
    "a_2026-07-23": {
        title: "Sublime Study",
        description: "I visited my mother at the apartment in which she lives and decorates. The first morning I opened my eyes and saw the scene in the second photo: an elegant celadon vase, a bouquet of plastic roses, a pink checkered gift bow. Warm and cool undertones clashing. I had previously found her taste to be somewhat naive and unpracticed, but I realized in that moment that it was, in fact, ineffable, wildly creative, uninhibited by constrained notions of taste, and wondrously immune to the AI-induced homogenization of cheap aesthetics. It was, I thought, a variant of the sublime."
    },
    "a_2026-07-19": {
        title: "World Cup",
        description: "The 2026 World Cup Finals at the Orange County Dave & Busters was my first time watching soccer. Dave & Busters was at capacity and the staff turned a blind eye to the queue, which became impromptu seating for some 30-odd hangers-on (such as us). My mother loves to admire idols, and she had chosen Messi. When Argentina (Messi) lost to Spain, she cried. We went home and she insisted that we watch the 2022 World Cup Final, in which Messi (Argentina) wins. While I immensely enjoyed watching the game at Dave & Busters -- where the crowd swelled up and down in a curious collective edging practice, and the outcome of the game was as yet unknown to reality -- at home, the game functioned solely as an emotional pacifier, and I quickly lost interest. Regardless, I was surprised and pleased at my newfound fondness towards soccer and sport."
    },
    "a_2026-07-19-5.JPG": {
        title: "Eddie & Mom",
        description: "Eddie is my brother."
    },
    "a_2026-03-19.JPG": {
        title: "Mindful Consumption"
    },
    "a_2024_11_19.jpeg": {
        title: "Singaporean in China"
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

interface FeedEntry {
    type: "photo" | "collection";
    sortKey: string;
    photo?: PhotoData;
    collection?: {
        folderName: string;
        label: string;
        title?: string;
        description?: string;
        photos: PhotoData[];
    };
}

const loadPhotos = (): Record<string, FeedEntry[]> => {
    const entriesByYear: Record<string, FeedEntry[]> = {};
    const rawPhotosByYearAndFolder: Record<
        string,
        Record<string, { key: string; filename: string }[]>
    > = {};

    req.keys().forEach((key: string) => {
        const parts = key.split("/");
        // Format: "./2026/a_2026-06-07_19_29.jpg" or "./2026/a_2026-07-23/DSC00760.JPG"
        const year = parts[1] || "Other";
        const filename = parts[parts.length - 1];

        if (!rawPhotosByYearAndFolder[year]) {
            rawPhotosByYearAndFolder[year] = {};
        }

        let folderName = "";
        if (parts.length > 3) {
            folderName = parts[2];
        }

        if (!rawPhotosByYearAndFolder[year][folderName]) {
            rawPhotosByYearAndFolder[year][folderName] = [];
        }
        rawPhotosByYearAndFolder[year][folderName].push({ key, filename });
    });

    Object.keys(rawPhotosByYearAndFolder).forEach((year) => {
        entriesByYear[year] = [];
        const foldersMap = rawPhotosByYearAndFolder[year];

        Object.keys(foldersMap).forEach((folderName) => {
            const items = foldersMap[folderName];

            if (folderName === "") {
                // Standalone photos
                items.forEach((item) => {
                    const label = item.filename.replace(/^a_/, "");
                    const metadata =
                        photoMetadataMap[item.filename] ||
                        photoMetadataMap[label] ||
                        photoMetadataMap[item.key] ||
                        {};

                    const photoData: PhotoData = {
                        src: req(item.key),
                        key: item.key,
                        year,
                        filename: item.filename,
                        label,
                        title: metadata.title,
                        description: metadata.description,
                    };

                    entriesByYear[year].push({
                        type: "photo",
                        sortKey: item.filename,
                        photo: photoData,
                    });
                });
            } else {
                // Photo collection folder
                const folderLabel = folderName.replace(/^a_/, "");
                const folderMetadata =
                    photoMetadataMap[folderName] ||
                    photoMetadataMap[folderLabel] ||
                    photoMetadataMap[`./${year}/${folderName}`] ||
                    {};

                // Preserve order (by name) within the folder
                items.sort((a, b) => a.filename.localeCompare(b.filename));

                const collectionPhotos: PhotoData[] = items.map((item) => {
                    const label = item.filename.replace(/^a_/, "");
                    const metadata =
                        photoMetadataMap[item.filename] ||
                        photoMetadataMap[label] ||
                        photoMetadataMap[item.key] ||
                        {};

                    return {
                        src: req(item.key),
                        key: item.key,
                        year,
                        filename: item.filename,
                        label,
                        title: metadata.title,
                        description: metadata.description,
                    };
                });

                entriesByYear[year].push({
                    type: "collection",
                    sortKey: folderName,
                    collection: {
                        folderName,
                        label: folderLabel,
                        title: folderMetadata.title,
                        description: folderMetadata.description,
                        photos: collectionPhotos,
                    },
                });
            }
        });

        // Preserve order (by name) within each year folder (descending sort on entry key/filename)
        entriesByYear[year].sort((a, b) => b.sortKey.localeCompare(a.sortKey));
    });

    return entriesByYear;
};

const DISPLAY_YEARS = ["2026", "2025", "2024", "2023", "2022", "2021"];

export const PhotoBlog = () => {
    const entriesByYear = loadPhotos();

    const allYears = Array.from(
        new Set([...DISPLAY_YEARS, ...Object.keys(entriesByYear)])
    ).sort((a, b) => b.localeCompare(a));

    return (
        <div className="photoblog-container">
            {allYears.map((year, index) => {
                const yearEntries = entriesByYear[year] || [];
                return (
                    <React.Fragment key={year}>
                        {index > 0 && <Dots />}
                        <div className="photoblog-year">{year}</div>
                        {yearEntries.map((entry, entryIndex) => {
                            if (entry.type === "photo" && entry.photo) {
                                return (
                                    <PhotoItem
                                        key={entry.photo.key}
                                        src={entry.photo.src}
                                        label={entry.photo.label}
                                        title={entry.photo.title}
                                        description={entry.photo.description}
                                    />
                                );
                            } else if (entry.type === "collection" && entry.collection) {
                                return (
                                    <PhotoCollectionItem
                                        key={`${year}-${entry.collection.folderName}-${entryIndex}`}
                                        folderName={entry.collection.folderName}
                                        label={entry.collection.label}
                                        title={entry.collection.title}
                                        description={entry.collection.description}
                                        photos={entry.collection.photos}
                                    />
                                );
                            }
                            return null;
                        })}
                    </React.Fragment>
                );
            })}
        </div>
    );
};
