import React,{useState, useEffect,useRef} from 'react'
import penIcon from '../assets/pen.png'
import eraser from '../assets/eraser.png'
import undo from '../assets/undo.png'
import redo from  '../assets/redo.png'
import clear from '../assets/clear.png'
import colors from '../assets/colors.png'
import grab from '../assets/grab.png'
import { CompactPicker } from 'react-color';

function CanvasToolBar( {writeButton,eraseButton, UndoButton,RedoButton,handleColorChange, brushColor, clearButton ,GrabButton}){

    const PaletteRef= useRef(null);   
const [selectedTool, setSelectedTool]=useState('pen')
const [showPalette, setShowPalette] = useState(false)
    const handleSelectedTool=(tool)=>()=>{
        setSelectedTool(tool)
        if(tool==='pen')
        {
            writeButton();
        }
        else if(tool==='eraser')
        {
            eraseButton();
        }
        else{
            GrabButton();
        }
    }

    const handlePaletteToggle = () => {
        setShowPalette(!showPalette)
      };
useEffect(()=>{

    const handleOutsideClick = (event) => {
     
          if (showPalette && (PaletteRef.current && !PaletteRef.current.contains(event.target))) {
            setShowPalette(!showPalette)

            console.log('outside')

          }
      
      };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [showPalette])

   return (
    <div className='cavas-toolBar'>
        <img className={selectedTool==='grab'?('toolbar-item-selected'):('toolbar-item')} src={grab} alt='grab' onClick={handleSelectedTool('grab')}/>
        <div className='vertical-line'/>
        <img className={selectedTool==='pen'?('toolbar-item-selected'):('toolbar-item')}  src={penIcon} alt='pen' onClick={handleSelectedTool('pen')}/>
        <div className='vertical-line'/>
        <div ref={PaletteRef}>
            
        <img className='toolbar-item' src={colors} alt='colors' onClick={handlePaletteToggle} />
        {showPalette&&(<div className='color-palette'> <CompactPicker color={brushColor} onChange={handleColorChange} /></div>)}
        
        </div>
        <div className='vertical-line'/>
        <img className={selectedTool==='eraser'?('toolbar-item-selected'):('toolbar-item')}  src={eraser} alt='eraser' onClick={handleSelectedTool('eraser')}/>
        <div className='vertical-line'/>
        <img className='toolbar-item' src={undo} alt='undo'  onClick={UndoButton}/>
        <div className='vertical-line'/>
        <img className='toolbar-item' src={redo} alt='redo' onClick={RedoButton}/>
        <div className='vertical-line'/>
        <img className='toolbar-item' src={clear} alt='clear' onClick={clearButton}/>
    </div>
   ) 
}

export default CanvasToolBar;