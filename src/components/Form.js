import React, { useState } from 'react';
import Result from './Result';

const Form = () => {
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('');

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleCurrencyChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <main className="form-container d-flex justify-content-center gap-2">
      {/* ... */}
      {/* Reszta kodu z Form.js */}
      {/* ... */}
      <Result amount={amount} currency={currency} />
    </main>
  );
};

export default Form;