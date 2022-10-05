"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Globals_1 = __importDefault(require("../utils/Globals"));
var DraggableElement = function (props) {
    function dragElement(e) {
        e.dataTransfer.setData(Globals_1.default.dataTransferKey, props.id);
    }
    return (react_1.default.createElement("div", { id: props.id, className: "basic-dnd-draggable-element", draggable: true, onDragStart: dragElement }, props.children));
};
exports.default = DraggableElement;
