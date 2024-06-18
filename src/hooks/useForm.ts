import { ChangeEvent, useState } from 'react';

type FormChangeEvent = ChangeEvent<
	HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
>;

type useFormReturn<T> = [T, (e: FormChangeEvent) => void];

const isCheckboxElement = (
	target: FormChangeEvent['target'],
): target is HTMLInputElement => {
	return target.type === 'checkbox' && target instanceof HTMLInputElement;
};

export const useForm = <T>(initalValues: T): useFormReturn<T> => {
	const [formState, setFormState] = useState<T>(initalValues);

	const getValue = (target: FormChangeEvent['target']) => {
		if (target.type === 'checkbox' && isCheckboxElement(target)) {
			return target.checked;
		}
		return target.value;
	};

	const handleChange = (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
	) => {
		setFormState((prevState) => ({
			...prevState,
			[e.target.name]: getValue(e.target),

			// setFormState((prevState) => ({
			// ...prevState,
			// [e.target.name]:
			// 	e.target.type === 'checkbox'
			// 		? (e.target as HTMLInputElement).checked // - bez metody isCheckboxElement
			// : e.target.value,
		})); //computed properties - []- dynamiczne ustawienie właściwości
	};

	return [formState, handleChange];
};
