import React, {useContext, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {v4} from "uuid";
import infoContext from "../myInfo";
import { Peer } from 'peerjs';

function Index(){
    const [roomId, setRoomId] = useState('')
    let roomIdRef = React.createRef()
    let usernameRef = React.createRef()
    let navigate = useNavigate()

    let myInfo = useContext(infoContext)

    let myPeer = new Peer() //Creating peer for communication
    myInfo.myPeer = myPeer //Updating peer information on context

    const routeChange = (e) =>{
        let path = e;
        navigate(path);
    }


    useEffect(()=>{
        roomId != '' ? routeChange(`/room/${roomId}`) : ''
    },
    [roomId])



    return (
        <div>
            <div>
                <label>Username:</label>
                <input type={'text'} ref={usernameRef}/>
            </div>
            <div>
                <label>Room Id:</label>
                <input type={'text'} ref={roomIdRef}/>
            </div>
            <div>
                <button onClick={() => {
                    myInfo.userName = usernameRef.current.value;
                    createRoom(roomId,setRoomId,myInfo.webSocket,myInfo.myPeer,usernameRef.current.value)
                }}>Create Room</button>

                <button onClick={() => {
                    setRoomId(roomIdRef.current.value)
                }}>Join Room</button>
            </div>
        </div>
    )
}

function createRoom(roomId,setRoomId,socket,peer,username){
    let newRoomId = v4()
    setRoomId(newRoomId)
    socket.send(JSON.stringify({event:'newRoom',data:{roomId:newRoomId,user:{id:peer.id,peer:peer,username:username}}}))
}

export default Index