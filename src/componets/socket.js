import { io } from 'socket.io-client'
export const  createSocket = (token)=>{
  //console.log(token)
    return io('http://localhost:5001', {
        transports: ['websocket'], query:{token}
        
      });
}

