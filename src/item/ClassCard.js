import React from 'react';
import mathsIcon from '../assets/mathsIcon.png'
import {useNavigate} from 'react-router-dom'





function ClassCard() {

const navigate = useNavigate();
const handleClick=()=>{
navigate('/room/1')
}

return (
    
<div className="classCard" onClick={handleClick}>
    <div className='classIcon-container'>
        <div className='classIcon-circle'>
            <img className="classIcon" src={mathsIcon} alt="Maths"/>
           
        </div>
    </div>
<div className="classInfoContainer">
   
<h2 className='test'> Maths Grade 11</h2>



    <div className='classMemberName'>
       
    <div className='classMemberIcon-container'><div className='classMemberIcon-circle'></div></div><h4 className='test'>&nbsp;&nbsp; Moremogolo Gaetsewe</h4>
    </div>
    <div className='classMemberName'>
    <div className='classMemberIcon-container'><div className='classMemberIcon-circle'></div></div><h5 className='test'>&nbsp;&nbsp; In Session</h5>
    </div>
    </div>
</div>
)
}
export default ClassCard;