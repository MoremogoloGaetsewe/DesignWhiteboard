import React, {useRef, useEffect, useState,useContext} from 'react';
import { fabric } from 'fabric';

import { SketchPicker } from 'react-color';
import '../App.css'
import { v4 as uuidv4 } from 'uuid'
import CanvasToolBar from '../item/CanvasToolBar';

const Drawing = ({socket, roomId, canvasState1}) => {
 
  const [brushColor, setBrushColor] = useState('#000000');
  const [canvasF, setCanvas] = useState(null);


  const [undoneActions, setUndoneActions] = useState([]);
  const canvasRef = useRef(null);
  const canvasContainer = useRef(null);
  const [CanvasWidth, setCanvasWidth] = useState(1292);
  const [CanvasHeight, setCanvasHeight] = useState((1292)* (4/3));
  const canvasLoaded = useRef(true)


  useEffect(()=>{

     const canvas = new fabric.Canvas(canvasRef.current,{isDrawingMode: true, freeDrawingBrush: new fabric.PencilBrush(), });
    setCanvas(canvas)
    canvas.freeDrawingBrush.width='3'
    canvas.width = CanvasWidth
    canvas.height = CanvasHeight;

    

    const handleDrawingStart =  (pathJson)=>{
      const path=JSON.parse(pathJson)
       
        
         const recAction = new fabric.Path(path.path, {
           left: path.left,
           top: path.top,
           fill: path.fill,
           stroke: path.stroke,
           strokeWidth: path.strokeWidth,
           originalLeft: path.left,
           originalTop: path.top,
           id: `${path.id}`
     
         })
         
     
       
         canvas.add(recAction);
         
         canvas.renderAll();
       }
     
     
    if(canvasLoaded.current){
console.log('canload1',canvasLoaded.current)



    for(const key in canvasState1)
    {
      
     const objects = canvasState1[key]
     for(const element of objects){
      handleDrawingStart(element)
      console.log('loaded')
     }
    
     
    }
    
  }



 

    const resizeCanvas = () => {
    const newWindowWidth = canvasContainer.current.offsetWidth;     
    canvas.setWidth(newWindowWidth);
    canvas.setHeight((newWindowWidth) * (16/9));
 
    const canvasElement = canvas.getElement();
    const {width} = canvasElement.getBoundingClientRect();
    const widthScaleFactor=width/CanvasWidth;
  
    canvas.setZoom(widthScaleFactor);
    canvas.renderAll(); 
    }
    if(window.innerWidth!==CanvasWidth){
      resizeCanvas()
    }
    window.addEventListener('resize', resizeCanvas);
    

    return () => {
      canvas.dispose();
      window.removeEventListener('resize', resizeCanvas);
      

    };
  },[canvasState1]);
   // Set desired width of the canvas
 


  useEffect(() => {
    // Reset the body margin and padding
    document.body.style.margin = 0;
    document.body.style.padding = 0;
    if(canvasF){
    canvasF.on('path:created',handleCreatedPath );
    
    }
    
    socket.on('drawing', handleDrawing);
    socket.on('clear', handleClearCanvas);
    socket.on('undo', handleUndo);
   
     return () => {
      // Cleanup function to remove the event listener
     
      socket.off('undo', handleUndo);
      socket.off('drawing', handleDrawing);
      socket.off('clear', handleClearCanvas);
      if(canvasF){
        canvasF.off('path:created',handleCreatedPath );
        }
    };
    
  }, [ canvasF, undoneActions]);

 // Set desired height of the canvas




  const handleClearCanvas = (act)=>{
    if(canvasF){
      
    canvasF.clear();
    setUndoneActions([]);
    }
  
     
   }
 const handleCreatedPath = (event)=>{
  const path = event.path;
  

  canvasF.remove(path)
  const newPath = new fabric.Path(path.path, {
    left: path.left,
    originalLeft: path.left,
    originalTop: path.top,
    top: path.top,
    fill: path.fill,
    stroke: path.stroke,
    strokeWidth: path.strokeWidth,
    
  })
  newPath.set({id:generateUniqueId()})
 
  socket.emit('drawing',JSON.stringify(newPath.toJSON(['id'])),roomId)
  //canvasF.add(newPath)

 
 if (undoneActions.length>0){
  setUndoneActions([])
 }

}
  const handleDrawing =  (pathJson)=>{
 const path=JSON.parse(pathJson)
    if(canvasF)
    {
   
    const recAction = new fabric.Path(path.path, {
      left: path.left,
      top: path.top,
      fill: path.fill,
      stroke: path.stroke,
      strokeWidth: path.strokeWidth,
      originalLeft: path.left,
      originalTop: path.top,
      id: `${path.id}`

    })
    
    
   
    canvasF.add(recAction);
    
    canvasF.renderAll();
  }
    


   }
   

  const handleUndo = (obj) =>
  {
    const object = JSON.parse(obj)
    
    const previousAction = getObjectById(object.id)
  
    canvasF.remove(previousAction)
    canvasF.renderAll()
    setUndoneActions((prevActions) => [...prevActions, obj]);
  }

 
  
 
  const handleColorChange = (color) => {
    setBrushColor(color.hex);
    canvasF.freeDrawingBrush.color = color.hex;
  };

  const generateUniqueId = () => {
    const uniqueId = uuidv4();
    return uniqueId;
  };
  
  function getObjectById(id) {
    const array = canvasF.getObjects();
    return array.find(obj => obj.id === id)
  }
  const writeButton= () =>{
    canvasF.isDrawingMode=true;
    canvasF.freeDrawingBrush.color = brushColor;
    canvasF.freeDrawingBrush.width=3;
    canvasF.freeDrawingBrush.globalCompositeOperation = 'source-over';
    //const objectToDelete = getObjectById("drawing1")
   

  };

  const eraseButton= () =>{
    canvasF.isDrawingMode=true;
    canvasF.freeDrawingBrush.color= '#ffffff';
    canvasF.freeDrawingBrush.width=10;
    canvasF.freeDrawingBrush.globalCompositeOperation = 'destination-out';
 
  }

  const clearButton = () =>{
  
    socket.emit('action', 'clear')
  }
  
  const UndoButton= () => {
  
     
      socket.emit('action', 'undo',roomId);
     
    
  };
  const RedoButton= () =>{
    
    if(undoneActions.length>0)
    {
      const redoAction = undoneActions.pop()
      socket.emit('drawing', redoAction, roomId)
   
      setUndoneActions([...undoneActions])
     
    }
  }

  const SaveButton = ()=>{
    socket.emit('action', 'save', roomId)
  }


  return <div ref={canvasContainer } className='canvas-container'>
<CanvasToolBar writeButton={writeButton} eraseButton={eraseButton } UndoButton={UndoButton} RedoButton={RedoButton}/>
  <canvas ref={canvasRef} className='canvas' />

  </div>;
 
};

export default Drawing;