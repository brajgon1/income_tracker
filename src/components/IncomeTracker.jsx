import React, { useState } from "react";
import { ReactComponent as DeleteIcon } from "../assets/delete.svg";

export const IncomeTracker = () => {
  const [rows, setRows] = useState([
    { source: "", amount: "", date: "", category: "" },
  ]);

  const handleChange = (index, e) => {
    const updatedRows = rows.map((row, i) =>
      i === index ? { ...row, [e.target.name]: e.target.value } : row
    );
    setRows(updatedRows);
  };

  const handleAddRow = () => {
    setRows([...rows, { source: "", amount: "", date: "", category: "" }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Income Data:", rows);
    setRows([{ source: "", amount: "", date: "", category: "" }]);
  };

  const handleDeleteRow = (index) => {
    const updatedRows = rows.filter((_, i) => i !== index);
    setRows(updatedRows);
  };

  return (
    <div className="min-h-screen font-poppins bg-gradient-to-r from-frenchGray to-transparent h-32 w-full p-6">
      <h1 className="text-2xl font-poppins font-bold text-center mb-4">
        Income Tracker
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto mb-6 mt-4"
      >
        <table className="table-auto w-full border-collapse border border-gray-200 ">
          <thead>
            <tr className="bg-gray-100 font-poppins">
              <th className="border border-gray-200 p-2">Source</th>
              <th className="border border-gray-200 p-2">Amount</th>
              <th className="border border-gray-200 p-2">Date</th>
              <th className="border border-gray-200 p-2">Category</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i}>
                <td className="border border-gray-300 px-2 py1">
                  <input
                    type="text"
                    name="source"
                    value={row.source}
                    onChange={(e) => handleChange(i, e)}
                    className="w-full px-2 py-1 border rounded"
                    required
                  />
                </td>
                <td className="border border-gray-300 px-2 py1">
                  <input
                    type="number"
                    name="amount"
                    value={row.amount}
                    onChange={(e) => handleChange(i, e)}
                    className="w-full px-2 py-1 border rounded"
                    min="1"
                    required
                  />
                </td>
                <td className="border border-gray-300 px-2 py1">
                  <input
                    type="date"
                    name="date"
                    value={row.date}
                    onChange={(e) => handleChange(i, e)}
                    className="w-full px-2 py-1 border rounded"
                    required
                  />
                </td>
                <td className="border border-gray-300 px-2 py1">
                  <select
                    name="category"
                    value={row.category}
                    onChange={(e) => handleChange(i, e)}
                    className="w-full px-2 py-1 border rounded"
                    required
                  >
                    <option value="">Choose a Category</option>
                    <option value="business">Business Income</option>
                    <option value="personal">Personal Income</option>
                    <option value="investment">Investment</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex flex-row justify-end gap-1 mt-4">
          <div className="flex flex-row gap-1 mt-4">
            <button
              type="button"
              onClick={handleAddRow}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Add
            </button>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Save
            </button>
            <button
              type="button"
              onClick={() => handleDeleteRow(rows.length - 1)}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded flex items-center justify-center"
            >
              <DeleteIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
