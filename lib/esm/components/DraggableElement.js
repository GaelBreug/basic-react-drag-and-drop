import React from "react";
import Globals from "../utils/Globals";
var DraggableElement = function (props) {
    function dragElement(e) {
        e.dataTransfer.setData(Globals.dataTransferKey, props.id);
    }
    return (React.createElement("div", { id: props.id, className: "basic-dnd-draggable-element", draggable: true, onDragStart: dragElement }, props.children));
};
export default DraggableElement;
