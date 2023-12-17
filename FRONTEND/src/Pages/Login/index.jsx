import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadToken } from '../../Redux/Actions/token';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const tokenTrue = useSelector((state) => state.token.tokenTrue)
    const [hasSubmitted, setHasSubmitted] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();


    const handleSubmit = async (e) => {
      e.preventDefault();
      setHasSubmitted(true);
      rememberMe ? localStorage.setItem('email', email) : localStorage.removeItem('email');
      await dispatch(loadToken(email, password, navigate)); 
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
                        {hasSubmitted && tokenTrue === false && (
                            <p className='error-message'>Email or password invalid</p>
                        )}
                        <button type="submit" className="sign-in-button">
                            Sign In
                        </button>
                    </form>
                </section>
            </div>
        </main>
    );
}



export default Login;