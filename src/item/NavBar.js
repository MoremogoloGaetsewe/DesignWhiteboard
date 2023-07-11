import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import bell from '../assets/bell.png';
import profilePic from '../assets/profile.png'

function NavBar(){

    const location = useLocation();

return (
  <div>
    {location.pathname.substring(0,5) === '/room'&&location.pathname.charAt(5)==='/'?(<div></div>):(  <nav className="navBar">
    <div className="navBar-center">
      {location.pathname === '/classes'?<form class="search-form">
        <input className='search' type="search" placeholder="Search..." />
        </form>:<div></div>}
    
    </div>
    
    <div className="navbar-right">
    <div class="circle-container">
    <div class="circle"><img src={bell} alt='bell'/></div>
        <div class="circle"><img src={profilePic} alt='profile'/></div>
        </div>
       
      </div>
    </nav>)}
  
    </div>
)

}

export default NavBar;
