const postData = async (url, data) => { //с помощью слова async мы говорим что внутри будет какой то ассинхронный код
	const res = await fetch(url, { // эти операторы всегда используются в паре
		method: 'POST', //с помощью await js дожидается запроса
		headers: {
			'Content-type': 'application/json'
		},
		body: data
	});

	return await res.json();
};

const getResource = async (url) => {
	const res = await fetch(url);

	if (!res.ok) {
		throw new Error(`Couldn't fetch ${url}, status: ${res.status}`);
	}

	return await res.json();
};

export {
	postData
};
export {
	getResource
};