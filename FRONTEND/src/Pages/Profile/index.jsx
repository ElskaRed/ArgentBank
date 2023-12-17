import Account from '../../Components/Account';
import accountsPlaceHolder from '../../data/accountsPlaceHolder';
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Input from '../../Components/Input';
import { putEditUser } from '../../Redux/Actions/user';

function Profile() {

	const accounts = accountsPlaceHolder
	const selectUser = (state) => state.user.user.body
	const user = useSelector(selectUser)
	const firstName = user.firstName
	const lastName = user.lastName
	const [userName, setUserName] = useState(user.userName)
	const navigate = useNavigate
	const [editName, setEditName] = useState(false)
	const dispatch = useDispatch()

	useEffect(() => {
        setUserName(user.userName);
    }, [user.userName]);

	const handleUserNameChange = (event) => {
		setUserName(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		dispatch(putEditUser(userName))
		setEditName(false)
	};

	const handleCancel = () => {
		setEditName(false)
		setUserName(user.userName)
	};

	if (user === undefined) {
		return navigate("/");
	}


	return (
		<main className="main bg-dark main-user">
			<div className="header">
				<h1>
					Welcome back
					<br />
					{firstName} {lastName}
				</h1>
				{editName ? (
					 <form className="edit-wrapper" onSubmit={handleSubmit}>
						<h2 className="edit-title">Edit user info</h2>
						<div className="edit-form-inputs">
							<Input
								label="User Name :"
								type="text"
								name="username"
								value={userName}
								onChange={handleUserNameChange}
							/>
							<Input
								label="First Name :"
								type="text"
								name="firstname"
								value={firstName}
								readOnly
							/>
							<Input
								label="Last Name :"
								type="text"
								name="lastname"
								value={lastName}
								readOnly
							/>
						</div>
						<div className="form-buttons">
							<button type="submit" className="form-button">Save</button>
							<button type="button" className="form-button" onClick={handleCancel}>Cancel</button>
						</div>
				   </form>
				) : (
					<button
						className="edit-button"
						onClick={() => {
							setEditName(true)
						}}
					> 
						Edit Name
					</button>
				)}
			</div>
			<h2 className="sr-only">Accounts</h2>
			{accounts.map((account, index) => (
				<Account
					key={`account-${index}`}
					title={account.title}
					amount={account.amount}
					description={account.description}
				/>
			))}
		</main>
	);
}

export default Profile;