import { useRef } from 'react';
import { Form2 } from './Form2';

export const Homework2b = () => {
	const formRef = useRef<HTMLFormElement>(null);

	const handleClick = () => {
		// formRef.current?.subbmit(); nie działa, omija metodę handleSubmit - do submit przypisano requestsubmit
		formRef.current?.requestSubmit();
	};

	return (
		<>
			<button onClick={handleClick}>Send form</button>
			<Form2 formRef={formRef} />
		</>
	);
};
