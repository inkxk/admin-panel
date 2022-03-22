import React from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./components/pages/home/Home";
import UserList from "./components/pages/userList/UserList";
import "./app.css";

function App() {
    return (
        <div>
            <Topbar />
            <div className="container">
                <Sidebar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/users" element={<UserList />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
