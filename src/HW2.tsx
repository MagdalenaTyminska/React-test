export const HW1 = () => {
	return (
		<>
			<form>
				<div>
					<label htmlFor='login'>Login</label>
					<input type='text' name='login' id='login' />
				</div>
				<div>
					<label htmlFor='password'>Password</label>
					<input type='password' name='password' id='password' />
				</div>
				<div>
					<label htmlFor='rulesAccepted'>Accept the rules</label>
					<input type='checkbox' name='rulesAccepted' id='rulesAccepted' />
				</div>
				<button>Sumbit</button>
			</form>
		</>
	);
};
