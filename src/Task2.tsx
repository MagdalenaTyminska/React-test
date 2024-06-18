import { useEffect, useState } from 'react';
import { useForm } from './hooks/useForm';

type FormValues = {
	wheels: number;
	cabrio: boolean;
	twinExhaust: boolean;
	electricWindows: boolean;
	paint: string;
};

export const Task2 = () => {
	const [cost, setCost] = useState(0);
	const [form, handleChange] = useForm<FormValues>({
		wheels: 4,
		cabrio: false,
		twinExhaust: false,
		electricWindows: true,
		paint: '',
	});

	const getCost = ({
		wheels,
		cabrio,
		twinExhaust,
		electricWindows,
		paint,
	}: FormValues) => {
		let amount = 0;
		amount += wheels * 150;
		amount += cabrio ? 1000 : 0;
		amount += twinExhaust ? 3000 : 0;
		amount += electricWindows ? 0 : 5000;

		switch (paint) {
			case 'pear': {
				amount += 100;
				break;
			}
			case 'metallic': {
				amount += 100;
				break;
			}
			case 'mat': {
				amount += 100;
				break;
			}
			default:
				break;
		}

		return amount;
	};

	useEffect(() => {
		setCost(getCost(form));
	}, [form]);

	return (
		<>
			<p>Total cost: {cost}</p>
			<form>
				<div>
					<label htmlFor='wheels'>Wheels</label>
					<input
						type='number'
						name='wheels'
						id='wheels'
						value={form.wheels}
						onChange={handleChange}
					/>
				</div>
				<div>
					<label htmlFor='cabrio'>Cabrio</label>
					<input
						type='checkbox'
						name='cabrio'
						id='cabrio'
						checked={form.cabrio}
						onChange={handleChange}
					/>
				</div>
				<div>
					<label htmlFor='twinExhaust'>Twin exhaust</label>
					<input
						type='checkbox'
						name='twinExhaust'
						id='twinExhaust'
						checked={form.twinExhaust}
						onChange={handleChange}
					/>
				</div>
				<div>
					<label htmlFor='electricWindows'>Electric windows</label>
					<input
						type='checkbox'
						name='electricWindows'
						id='electricWindows'
						checked={form.electricWindows}
						onChange={handleChange}
					/>
				</div>
				<div>
					<label htmlFor='paint'>Paint</label>
					<select
						id='paint'
						name='paint'
						value={form.paint}
						onChange={handleChange}
					>
						{!form.paint && <option value=''>Choose a paint</option>}
						<option value='pear'>Pearl</option>
						<option value='metallic'>Metallic</option>
						<option value='mat'>Mat</option>
					</select>
				</div>
			</form>
		</>
	);
};
