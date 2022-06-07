//React imports
import React, {useEffect, useState} from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, useParams, useNavigate, Link, Router } from "react-router-dom";

//Importing pages
import './App.css'
import MyRoutes from "./pages/myroutes";
import infoContext from "./pages/myInfo";

const myInfo = {
    "userName":'',
    "myPeer":null
}

const socket = new WebSocket("ws://localhost:8009")

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
