import React from  'react'


function Participant({micControl}){
    
    

    return (<div className='Participant-container'> <div className='classMemberIcon-container'><div className='classMemberIcon-circle'></div></div><p className='test'>&nbsp; Moremogolo Gaetsewe&nbsp; </p><div className='classMemberIcon-container'><div className='classMemberIcon-circle' onClick={micControl}></div></div></div>)
}

export default Participant;