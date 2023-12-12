import { NavLink, Link, useNavigate } from "react-router-dom";
import logo from '../../assets/argentBankLogo.webp';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from "../../Redux/Actions/token";

const Header = () => {
	const selectToken = (state) => state.token.token;
	const token = useSelector(selectToken);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const logout = () => {
		dispatch(logoutUser());
		navigate('/');
	  };
	
    return (
        <nav className="main-nav">
			<Link className="main-nav-logo" to="/">
				<img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo" />
				<h1 className="sr-only">Argent Bank</h1>
			</Link>
			<div>
				{token ? (
					<button type="button" onClick={logout} className="logout">
						Logout
					</button>
				) : (
					<NavLink className="main-nav-link" to="/login">
						<i className="fa fa-user-circle"></i>
						Sign In
					</NavLink>
				)}
			</div>
		</nav>
    );
}

export default Header;
