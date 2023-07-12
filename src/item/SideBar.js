import React from 'react'
import logo from '../assets/Logo.png'
import classIcon from '../assets/classes.svg'
import studentsIcon from '../assets/students.svg'
import logoutIcon from '../assets/logout.png'
import GroupStudentsIcon from '../assets/students.png'
import addStudentIcon from '../assets/addStudents.png'
import messagesIcon from '../assets/chat.png'
import { Link, useLocation } from 'react-router-dom'



function SideBar(){
    const location = useLocation();

return (

    
    <div>
  {location.pathname.substring(0,5) === '/room'&&location.pathname.charAt(5)==='/'?(

  <div>


    
  </div>)
  
  
  
  
  :
  
  
  
  (<div className='side-bar'> <img className='side-bar-img' src={logo} alt='logo'/>
    <div className='sidebar-elements'>
           <Link
              to="/rooms"
              className={location.pathname === '/rooms' ? 'side-bar-link-selected' : 'side-bar-link'}
              style={{ textDecoration: 'none', color: 'black' }} >
              <img src={classIcon} alt="classes"/><p className="sidebar-text">classes</p>
            </Link>
    
              <Link
                  to="/students"
                  className={location.pathname === '/students' ? 'side-bar-link-selected' : 'side-bar-link'}
                  style={{ textDecoration: 'none', color: 'black' }}>
                <img src={studentsIcon} alt="classes"/><p className="sidebar-text">manage students</p>
              </Link>
             
    </div></div>)}
   
  </div>
)

}

export default SideBar;
