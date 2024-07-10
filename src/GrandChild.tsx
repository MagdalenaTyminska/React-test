import { memo } from 'react';

type GrandChildPRops = {
	elements: number[];
};

export const GrandChild = memo(({ elements }: GrandChildPRops) => {
	console.log('Rendering grandchild');

	return <h3> I am a grandchild! {elements.join(', ')}</h3>;
});

// import { memo } from 'react';

// export const GrandChild = memo(() => {
// 	console.log('Rendering grandchild');

// 	return <h3> I am a grandchild!</h3>;
// });
