import { FormEvent } from 'react';
import { useForm } from './hooks/useForm';

type FormValues = {
	login: string;
	password: string;
	age: string;
	bio: string;
	gender: string;
	agreement: boolean;
	contact: string;
};

export const Form2 = () => {
	const [formState, handleChange] = useForm<FormValues>({
		login: '',
		password: '',
		age: '',
		bio: '',
		gender: 'f',
		agreement: false,
		contact: '',
	});

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const { login, password, age, bio, gender, agreement, contact } = formState;
		console.log(`Login: ${login}`);
		console.log(`Password: ${password}`);
		console.log(`Age: ${age}`);
		console.log(`Bio: ${bio}`);
		console.log(`Gender: ${gender}`);
		console.log(`Agreement: ${agreement}`);
		console.log(`Contact: ${contact}`);
	};

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<input
					type='text'
					name='login'
					value={formState.login}
					onChange={handleChange}
				/>
				{!formState.login && <p>Login is required!</p>}
				{formState.login.length < 3 && (
					<p>Login must be at least 3 characters long!</p>
				)}
			</div>
			<div>
				<input
					type='password'
					name='password'
					value={formState.password}
					onChange={handleChange}
				/>
				{!formState.password && <p>Password is required!</p>}
				{formState.password.length < 3 && (
					<p>Password must be at least 3 characters long!</p>
				)}
			</div>
			<div>
				<input
					type='number'
					name='age'
					value={formState.age}
					onChange={handleChange}
				/>
			</div>
			<div>
				<textarea name='bio' value={formState.bio} onChange={handleChange} />
			</div>
			<div>
				<select name='gender' value={formState.gender} onChange={handleChange}>
					<option value='f'>Female</option>
					<option value='m'>Male</option>
					<option value='o'>Other</option>
				</select>
			</div>
			<div>
				<input
					type='checkbox'
					name='agreement'
					checked={formState.agreement}
					onChange={handleChange}
				/>
			</div>
			<div>
				<label>
					<input
						type='radio'
						name='contact'
						value='email'
						checked={formState.contact === 'email'}
						onChange={handleChange}
					/>{' '}
					Contact by email
				</label>
				<label>
					<input
						type='radio'
						name='contact'
						value='text'
						checked={formState.contact === 'text'}
						onChange={handleChange}
					/>{' '}
					Contact by text
				</label>
				<label>
					<input
						type='radio'
						name='contact'
						value='phone'
						checked={formState.contact === 'phone'}
						onChange={handleChange}
					/>{' '}
					Contact by phone
				</label>
			</div>
			<button type='submit'>Save</button>
		</form>
	);
};
