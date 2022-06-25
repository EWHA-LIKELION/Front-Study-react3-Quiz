import React from 'react';

function UserList({ users, onRemove }) {
	// map을 사용해 User 컴포넌트를 렌더링하세요 >>
	return (
		<div>
			{users.map(user => (
				<User key={user.id} user={user} onRemove={onRemove} />
			))}
		</div>
	);
}

function User({ user, onRemove }) {
	return (
		<div>
			<b>{user.username}</b> <span>({user.email})</span>
			<button onClick={() => onRemove(user.id)}>삭제</button>
		</div>
	);
}

export default UserList;
