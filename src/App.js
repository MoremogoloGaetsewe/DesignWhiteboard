import bell from './assets/bell.png';
import profilePic from './assets/profile.png'
import logo from './assets/Logo.png'
import classIcon from './assets/classes.svg'
import studentsIcon from './assets/students.svg'
import ClassCard from './item/ClassCard';
import EmptyCard from './item/EmptyCard';
import React, { useState } from 'react';
import { Link, useLocation,Routes, Route, Navigate  } from 'react-router-dom'
import './App.css';
import Rooms from './componets/Rooms';
import Students from './componets/Students';
import Room from './componets/Room';
import NavBar from './item/NavBar';
import SideBar from './item/SideBar';



function App() {
  const location = useLocation();
  const [user, setUser]=useState(null);

  return (
    <div >
      <header className="App-header">
 <NavBar/>
<div className='container'>

<SideBar/>

<Routes>
      <Route
          path="/"
          element={<div></div>}
      />

      <Route
          path="/rooms"
          element={<Rooms/>}
      />
      <Route path='/students' element={<Students/>}/>
      <Route
          path="/room/:roomId"
          element={<Room/>}
      />
  </Routes>


</div>


      </header>
    </div>
  );
}

export default App;
