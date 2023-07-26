import React, { useState } from 'react';

const Result = ({ amount, currency }) => {
	const [result, setResult] = useState('');
	const [errorMessage, setErrorMessage] = useState('');

	const getExchangeRate = async currency => {
		// ...
	};

	const convertToPLN = async () => {
		try {
			const exchangeRate = await getExchangeRate(currency);
			const resultValue = amount * exchangeRate;
			setResult(resultValue.toFixed(2));
			setErrorMessage(''); // Jeśli konwersja przebiegła pomyślnie, usuń komunikat o błędzie
		} catch (error) {
			console.error(error);
			setErrorMessage('Nie udało się przeliczyć. Spróbuj ponownie.'); // Ustaw komunikat o błędzie w przypadku niepowodzenia konwersji
		}
	};

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
