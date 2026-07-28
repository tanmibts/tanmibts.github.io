import React, { useState, useRef, useEffect, useCallback } from "react";
import { WoodFolder } from "./Wood/WoodFolder";
import { ZinesFolder } from "./Zines/ZinesFolder";
import { BookRecsFolder } from "./BookRecs/BookRecsFolder";
import { PhotoBlogFolder } from "./PhotoBlog/PhotoBlogFolder";
import "./Projects.css";

interface DraggableFolderProps {
    children: React.ReactNode;
    initialPosPct: { xPct: number; y: number };
}

const DraggableFolder = ({ children, initialPosPct }: DraggableFolderProps) => {
    const folderRef = useRef<HTMLDivElement>(null);
    const [pos, setPos] = useState({ x: 0, y: initialPosPct.y });
    const [isInitialized, setIsInitialized] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const dragMoved = useRef(false);
    const hasManuallyMoved = useRef(false);

    const clampPos = useCallback((x: number, y: number) => {
        if (!folderRef.current) return { x, y };
        const parent = folderRef.current.parentElement;
        const parentWidth = parent ? parent.clientWidth : window.innerWidth;
        const folderWidth = folderRef.current.clientWidth || 160;

        const maxX = Math.max(10, parentWidth - folderWidth - 15);
        const minX = 10;
        return {
            x: Math.min(Math.max(minX, x), maxX),
            y: y,
        };
    }, []);

    const updatePosition = useCallback(() => {
        if (!folderRef.current) return;
        const parent = folderRef.current.parentElement;
        const parentWidth = parent ? parent.clientWidth : window.innerWidth;

        if (!hasManuallyMoved.current) {
            const calculatedX = (parentWidth * initialPosPct.xPct) / 100;
            const clamped = clampPos(calculatedX, initialPosPct.y);
            setPos(clamped);
        } else {
            setPos((prev) => clampPos(prev.x, prev.y));
        }
        setIsInitialized(true);
    }, [clampPos, initialPosPct.xPct, initialPosPct.y]);

    useEffect(() => {
        updatePosition();
        window.addEventListener("resize", updatePosition);
        return () => window.removeEventListener("resize", updatePosition);
    }, [updatePosition]);

    const handlePointerDown = (e: React.PointerEvent) => {
        if (e.button !== undefined && e.button !== 0) return;

        const startX = e.clientX;
        const startY = e.clientY;
        const initialX = pos.x;
        const initialY = pos.y;
        dragMoved.current = false;

        setIsDragging(true);

        const onPointerMove = (moveEvent: PointerEvent) => {
            const dx = moveEvent.clientX - startX;
            const dy = moveEvent.clientY - startY;

            if (Math.hypot(dx, dy) > 4) {
                dragMoved.current = true;
                hasManuallyMoved.current = true;
            }

            const clamped = clampPos(initialX + dx, initialY + dy);
            setPos(clamped);
        };

        const onPointerUp = () => {
            window.removeEventListener("pointermove", onPointerMove);
            window.removeEventListener("pointerup", onPointerUp);
            setIsDragging(false);
        };

        window.addEventListener("pointermove", onPointerMove);
        window.addEventListener("pointerup", onPointerUp);
    };

    const handleClickCapture = (e: React.MouseEvent) => {
        if (dragMoved.current) {
            e.preventDefault();
            e.stopPropagation();
        }
    };

    return (
        <div
            ref={folderRef}
            className={`draggable-folder ${isDragging ? "dragging" : ""}`}
            style={{
                transform: isDragging
                    ? `translate3d(${pos.x}px, ${pos.y}px, 0) rotate(3deg) scale(1.06)`
                    : `translate3d(${pos.x}px, ${pos.y}px, 0)`,
                opacity: isInitialized ? 1 : 0,
            }}
            onPointerDown={handlePointerDown}
            onClickCapture={handleClickCapture}
            onDragStart={(e) => e.preventDefault()}
        >
            <div className="drag-grip-badge" title="Drag icon to rearrange">
                ::
            </div>
            {children}
        </div>
    );
};

export const Projects = () => {
    return (
        <div className="desktop-workspace">
            <DraggableFolder initialPosPct={{ xPct: 65, y: -160 }}>
                <WoodFolder />
            </DraggableFolder>
            <DraggableFolder initialPosPct={{ xPct: 50, y: -70 }}>
                <ZinesFolder />
            </DraggableFolder>
            <DraggableFolder initialPosPct={{ xPct: 40, y: -30 }}>
                <BookRecsFolder />
            </DraggableFolder>
            <DraggableFolder initialPosPct={{ xPct: 78, y: 280 }}>
                <PhotoBlogFolder />
            </DraggableFolder>
        </div>
    );
};
