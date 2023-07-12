import bell from './assets/bell.png';
import profilePic from './assets/profile.png'
import logo from './assets/Logo.png'
import classIcon from './assets/classes.svg'
import studentsIcon from './assets/students.svg'
import ClassCard from './item/ClassCard';
import EmptyCard from './item/EmptyCard';
import React, {useRef, useEffect, useState,useContext} from 'react';
import { Link, useLocation,Routes, Route, Navigate  } from 'react-router-dom'
import './App.css';
import Rooms from './componets/Rooms';
import Students from './componets/Students';
import Room from './componets/Room';
import NavBar from './item/NavBar';
import SideBar from './item/SideBar';


import Login from './componets/Login'
import Drawing from './componets/Drawing'
import Loading from './componets/Loading'
import { FirebaseContext } from './componets/FirebaseProvider';





function App() {
  const { user, loading, socket } = useContext(FirebaseContext)
  const [token, setToken]=useState('');
  const [serverOnline, setServerOnline] = useState(true);  

  useEffect(()=>{  

    console.log(user)
    if(socket){
    
     
    
      socket.on('connect', () => {
        setServerOnline(true);
        console.log('Connected to Socket.IO server');
      });
    
      socket.on('disconnect', () => {
        setServerOnline(false);
        console.log('Disconnected from Socket.IO server');
      });
    
     socket.on('loadRoomData', (msg) => {
        
      
      });
    
    }
    
      },[user])

  return (
    <div >
      <header className="App-header">
 <NavBar/>
<div className='container'>

<SideBar/>

<Routes>
      <Route
          path="/"
          element={user?<Navigate to="/rooms" /> :<div className='content'> <Login/></div>}
      />

      <Route
          path="/rooms"
          element={user?<Rooms socket={socket}/> : <Navigate to="/" /> }
      />
      <Route path='/students' element={<Students/>}/>
      <Route
          path="/room/:roomId"
          element={socket?<Room socket={socket}/> : <Loading/>}
      />
  </Routes>


</div>


      </header>
    </div>
  );
}

export default App;
