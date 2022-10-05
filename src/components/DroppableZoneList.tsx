import React, { useRef } from "react";
import Globals from "../utils/Globals";

interface DroppableZoneListProps {
    children?: JSX.Element;
    className?: string;
    onDrop?(droppedElement: HTMLElement | null): void;
    onDragOver?(dropZoneElement: HTMLElement | null): void;
}

const DroppableZoneList = (props: DroppableZoneListProps) : JSX.Element => {
    const dropZone = useRef<HTMLDivElement>(null);

    function onDrop(e: any) {
        let droppedElemId = e.dataTransfer.getData(Globals.dataTransferKey);
        const droppedElement = document.getElementById(droppedElemId);

        if(props.onDrop)
            props.onDrop(droppedElement);
    }

    function onDragOver(e: any) {
        e.preventDefault();
        
        if(props.onDragOver)
            props.onDragOver(e.target);
    }

    return (
    <div ref={dropZone} className={"basic-dnd-droppable-zone-list " + props?.className} onDrop={onDrop} onDragOver={onDragOver}>
        {props.children}
    </div>
    );
}

export default DroppableZoneList;