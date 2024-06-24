type FieldErrorsProps = {
	errors: string[];
};

export const FieldErrors = ({ errors }: FieldErrorsProps) => {
	if (errors.length === 0) return null;
	return (
		<ul>
			{errors.map((error, index) => (
				<li key={index}>{error}</li>
			))}
		</ul>
	);
};
