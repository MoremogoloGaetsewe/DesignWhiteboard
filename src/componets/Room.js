import React from 'react'
import PartcipantCard from '../item/PartcipantCard';
import MessagesCard from '../item/MessagesCard';
import CanvasToolBar from '../item/CanvasToolBar';

function Room(){


return (
    <div className="canvas-content">
       <CanvasToolBar/>
        <div className='canvas-container'>
        </div>
        <div className='left-room-container'>
            <PartcipantCard/>
            <MessagesCard/>
        </div>
    </div>
)

}

export default Room;
