import { ChangeEvent, useState } from 'react';
import { TextStats } from './TextStats';

export const HW2 = () => {
	const [text, setText] = useState('');
	const [stats, setStats] = useState('hide');

	const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		setText(e.target.value);
	};

	const handleStatChange = (e: ChangeEvent<HTMLInputElement>) => {
		setStats(e.target.value);
	};

	return (
		<>
			<div>
				<label htmlFor='text'>Text</label>
				<textarea
					name='text'
					id='text'
					value={text}
					onChange={handleTextChange}
				/>
			</div>
			<div>
				<label htmlFor='show'>Show stats</label>
				<input
					type='radio'
					name='show'
					id='show'
					value='show'
					checked={stats === 'show'}
					onChange={handleStatChange}
				/>
			</div>
			<div>
				<label htmlFor='hide'>Hidden stats</label>
				<input
					type='radio'
					name='stats'
					id='hide'
					value='hide'
					checked={stats === 'hide'}
					onChange={handleStatChange}
				/>
			</div>
			{stats === 'show' && <TextStats text={text} />}
		</>
	);
};
