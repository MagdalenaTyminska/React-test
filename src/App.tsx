import { ChangeEvent, useState } from 'react';
import { FormEvent } from 'react';
import './App.scss';

// type FormData = {
// 	login: { value: string };
// };

const App = () => {
	const [login, setLogin] = useState('');
	const [age, setAge] = useState('');
	const [bio, setBio] = useState('');
	const [gender, setGender] = useState('f');
	const [agreement, setAgreement] = useState(false);
	const [contact, setContact] = useState('');

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		//podejście niekontrolowane (odczytywane z formularza)
		// const { login: _login } = e.target as typeof e.target & FormData;
		// console.log(_login.value);

		//podejście kontrolowane (odczytywane ze state'u)
		console.log(`Login: ${login}`);
		console.log(`Age: ${age}`);
		console.log(`Bio: ${bio}`);
		console.log(`Gender: ${gender}`);
		console.log(`Agreement: ${agreement}`);
		console.log(`Contact: ${contact}`);
	};

	const handleLoginChange = (e: ChangeEvent<HTMLInputElement>) => {
		setLogin(e.target.value);
	};

	const handleAgeChange = (e: ChangeEvent<HTMLInputElement>) => {
		setAge(e.target.value);
	};

	const handleBioChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		setBio(e.target.value);
	};

	const handleGenderChange = (e: ChangeEvent<HTMLSelectElement>) => {
		setGender(e.target.value);
	};

	const handleAgreementChange = (e: ChangeEvent<HTMLInputElement>) => {
		setAgreement(e.target.checked);
	};

	const handleContactChange = (e: ChangeEvent<HTMLInputElement>) => {
		setContact(e.target.value);
	};

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<input
					type='text'
					name='login'
					value={login}
					onChange={handleLoginChange}
				/>
				{!login && <p>Login jest wymagany!</p>}
				{login.length < 3 && <p>Login musi mieć minimum 3 znaki</p>}
			</div>
			<div>
				<input
					type='number'
					name='age'
					value={age}
					onChange={handleAgeChange}
				/>
			</div>
			<div>
				<textarea value={bio} onChange={handleBioChange} />
			</div>
			<div>
				<select value={gender} onChange={handleGenderChange}>
					<option value='f'>Female</option>
					<option value='m'>Male</option>
					<option value='o'>Other</option>
				</select>
			</div>
			<div>
				<input
					type='checkbox'
					checked={agreement}
					onChange={handleAgreementChange}
				/>
			</div>
			<div>
				<label>
					<input
						type='radio'
						name='contact'
						value='email'
						checked={contact === 'email'}
						onChange={handleContactChange}
					/>{' '}
					Contact by email
				</label>
				<label>
					<input
						type='radio'
						name='contact'
						value='text'
						checked={contact === 'text'}
						onChange={handleContactChange}
					/>{' '}
					Contact by text
				</label>
				<label>
					<input
						type='radio'
						name='contact'
						value='phone'
						checked={contact === 'phone'}
						onChange={handleContactChange}
					/>{' '}
					Contact by phone
				</label>
			</div>
			<button type='submit'>Save</button>
		</form>
	);
};

export { App };
