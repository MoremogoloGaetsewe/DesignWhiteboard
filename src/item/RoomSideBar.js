import React from 'react'
import logo from '../assets/Logo.png'

import classIcon from '../assets/classes.svg'
import studentsIcon from '../assets/students.svg'
import logoutIcon from '../assets/logout.png'
import GroupStudentsIcon from '../assets/students.png'
import addStudentIcon from '../assets/addStudents.png'
import messagesIcon from '../assets/chat.png'
import { Link, useLocation } from 'react-router-dom'



function RoomSideBar(){


    const location = useLocation();
    return (


  <div className ='room-side-bar'>
  <h3 className='room-side-bar-info'>Room: Maths Grade 11</h3>
  <div className='sidebar-elements'>
  
            <Link
                to="/room/5454"
                className={location.pathname === '/rooms' ? 'side-bar-link-selected' : 'side-bar-link'}
                style={{ textDecoration: 'none', color: 'black' }} >
                <img src={addStudentIcon} alt="addStudent"/><p className="sidebar-text">Add Student</p>
              </Link>
              <div className='blocked'>
              <Link
                    to="/room/5454"
                    className={location.pathname === '/students' ? 'side-bar-link-selected' : 'side-bar-link'}
                    style={{ textDecoration: 'none', color: 'black' }}>
                  <img src={ GroupStudentsIcon} alt="participants"/><p className="sidebar-text">manage students</p>
                </Link>
                </div>
  
                <div className='blocked'>
            
                <Link
                    to="/room/5454"
                    className={location.pathname === '/students' ? 'side-bar-link-selected' : 'side-bar-link'}
                    style={{ textDecoration: 'none', color: 'black' }}>
                  <img src={messagesIcon } alt="logout"/><p className="sidebar-text">Messages</p>
                </Link>
                </div>
                <Link
                to="/rooms"
                className={location.pathname === '/rooms' ? 'side-bar-link-selected' : 'side-bar-link'}
                style={{ textDecoration: 'none', color: 'black' }} >
                <img src={logoutIcon} alt="classes"/><p className="sidebar-text">Leave Room</p>
              </Link>
  </div>
  </div>
    )
}
export default RoomSideBar;