import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getToken } from '../../Redux/Actions/token';
import { getUser } from '../../Redux/Actions/user';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [error, setError] = useState('');
    const token = useSelector(selectToken);
    const dispatch = useDispatch();
    const navigate = useNavigate();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setError('');
  
      try {
        rememberMe ? localStorage.setItem('email', email) : localStorage.removeItem('email');
        console.log('Email:', email);
        console.log('Password:', password);
        await dispatch(getToken(email, password)); 
  
        if (token) {
          login(token);
        }
      } catch (error) {
        console.error('Error during login:', error);
        setError('Your email or password is invalid');
      }
    };
  
    const login = (token) => {
      dispatch(getUser(token));
      navigate('/user');
    };
  
    const handleRememberMe = () => {
      setRememberMe(!rememberMe);
    };
  
    return (
        <main className="main bg-dark">
            <div className="sign-in-wrapper">
                <section className="sign-in-content">
                    <h1>Sign In</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="input-wrapper">
                            <label htmlFor="email">Email</label>
                            <input
                            type="text"
                            id="email"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                            />
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="password">Password</label>
                            <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                            />
                        </div>
                        <div className="input-remember">
                            <input type="checkbox" id="remember-me" onChange={handleRememberMe} />
                            <label htmlFor="remember-me">Remember me</label>
                        </div>
                        <button type="submit" className="sign-in-button">
                            Sign In
                        </button>
                        {error && <p className="error-message">{error}</p>}
                    </form>
                </section>
            </div>
        </main>
    );
  }

const selectToken = (state) => state.token.token

export default Login;