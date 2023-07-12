import React, {useRef, useEffect, useState, useContext} from 'react';




import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import {app} from './firebaseConfig'




const Login = ({user,loading, socket }) => {
    //const { user, loading, socket } = useContext(FirebaseContext)
const [serverOnline, setServerOnline] = useState(true);
const [token, setToken]=useState('');


const auth = getAuth(app);
const [roomName, setRoomName]=useState('');
const [rooms, setRooms]= useState([]);
const [baby, setBaby]=useState(false)


useEffect(()=>{

setToken(localStorage.getItem('token'))


})
const handleLogin=async()=>{
  try{
    const userCredential =await signInWithEmailAndPassword(auth,'Moremogologaetsewe@gmail.com', '199096');
  const user = userCredential.user;
 
  const token = await user.getIdToken();
  setToken(token);
  const expirationTime = new Date().getTime() + (60 * 60 * 1000);
  localStorage.setItem('token', token);
  localStorage.setItem('tokenExpiration', expirationTime);
  // Login successful
  console.log('Login successful');
} catch(error) {
  // Handle error
  console.error('Login error:', error);
}

    
}

const handleCreateRoom = () => {
  if(socket && roomName){
    socket.emit('JoinRoom', roomName)
    setRooms((prevRooms) => [...prevRooms, roomName])
    setRoomName('')
  }

}



return (
  <div className='login'>

  
   
      <button onClick={handleLogin}>Login</button>
   
  
{user?(<div><h1>signed in</h1></div>):(<div><h1>Signedout</h1></div>)}
    
  </div>
);
};

export default Login;
