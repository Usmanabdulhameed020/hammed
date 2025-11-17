import React from "react";
import { useState } from "react";

export default function Mortgage() {
  const [price, setPrice] = useState("");
  const [downPayment, setDownPayment] = useState("");
  const [interest, setInterest] = useState("");
  const [years, setYears] = useState("");
  const [monthly, setMonthly] = useState(null);

  const calculateMortgage = () => {
    const principal = price - downPayment;
    const monthlyRate = interest / 100 / 12;
    const numberOfPayments = years * 12;

    const monthlyPayment =
      (principal *
        monthlyRate *
        Math.pow(1 + monthlyRate, numberOfPayments)) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

    setMonthly(monthlyPayment.toFixed(2));
  };

  return (
    <div className="min-h-screen px-6 py-16 bg-gray-50">
      <h1 className="text-4xl font-bold text-center mb-10">
        Mortgage Calculator
      </h1>

      <div className="max-w-3xl mx-auto bg-white shadow-xl p-8 rounded-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div>
            <label className="font-medium">Home Price ($)</label>
            <input
              type="number"
              className="w-full border rounded-lg px-4 py-2 mt-2"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <div>
            <label className="font-medium">Down Payment ($)</label>
            <input
              type="number"
              className="w-full border rounded-lg px-4 py-2 mt-2"
              value={downPayment}
              onChange={(e) => setDownPayment(e.target.value)}
            />
          </div>

          <div>
            <label className="font-medium">Interest Rate (%)</label>
            <input
              type="number"
              className="w-full border rounded-lg px-4 py-2 mt-2"
              value={interest}
              onChange={(e) => setInterest(e.target.value)}
            />
          </div>

          <div>
            <label className="font-medium">Loan Term (Years)</label>
            <input
              type="number"
              className="w-full border rounded-lg px-4 py-2 mt-2"
              value={years}
              onChange={(e) => setYears(e.target.value)}
            />
          </div>
        </div>

        <button
          onClick={calculateMortgage}
          className="w-full mt-6 bg-blue-600 text-white py-3 rounded-xl text-lg font-semibold hover:bg-blue-700 transition"
        >
          Calculate Monthly Payment
        </button>

        {monthly && (
          <div className="mt-6 bg-green-50 border border-green-300 p-4 rounded-xl text-center">
            <h2 className="text-2xl font-bold text-green-700">
              ${monthly} / month
            </h2>
          </div>
        )}
      </div>
    </div>
  );
}
