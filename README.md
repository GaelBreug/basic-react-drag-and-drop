# basic-react-drag-and-drop
Basic library for drag and drop with react

To make an object draggable, wrap it with ```<DraggableElement id="give-a-unique-id"></DraggableElement>``` tags.

To create a drop zone list, use the component ```<DroppableZoneList></DroppableZoneList>```.

Property for **DroppableZoneList**:
- className?: string;
- onDrop?(droppedElement: HTMLElement | null): void;
- onDragOver?(dropZoneElement: HTMLElement | null): void;