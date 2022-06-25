import React from 'react';

function CreateUser({ username, email, onChange, onCreate }) {
	// input 2개를 구현하세요 >>
	// 클릭하면 onCreate가 실행되는 버튼을 구현하세요 >>
	return (
		<div>
			<input
				name="username"
				placeholder="이름"
				onChange={onChange}
				value={username}
			/>
			<input
				name="email"
				placeholder="이메일"
				onChange={onChange}
				value={email}
			/>
			<button onClick={onCreate}>등록</button>
		</div>
	);
}

export default CreateUser;
