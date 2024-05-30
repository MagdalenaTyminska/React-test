type HighestValueProps = {
	a: number;
	b: number;
	c: number;
};

// export const Third = ({ a, b, c }: HighestValueProps) => {
//   const getHighestValue = (a: number, b: number, c: number) => {
//     let result;
//     if (a >= b && a >= c) {
//       result = a;
//     } else if (b >= a && b >= c) {
//       result = b;
//     } else {
//       result = c;
//     }
//     return result;
//   };

export const Third = ({ a, b, c }: HighestValueProps) => {
	const getHighestValue = (a: number, b: number, c: number) => {
		if (a > b) {
			if (a > c) return a;
			return c;
		} else {
			if (b > c) return b;
			return c;
		}
	};

	return <h1>{getHighestValue(a, b, c)}</h1>;
};
