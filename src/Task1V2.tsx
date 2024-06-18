import { useEffect, useState } from 'react';
import { useInput } from './hooks/useInput';

export const Task1V2 = () => {
	const selectInput = useInput('');
	const [value, setValue] = useState('');

	useEffect(() => {
		setValue(selectInput.value);
	}, [selectInput]);

	return (
		<>
			<select {...selectInput}>
				{!selectInput.value && <option value=''>Select an option</option>}
				<option value='First'>First</option>
				<option value='Second'>Second</option>
				<option value='Third'>Third</option>
			</select>
			<input type='text' name='value' value={value} readOnly />
		</>
	);
};
