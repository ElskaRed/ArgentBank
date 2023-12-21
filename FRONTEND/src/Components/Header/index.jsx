import { NavLink, Link, useNavigate } from "react-router-dom";
import logo from '../../assets/argentBankLogo.webp';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from "../../Redux/Actions/user";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket, faCircleUser } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
	const selectToken = (state) => state.token.token;
	const token = useSelector(selectToken);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const selectUser = (state) => state.user.user.body
	const user = useSelector(selectUser)
	const firstName = user?.firstName || 'Profile'

	const logoutUser = () => {
		dispatch(logout());
		navigate('/');
	  };
	
    return (
        <nav className="main-nav">
			<Link className="main-nav-logo" to="/">
				<img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo" />
			</Link>
			<div>
				{token ? (
					<div className="plustard2">
						<Link className="main-nav-link profil" to="/user">
							<FontAwesomeIcon className="in-icon" icon={faCircleUser} style={{color: "#2c3e50",}} />
							{firstName}
						</Link>
						<button type="button" onClick={logoutUser} className="logout main-nav-link">
							<FontAwesomeIcon className="out-icon" icon={faRightFromBracket} style={{color: "#2c3e50",}} />
							Sign out
						</button>
					</div>
				) : (
					<NavLink className="main-nav-link" to="/login">
						<FontAwesomeIcon className="in-icon" icon={faCircleUser} style={{color: "#2c3e50",}} />
						Sign In
					</NavLink>
				)}
			</div>
		</nav>
    );
}

export default Header;
