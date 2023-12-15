import Account from '../../Components/Account';
import accountsPlaceHolder from '../../data/accountsPlaceHolder';
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
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
	const [newUserName, setNewUserName] = useState('')
	const dispatch = useDispatch()

	const handleUserNameChange = (event) => {
		setUserName(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		dispatch(putEditUser(newUserName))
		setEditName(false)
		setNewUserName()
	};

	const handleCancel = () => {
		setEditName(false)
		setUserName(user.userName)
	};

	if (user === undefined) {
		return navigate("/");
	}


	return (
		<main className="main bg-dark">
			<div className="header">
				<h1>
					Welcome back
					<br />
					{firstName} {lastName}
				</h1>
				{editName ? (
					 <form onSubmit={handleSubmit}>
					 <Input
					   label="User Name"
					   type="text"
					   name="username"
					   value={userName}
					   onChange={handleUserNameChange}
					 />
					 <Input
					   label="First Name"
					   type="text"
					   name="firstname"
					   value={firstName}
					   readOnly
					 />
					 <Input
					   label="Last Name"
					   type="text"
					   name="lastname"
					   value={lastName}
					   readOnly
					 />
					 <button type="submit">Save</button>
					 <button type="button" onClick={handleCancel}>Cancel</button>
				   </form>
				) : (
					<button
					className="edit-button"
					onClick={() => {
						setEditName(true)
					}}
					> Edit Name
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