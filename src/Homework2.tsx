import { useRef } from 'react';
import { Form, PartialHTMLFormElement } from './Form';

export const Homework2 = () => {
	const formRef = useRef<PartialHTMLFormElement>(null);

	const handleClick = () => {
		// formRef.current?.subbmit(); nie działa, omija metodę handleSubmit - do submit przypisano requestsubmit
		formRef.current?.submit();
	};

	return (
		<>
			<button onClick={handleClick}>Send form</button>
			<Form ref={formRef} />
		</>
	);
};
