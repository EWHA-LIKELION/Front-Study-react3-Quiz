import React, { useRef, useState } from 'react';
import UserList from './components/UserList';
import CreateUser from './components/CreateUser';

function App() {
	//새롭게 들어온 inputs를 관리하는 useState
	const [inputs, setInputs] = useState({
		username: '',
		email: '',
	});

	// 구조분해할당으로 inputs에서 username과 email을 뽑아내기
	const { username, email } = inputs;

	// input onChange 함수
	const onChange = e => {
		// e.target에서 구조분해할당으로 name과 value를 구하세요 >>
		const { name, value } = e.target;

		// 구한 name과 value로 inputs를 수정하세요 >>
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

	// useRef를 사용해 nextId를 선언하세요(기본값은 4부터 시작) >>
	const nextId = useRef(4);

	// 새롭게 들어온 user를 users 배열에 추가하는 함수 onCreate를 구현하시오 >>
	const onCreate = () => {
		// 새롭게 들어온 user 객체를 const로 선언하시오 >>
		const user = {
			id: nextId.current,
			username,
			email,
		};

		// 새로운 user를 추가하세요 (스프레드 문법) >>
		setUsers([...users, user]);
		// concat 버전 : setUsers(users.concat(user));

		// input 창을 비우세요 >>
		setInputs({
			username: '',
			email: '',
		});

		// nextid를 1 증가시키세요 >>
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
