import { io } from 'socket.io-client'
export const  createSocket = (token)=>{
  //console.log(token)
    return io('http://172.20.10.7:5001', {
        transports: ['websocket'], query:{token}
        
      });
}

