import './App.css';
import { DraggableElement, DroppableZoneList } from 'basic-react-drag-and-drop';
import { useState } from 'react';

interface ElemList {
  JSXElem: JSX.Element;
  isInDropZone: boolean;
}

function App() {
  const [droppableObjects, setDroppableObjects] = useState<ElemList[]>([
    {
      JSXElem : <DraggableElement id="draggabled-element-1" key="draggabled-element-1"><div className="draggabled-element">Test 1</div></DraggableElement>, isInDropZone: false
    },
    {
      JSXElem : <DraggableElement id="draggabled-element-2" key="draggabled-element-2"><div className="draggabled-element">Test 2</div></DraggableElement>, isInDropZone: false
    },
    {
      JSXElem : <DraggableElement id="draggabled-element-3" key="draggabled-element-3"><div className="draggabled-element">Test 3</div></DraggableElement>, isInDropZone: false
    },
    {
      JSXElem : <DraggableElement id="draggabled-element-4" key="draggabled-element-4"><div className="draggabled-element">Test 4</div></DraggableElement>, isInDropZone: false
    }
  ]);

  function onDrop(droppedElement: HTMLElement) {
    console.dir(droppedElement);

    let elemFound = droppableObjects.find(elem => elem.JSXElem.props.id == droppedElement.id);

    if(elemFound) {
      const newObjectsList = droppableObjects.filter((elem) => elem != elemFound);
      setDroppableObjects([...newObjectsList, {JSXElem: Object.assign(elemFound.JSXElem, null), isInDropZone: true}])
    }
  }

  function onDragOver(dropZoneElement: HTMLElement) {
    console.log(dropZoneElement);
  }


  return (
    <div className="App">
      <div id="zone-for-element-to-drag">
        Element to drag :
        { 
          droppableObjects.map((elem) => {
            if (!elem.isInDropZone)
              return elem.JSXElem;
          })
        }
      </div>
      

      <DroppableZoneList className="droppable-zone" onDrop={onDrop} onDragOver={onDragOver}>
        <div>
          Drop zone : 
          { 
            droppableObjects.map((elem) => {
              if (elem.isInDropZone)
                return elem.JSXElem;
            })
          }
        </div>
      </DroppableZoneList>
    </div>
  );
}

export default App;
