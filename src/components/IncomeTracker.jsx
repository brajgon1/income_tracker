import React, { useState } from 'react';

export const IncomeTracker = () => {

    const [income, setIncome] = React.useState([]);
    const [formData, setFormData] = React.useState({
        source: '',
        amount: '',
        date: '',
        category: ''
    });

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setIncome([...income, formData]);
        setFormData({
            source: '',
            amount: '',
            date: '',
            category: ''
        });
    }

  return (
    <div>IncomeTracker</div>
  )
}
