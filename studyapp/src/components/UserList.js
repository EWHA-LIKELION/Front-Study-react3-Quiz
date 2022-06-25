import React from 'react';

function UserList({ users }) {
	console.log(users);
	return (
		<div>
			{users.map(user => (
				<User key={user.id} user={user} />
			))}
		</div>
	);
}

function User({ user }) {
	return (
		<div>
			<b>{user.username}</b> <span>({user.email})</span>
		</div>
	);
}

export default UserList;
