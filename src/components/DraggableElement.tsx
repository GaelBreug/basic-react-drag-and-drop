import React from "react";
import Globals from "../utils/Globals";

interface DraggableElementProps {
  id: string;
  children?: JSX.Element;
}

const DraggableElement = (props: DraggableElementProps) : JSX.Element => {

  function dragElement(e: any) {
    e.dataTransfer.setData(Globals.dataTransferKey, props.id);
  }

  return (
    <div id={props.id} className="basic-dnd-draggable-element" draggable onDragStart={dragElement}>
        {props.children}
    </div>
  );
}

export default DraggableElement;