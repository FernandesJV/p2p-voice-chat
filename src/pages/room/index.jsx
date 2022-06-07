import {useParams} from "react-router-dom";
import React, {useContext, useEffect} from "react";
import { Peer } from 'peerjs';
import infoContext from "../myInfo";

function Room(){
    //Fetching roomID
    let { roomId } = useParams();
    //Room users array
    let users = []
    //Creating peer for communication
    let myPeer = new Peer()
    //Fetching context for information
    const myInfo = useContext(infoContext);
    //Updating peer information on context
    myInfo.myPeer = myPeer
    //Adding self ass user to users array
    users.push({username:myInfo.userName,"peer":myPeer})
    //Getting access to the socket in this scope
    const socket = myInfo.webSocket
    console.log(socket)
    return(
        <div>
            <a>{roomId}</a>
        </div>
    )
}

export default Room