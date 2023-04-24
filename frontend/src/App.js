import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Register from "./pages/register/Register";
import Login from './pages/login/Login';
import Main from './pages/Main/Main'

function App() {
	const user = localStorage.getItem("token");

	return (
		<Routes>
			{user && <Route path="/" exact element={<Main />} />}
			<Route path="/register" exact element={<Register />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/" element={<Navigate replace to="/login" />} />
		</Routes>
	);
}

export default App;