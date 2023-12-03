import { Link } from "react-router-dom";
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getToken } from '../../Redux/Actions/token';
import { getUser } from '../../Redux/Actions/user';

function Login() {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [rememberMe, setRememberMe] = useState(false);
    const token = useSelector(selectToken)
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault();
        rememberMe ? localStorage.setItem("userNAme", userName) : localStorage.removeItem("userName");
        dispatch(getToken(userName, password))
        if (token) {
          login(token)
        }
    
      }
    
      const login = (token) => {
        dispatch(getUser(token))
      }

      const handleRememberMe = () => {
		setRememberMe(!rememberMe);
	};

	return (
		<main className="main bg-dark">
            <div className="sign-in-wrapper">
                <section className="sign-in-content">
                    <i className="fa fa-user-circle sign-in-icon"></i>
                    <h1>Sign In</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="input-wrapper">
                            <label for="username">Username</label>
                            <input 
                                type="text" 
                                id="username" 
                                value={userName}
                                onChange={(e) => {
                                    setUserName(e.target.value)
                                  }}
                            />
                        </div>
                        <div className="input-wrapper">
                            <label for="password">Password</label>
                            <input 
                                type="password" 
                                id="password" 
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value)
                                  }}
                            />
                        </div>
                        <div className="input-remember">
                            <input type="checkbox" id="remember-me" onChange={handleRememberMe} />
                            <label for="remember-me">Remember me</label>
                        </div>

                        {/*Placeholder*/}
                        <Link to="/user" className="sign-in-button">
                            {" "}
                            Sign In{" "}
                        </Link>

                        {/*Placeholder*/}
                    </form>
                </section>
            </div>
		</main>
	);
}

const selectToken = (state) => state.token.token

export default Login;