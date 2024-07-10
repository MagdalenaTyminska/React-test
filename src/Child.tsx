import { GrandChild } from './GrandChild';
import { memo } from 'react';

export const Child = memo(() => {
	console.log('Rendering child');

	return (
		<>
			<h2>I am a child!</h2>
			<GrandChild />
		</>
	);
});
