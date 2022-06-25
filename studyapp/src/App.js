import React, { useRef, useState } from 'react';
import UserList from './components/UserList';
import CreateUser from './components/CreateUser';

function App() {
	//새롭게 들어온 input 관리
	const [inputs, setInputs] = useState({
		username: '',
		email: '',
	});

	// 구조분해할당
	const { username, email } = inputs;

	// input onChange 함수
	const onChange = e => {
		//구조분해할당
		const { name, value } = e.target;

		//input 수정
		setInputs({
			...inputs,
			[name]: value,
		});
	};

	// users 배열
	const [users, setUsers] = useState([
		{
			id: 1,
			username: 'velopert',
			email: 'public.velopert@gmail.com',
		},
		{
			id: 2,
			username: 'tester',
			email: 'tester@example.com',
		},
		{
			id: 3,
			username: 'liz',
			email: 'liz@example.com',
		},
	]);

	// 유저 id
	const nextId = useRef(4);

	const onCreate = () => {
		// 나중에 구현 할 배열에 항목 추가하는 로직
		// ...

		setInputs({
			username: '',
			email: '',
		});

		nextId.current += 1;
	};
	return (
		<>
			<CreateUser
				username={username}
				email={email}
				onChange={onChange}
				onCreate={onCreate}
			/>
			<UserList users={users} />
		</>
	);
}

export default App;
