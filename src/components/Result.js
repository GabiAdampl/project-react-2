import React, { useState, useEffect } from 'react';

const Result = ({ amount, currency }) => {
	const [result, setResult] = useState('');
	const [errorMessage, setErrorMessage] = useState('');

	const getExchangeRate = async currency => {
		try {
			const url = `https://api.nbp.pl/api/exchangerates/rates/a/${currency}/?format=json`;
			const response = await fetch(url);
			const data = await response.json();
			return data.rates[0].mid;
		} catch (error) {
			console.error(`Nie udało się pobrać kursu waluty. Błąd: ${error}`);
			throw error;
		}
	};

	const convertToPLN = async () => {
		try {
			const exchangeRate = await getExchangeRate(currency);
			const resultValue = amount * exchangeRate;
			setResult(resultValue.toFixed(2));
			setErrorMessage('');
		} catch (error) {
			console.error(error);
			setErrorMessage('Nie udało się przeliczyć. Spróbuj ponownie.');
		}
	};

	useEffect(() => {
		convertToPLN();
	}, [currency, amount]);
	return (
		<>
			<button id='convertButton' onClick={convertToPLN}>
				Przelicz
			</button>
			<p className='d-flex justify-content-center align-items-center'>TO</p>
			<p id='resultOutput'>{result ? `${result} PLN` : ''}</p>

			{/* Komunikat o błędzie */}
			<p id='error-message' className='error-message'>
				{errorMessage}
			</p>
		</>
	);
};

export default Result;
