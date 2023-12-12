import Account from '../../Components/Account';
import accountsIron from '../../data/accountsIron';
import accountsCaptain from '../../data/accountsCaptain';

function Profile() {
	const userEmail = localStorage.getItem('email');
	let accounts;
	if (userEmail === 'steve@rogers.com') {
		accounts = accountsCaptain;
	} else if (userEmail === 'tony@stark.com') {
		accounts = accountsIron;
	}

	return (
		<main className="main bg-dark">
			<div className="header">
				<h1>
					Welcome back
					<br />
					Tony Jarvis!
				</h1>
				<button className="edit-button">Edit Name</button>
			</div>
			<h2 className="sr-only">Accounts</h2>
			{accounts.map((account, index) => (
				<Account
					key={index}
					title={account.title}
					amount={account.amount}
					description={account.description}
				/>
		))}
		</main>
	);
}

export default Profile;