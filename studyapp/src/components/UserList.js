import React from 'react';

function UserList({ users, onRemove, onToggle }) {
	// map을 사용해 User 컴포넌트를 렌더링하세요 >>
	return (
		<div>
			{users.map(user => (
				<User
					key={user.id}
					user={user}
					onRemove={onRemove}
					onToggle={onToggle}
				/>
			))}
		</div>
	);
}

function User({ user, onRemove, onToggle }) {
	return (
		<div>
			<b
				style={{
					cursor: 'pointer',
					color: user.active ? 'orange' : 'black',
				}}
				onClick={() => onToggle(user.id)}
			>
				{user.username}
			</b>
			<span>({user.email})</span>
			<button onClick={() => onRemove(user.id)}>삭제</button>
		</div>
	);
}

export default UserList;
