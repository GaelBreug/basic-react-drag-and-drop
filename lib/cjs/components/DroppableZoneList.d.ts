/// <reference types="react" />
interface DroppableZoneListProps {
    children?: JSX.Element;
    className?: string;
    onDrop?(droppedElement: HTMLElement | null): void;
    onDragOver?(dropZoneElement: HTMLElement | null): void;
}
declare const DroppableZoneList: (props: DroppableZoneListProps) => JSX.Element;
export default DroppableZoneList;
