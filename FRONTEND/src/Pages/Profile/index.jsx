import Account from '../../Components/Account';
import accountsPlaceHolder from '../../data/accountsPlaceHolder';
import { useSelector } from 'react-redux'

function Profile() {

	const accounts = accountsPlaceHolder
	const selectUser = (state) => state.user.user.body
	const user = useSelector(selectUser)
	const firstName = user.firstName
	const lastName = user.lastName


	return (
		<main className="main bg-dark">
			<div className="header">
				<h1>
					Welcome back
					<br />
					{firstName} {lastName}
				</h1>
				<button className="edit-button">Edit Name</button>
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