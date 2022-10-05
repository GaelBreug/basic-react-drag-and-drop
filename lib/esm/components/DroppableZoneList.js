import React, { useRef } from "react";
import Globals from "../utils/Globals";
var DroppableZoneList = function (props) {
    var dropZone = useRef(null);
    function onDrop(e) {
        var droppedElemId = e.dataTransfer.getData(Globals.dataTransferKey);
        var droppedElement = document.getElementById(droppedElemId);
        if (props.onDrop)
            props.onDrop(droppedElement);
    }
    function onDragOver(e) {
        e.preventDefault();
        if (props.onDragOver)
            props.onDragOver(e.target);
    }
    return (React.createElement("div", { ref: dropZone, className: "basic-dnd-droppable-zone-list " + (props === null || props === void 0 ? void 0 : props.className), onDrop: onDrop, onDragOver: onDragOver }, props.children));
};
export default DroppableZoneList;
