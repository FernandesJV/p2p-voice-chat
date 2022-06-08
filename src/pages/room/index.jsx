import {useParams} from "react-router-dom";
import React, {createRef, useContext, useEffect, useState} from "react";
import { Peer } from 'peerjs';
import infoContext from "../myInfo";
import UserCard from "../../components/userCard";

function Room(){

    let { roomId } = useParams(); //Fetching roomID
    let myPeer = new Peer() //Creating peer for communication
    const myInfo = useContext(infoContext); //Fetching context for information
    const usersDiv = createRef() //Creating reference for div containing users

    myInfo.myPeer = myPeer //Updating peer information on context

    //Room users array with self as first user
    const [users, setUsers] = useState([{username:myInfo.userName,"peer":myPeer}])

    const socket = myInfo.webSocket //Getting access to the socket in this scope

    //Render users new client connects


    return(
        <div>
            <a>{roomId}</a>
            <div>
                {users.map((user)=>{
                    return(
                        <UserCard username={user.username}/>
                )
                })}
            </div>
        </div>
    )
}


export default Room