import { FormEvent, MutableRefObject } from 'react';

export type Props = {
	formRef: MutableRefObject<HTMLFormElement | null>;
};

export const Form2 = ({ formRef }: Props) => {
	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const formData = new FormData(e.currentTarget);
		const loginValue = formData.get('login');
		const passwordValue = formData.get('password');
		console.log(
			`Form is being sent: login: ${loginValue} and password: ${passwordValue}`,
		);
	};

	return (
		<form onSubmit={handleSubmit} ref={formRef}>
			<input type='text' name='login' />
			<input type='password' name='password' />
		</form>
	);
};
