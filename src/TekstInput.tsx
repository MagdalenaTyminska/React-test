import { ChangeEvent, memo } from 'react';

type TekstInputProps = {
	value: string;
	onChange: (value: string) => void;
};

export const TekstInput = memo(({ value, onChange }: TekstInputProps) => {
	console.log('Rendering TextInput', value);
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		onChange(e.target.value);
	};

	return <input type='text' value={value} onChange={handleChange} />;
});
