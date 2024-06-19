import { FormEvent, useState } from 'react';
import { useForm } from './hooks/useForm';
import { Field } from './Field';
import { Checkbox } from './Checkbox';

type FormValues = {
	login: string;
	password: string;
	rulesAccepted: boolean;
};

type FormErrors = {
	[key in keyof FormValues]: string[];
};

export const HW1 = () => {
	const [form, handleChange] = useForm<FormValues>({
		login: '',
		password: '',
		rulesAccepted: false,
	});

	const { login, password, rulesAccepted } = form;

	const [errors, setErrors] = useState<FormErrors>({
		login: [],
		password: [],
		rulesAccepted: [],
	});

	const [success, setSuccess] = useState(false);

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();

		let isSuccess = true;

		const newErrors: FormErrors = {
			login: [],
			password: [],
			rulesAccepted: [],
		};

		if (!login) {
			newErrors.login.push('This field is require!');
			isSuccess = false;
		}

		if (login.length < 3) {
			newErrors.login.push('Login must be at least 3 characters long!');
			isSuccess = false;
		}

		if (!password) {
			newErrors.password.push('This field is require!');
			isSuccess = false;
		}

		if (password.length < 6) {
			newErrors.password.push('Password must be at least 6 characters long!');
			isSuccess = false;
		}

		const regex = new RegExp(/(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/g);

		if (!regex.test(password)) {
			newErrors.password.push(
				'Password must contain a lowercaase letter, an uppercase letter and special charakter!',
			);
			isSuccess = false;
		}

		if (!rulesAccepted) {
			newErrors.rulesAccepted.push('Acceptance of the regulations is require!');
			isSuccess = false;
		}

		setErrors(newErrors);
		setSuccess(isSuccess);
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				{success && <p>Dziękujemy zostałeś zarejstrowany poprawnie!</p>}
				<Field
					name='login'
					label='Login'
					type='text'
					onChange={handleChange}
					value={login}
					errors={errors.login}
				/>
				<Field
					name='password'
					label='Password'
					type='password'
					onChange={handleChange}
					value={password}
					errors={errors.password}
				/>
				<Checkbox
					name='rulesAccepted'
					label='I accept the rules'
					checked={rulesAccepted}
					onChange={handleChange}
					errors={errors.rulesAccepted}
				/>
				<button type='submit'>Send</button>
			</form>
		</>
	);
};
