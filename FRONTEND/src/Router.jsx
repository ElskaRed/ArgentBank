import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { Provider } from 'react-redux';
import store from './Redux/Store';

function Router() {
	return (
		<Provider store={store}>
			<React.StrictMode>
				<BrowserRouter>
					<Header />
					<Routes>
						<Route exact path="/" element={<Home />} />
						<Route exact path="/login" element={<Login />} />
						<Route exact path="/user" element={<Profile />} />
					</Routes>
					<Footer />
				</BrowserRouter>
			</React.StrictMode>
		</Provider>
	);
}

export default Router;