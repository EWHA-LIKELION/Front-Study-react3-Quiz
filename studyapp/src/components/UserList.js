import React from 'react';

function UserList({ users }) {
	// map을 사용해 User 컴포넌트를 렌더링하세요 >>
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
