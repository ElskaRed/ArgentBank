import Account from '../../Components/Account';

function Profile() {
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
			{/* Pas encore de props passés sur les Account car login non implémenté. */}
			<Account />
			<Account />
			<Account />
		</main>
	);
}

export default Profile;