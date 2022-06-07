import React, {useContext, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {v4} from "uuid";
import infoContext from "../myInfo";

function Index(){
    const [roomId, setRoomId] = useState('')
    let roomIdRef = React.createRef()
    let usernameRef = React.createRef()
    let navigate = useNavigate()

    const myInfo = useContext(infoContext)
    const routeChange = (e) =>{
        let path = e;
        myInfo.userName = usernameRef.current.value;
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
                    setRoomId(v4())
                }}>Create Room</button>

                <button onClick={() => {
                    setRoomId(roomIdRef.current.value)
                }}>Join Room</button>
            </div>
        </div>
    )
}

export default Index