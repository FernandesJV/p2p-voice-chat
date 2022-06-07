import {useParams} from "react-router-dom";
import React, {useContext} from "react";
import { Peer } from 'peerjs';
import infoContext from "../myInfo";

function Room(){
    let { roomId } = useParams();
    let users = []
    let myPeer = new Peer()
    users.push({username:"","peer":myPeer})
    const myInfo = useContext(infoContext);
    console.log(myInfo.userName)
    return(
        <div>
            <a>{roomId}</a>
        </div>
    )
}

export default Room