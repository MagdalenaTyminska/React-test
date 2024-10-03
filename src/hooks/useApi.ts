const API_BASE = import.meta.env.VITE_API_URL;

export const useApi = () => {
	const call = async <R, P = void>(
		url: string,
		method: 'GET' | 'DELETE' | 'POST' | 'PUT',
		body?: P,
	) => {
		const commonData = {
			method,
			headers: { 'Content-Type': 'application/json' },
		};

		const reqData = body
			? {
					...commonData,
					body: JSON.stringify(body),
				}
			: commonData;

		try {
			const response = await fetch(`${API_BASE}${url}`, reqData);

			if (response.ok) {
				const data: R = await response.json();
				return data;
			} else {
				const apiError: string = await response.text();
				throw new Error(apiError);
			}
		} catch (e) {
			throw new Error(`Error`);
		}
	};

	const apiGet = async <R>(url: string) => {
		return await call<R>(url, 'GET');
	};

	const apiDelete = async <R>(url: string) => {
		return await call<R>(url, 'DELETE');
	};

	const apiPut = async <R, P>(url: string, data?: P) => {
		return await call<R, P>(url, 'PUT', data);
	};

	const apiPost = async <R, P>(url: string, data?: P) => {
		return await call<R, P>(url, 'POST', data);
	};

	return { apiGet, apiDelete, apiPost, apiPut };
};
