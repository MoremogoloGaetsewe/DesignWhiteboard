import React from 'react'
import ClassCard from '../item/ClassCard';
import EmptyCard from '../item/EmptyCard';
function Rooms(){
    return(
     
<div className='content'>
<form className="search-form">
        <input className="search" type="search" placeholder="Search for Class.." />
      </form>
      <div className="rooms-container">
   
    <EmptyCard/>
    <ClassCard/>
    <ClassCard/>
    <ClassCard/>
    <ClassCard/>
    <ClassCard/>
    <ClassCard/>
    </div>
   
 </div>
    )


}

export default Rooms;