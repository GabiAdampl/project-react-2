import React, { useState } from 'react';
import Result from './Result';

const Form = () => {
	const [amount, setAmount] = useState('');
	const [currency, setCurrency] = useState('');

	const handleAmountChange = event => {
		setAmount(event.target.value);
	};

	const handleCurrencyChange = event => {
		setCurrency(event.target.value);
	};

	return (
		<main className='form-container d-flex justify-content-center gap-2'>
			<label className='d-flex align-items-center gap-2 font-weight-bold' htmlFor='amountInput'>
				Kwota:
				<input
					type='number'
					id='amountInput'
					defaultValue={amount}
					onChange={handleAmountChange}
					required
					min='0.01'
					step='0.01'
				/>
			</label>

			<label className='d-flex align-items-center gap-2 font-weight-bold' htmlFor='currencySelect'>
				Waluta:
				<select id='currencySelect' defaultValue={currency} onChange={handleCurrencyChange} required>
					<option defaultValue='' disabled selected>
						Wybierz walutę
					</option>
					<option defaultValue='EUR'>EUR</option>
					<option defaultValue='USD'>USD</option>
					<option defaultValue='CHF'>CHF</option>
				</select>
			</label>

			<Result amount={amount} currency={currency} />
		</main>
	);
};

export default Form;
