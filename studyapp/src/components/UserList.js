import React from 'react';

function UserList({ users, onRemove, onToggle }) {
	// ** 배열 users를 map을 사용해 User 컴포넌트 여러개로 렌더링하세요 >>
	return (
		<div>
			<p>User 컴포넌트를 렌더링하세요</p>
		</div>
	);
}

// 2~3) <b></b> 태그와 <button></button> 태그에 적절한 onClick 함수를 추가하세요 >>
function User({ user, onRemove, onToggle }) {
	return (
		<div>
			<b
				style={{
					cursor: 'pointer',
					color: user.active ? 'orange' : 'black',
				}}
			>
				{user.username}
			</b>
			<span>({user.email})</span>
			<button>삭제</button>
		</div>
	);
}

export default UserList;
