import React, {createContext, useEffect, useState, useRef} from 'react';
import {getAuth,setPersistence, browserSessionPersistence, onAuthStateChanged} from 'firebase/auth' 
import {app} from './firebaseConfig'
import {createSocket} from './socket';


export const FirebaseContext = createContext();

export const FirebaseProvider=({children})=>{
    const [user, setUser]= useState(null);
    const [loading, setLoading] = useState(true)
    const [socket, setSocket] = useState(null)
    const socketCreated = useRef(false);
    
    useEffect(()=>{
        console.log('yes')
        const auth = getAuth(app)


        setPersistence(auth, browserSessionPersistence)
        .then(()=>{
            setLoading(false)
        })
        .catch((error)=>{
            console.error('Error enabling session persistence:',error)
            setLoading(false)
        })
        
        const unsubscribe = onAuthStateChanged(auth, async (user)=>{
            
            
            if(user)
            {    
            

                
            const storedExpiration = localStorage.getItem('tokenExpiration');
            
            const currentTime = new Date().getTime()
            console.log(storedExpiration)
            console.log(currentTime)
                const n = await user.getIdToken()
            if(socketCreated.current===false)
            {
                
                const sockets = createSocket(n)
            setSocket(sockets)
                socketCreated.current=true
                
            }
                setUser(user)
            }
            else{
                
                setUser(null)
            }
        });
        return ()=>{
            if (unsubscribe) {
                unsubscribe();
              }
              console.log('hereboy')
        }
    },[]);

    return (
        <FirebaseContext.Provider value={{user, loading, socket}}>
            {children}
        </FirebaseContext.Provider>
    )
}