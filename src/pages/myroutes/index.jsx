import {Route, Routes} from "react-router-dom";
import React from "react";
import Index from "../index";
import Room from "../room";

function MyRoutes() {

    return (
        <div>
            <Routes>
                <Route path="" element={<Index />}></Route>
                <Route path="/room/:roomId" element={<Room />}></Route>
            </Routes>
        </div>
    )
}

export default MyRoutes