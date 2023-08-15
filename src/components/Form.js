import React, { useState } from 'react';

const Form = () => {
	const [amount, setAmount] = useState('');
	const [currency, setCurrency] = useState('EUR');
	const [result, setResult] = useState('');
	const [errorMessage, setErrorMessage] = useState('');

	const handleAmountChange = event => {
		setAmount(event.target.value);
	};

	const handleCurrencyChange = event => {
		setCurrency(event.target.value);
	};
	const handleFormSubmit = event => {
		event.preventDefault();
		convertToPLN();
	};

	const getExchangeRate = async currency => {
		setErrorMessage('');
		try {
			const url = `https://api.nbp.pl/api/exchangerates/rates/a/${currency}`;
			const response = await fetch(url);
			const data = await response.json();
			return data.rates[0].mid;
		} catch (error) {
			setErrorMessage('Nie udało się pobrać kursu waluty');
		}
	};

	const convertToPLN = async () => {
		setErrorMessage('');
		try {
			const exchangeRate = await getExchangeRate(currency);
			const resultValue = amount * exchangeRate;
			setResult(resultValue.toFixed(2));
		} catch (error) {
			setErrorMessage('Nie udało się przeliczyć. Spróbuj ponownie.');
		}
	};
	return (
		<form onSubmit={handleFormSubmit} className='form-container d-flex justify-content-center gap-2'>
			<label className='d-flex align-items-center gap-2 font-weight-bold' htmlFor='amountInput'>
				Kwota:
				<input
					type='number'
					id='amountInput'
					value={amount}
					onChange={handleAmountChange}
					required
					min='0.01'
					step='0.01'
				/>
			</label>

			<label className='d-flex align-items-center gap-2 font-weight-bold' htmlFor='currencySelect'>
				Waluta:
				<select id='currencySelect' value={currency} onChange={handleCurrencyChange} required>
					<option value='EUR'>EUR</option>
					<option value='USD'>USD</option>
					<option value='CHF'>CHF</option>
				</select>
			</label>

			<button type='submit'>Przelicz</button>
			<p className='d-flex justify-content-center align-items-center'>TO</p>
			<p id='resultOutput'>{result ? `${result} PLN` : ''}</p>

			<p id='error-message' className='error-message'>
				{errorMessage}
			</p>
		</form>
	);
};

export default Form;
