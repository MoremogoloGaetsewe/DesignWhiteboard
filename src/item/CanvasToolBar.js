import React,{useState, useEffect} from 'react'
import penIcon from '../assets/pen.png'
import eraser from '../assets/eraser.png'
import undo from '../assets/undo.png'
import redo from  '../assets/redo.png'
import clear from '../assets/clear.png'
import colors from '../assets/colors.png'
import grab from '../assets/grab.png'
function CanvasToolBar( {writeButton,eraseButton, UndoButton,RedoButton}){

    
const [selectedTool, setSelectedTool]=useState('pen')

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
    }

   return (
    <div className='cavas-toolBar'>
        <img className={selectedTool==='grab'?('toolbar-item-selected'):('toolbar-item')} src={grab} alt='grab' onClick={handleSelectedTool('grab')}/>
        <div className='vertical-line'/>
        <img className={selectedTool==='pen'?('toolbar-item-selected'):('toolbar-item')}  src={penIcon} alt='pen' onClick={handleSelectedTool('pen')}/>
        <div className='vertical-line'/>
        <img className='toolbar-item' src={colors} alt='colors'/>
        <div className='vertical-line'/>
        <img className={selectedTool==='eraser'?('toolbar-item-selected'):('toolbar-item')}  src={eraser} alt='eraser' onClick={handleSelectedTool('eraser')}/>
        <div className='vertical-line'/>
        <img className='toolbar-item' src={undo} alt='undo'  onClick={UndoButton}/>
        <div className='vertical-line'/>
        <img className='toolbar-item' src={redo} alt='redo' onClick={RedoButton}/>
        <div className='vertical-line'/>
        <img className='toolbar-item' src={clear} alt='clear'/>
    </div>
   ) 
}

export default CanvasToolBar;