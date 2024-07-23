import { useEffect } from 'react';
import { useApi } from './hooks/useApi';

export type Entity = {
	id: string;
	prop1: string;
	prop2: number;
};

export const List = () => {
	const { get, data, loading, error } = useApi<Entity[]>();

	useEffect(() => {
		get('collection1');
	}, [get]);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>{error}</p>;
	if (!data) return null;

	return (
		<ul>
			{data.map((datum) => (
				<li key={datum.id}>
					{datum.prop1}
					{datum.prop2}
				</li>
			))}
		</ul>
	);
};
