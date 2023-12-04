// ExpenseForm.js
import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import {app , firestore} from '../config/firebase_config.js'; // Adjust the path as needed

const ExpenseForm = () => {
  const [expense, setExpense] = useState({
    description: '',
    amount: '',
  });

  const handleInputChange = (e) => {
    setExpense({
      ...expense,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate input (you can add more validation as needed)

    // Add expense to Firebase
    try {
      await firestore.collection('expenses').add(expense);
      console.log('Expense added successfully!');
    } catch (error) {
      console.error('Error adding expense:', error);
    }

    // Clear the form
    setExpense({
      description: '',
      amount: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Description:
        <input
          type="text"
          name="description"
          value={expense.description}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Amount:
        <input
          type="number"
          name="amount"
          value={expense.amount}
          onChange={handleInputChange}
        />
      </label>
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
