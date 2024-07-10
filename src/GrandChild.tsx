import { memo } from 'react';

export const GrandChild = memo(() => {
	console.log('Rendering grandchild');

	return <h3> I am a grandchild!</h3>;
});
