//React imports
import React, {useEffect, useState} from 'react'
import { BrowserRouter, Route, useParams, Link, Router } from "react-router-dom";

//Importing pages
import './App.css'
import MyRoutes from "./pages/myroutes";
import infoContext from "./pages/myInfo";

//Creating Websocket connection
const socket = new WebSocket("ws://localhost:8009")
const myInfo = {
    "userName":'',
    "myPeer":null,
    "webSocket":socket,
}

socket.addEventListener("open",()=>{
    console.log('Connected')
})

function App() {
    return (
        <infoContext.Provider value={myInfo}>
        <BrowserRouter>

                <MyRoutes />

        </BrowserRouter>
        </infoContext.Provider>
    );
}

export default App
