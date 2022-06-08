import {useParams} from "react-router-dom";
import React, {createRef, useContext, useEffect, useState} from "react";
import infoContext from "../myInfo";
import UserCard from "../../components/userCard";

function Room(){

    let { roomId } = useParams(); //Fetching roomID

    let myInfo = useContext(infoContext); //Fetching context for information


    const socket = myInfo.webSocket //Getting access to the socket in this scope
    const myPeer = myInfo.myPeer //Getting access to the peer in this scope

    //Room users array with self as first user
    const [users, setUsers] = useState([{username:myInfo.userName,"peer":myPeer}])



    //Render users new client connects


    return(
        <div>
            <a>{roomId}</a>
            <div>
                {users.map((user,index)=>{
                    return(
                        <UserCard key={myInfo.myPeer.id} username={user.username}/>
                )
                })}
            </div>
        </div>
    )
}


export default Room