import React, { useState } from "react";

export const IncomeTracker = () => {
  const [income, setIncome] = useState([]);
  const [formData, setFormData] = useState({
    source: "",
    amount: "",
    date: "",
    category: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIncome([...income, formData]);
    setFormData({
      source: "",
      amount: "",
      date: "",
      category: "",
    });
  };

  return (
    <div className="min-h-screen bg-white-500 p-6">
      <h1 className="text-2xl underline font-bold text-center mb-4">
        Income Tracker
      </h1>

      <div className="bg-white-400 text-black p-4 mb-4 w-80 mx-auto">
        Add a new income entry.
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-4 rounded-lg shadow-md max-w-md mx-auto mb-6 mt-4"
      >
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="source">
            Source
          </label>
          <input
            type="text"
            id="source"
            name="source"
            value={formData.source}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g., Salary, Freelance"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="amount">
            Amount
          </label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g., 5000"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="date">
            Date
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="category">
            Category
          </label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select a category</option>
            <option value="business">Business</option>
            <option value="personal">Personal</option>
            <option value="investment">Investment</option>
          </select>
        </div>
      </form>
    </div>
  );
};
