import { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "https://api.frankfurter.app/latest";

function App() {
  const [currencies, setCurrencies] = useState([]);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("BRL");
  const [amount, setAmount] = useState(1);
  const [result, setResult] = useState(null);

  useEffect(() => {
    axios.get(API_URL).then((res) => {
      const data = res.data;
      const allCurrencies = [data.base, ...Object.keys(data.rates)];
      setCurrencies(allCurrencies.sort());
    });
  }, []);

  const convert = async () => {
    if (from === to) {
      setResult(amount);
      return;
    }

    const res = await axios.get(
      `${API_URL}?amount=${amount}&from=${from}&to=${to}`
    );
    setResult(res.data.rates[to]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-200 flex items-center justify-center">
      <div className="bg-white shadow-2xl rounded-2xl p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold text-center text-blue-800 mb-6">
          Conversor de Moedas 💱
        </h1>

        <div className="flex justify-between gap-4 mb-4">
          <select
            className="w-full p-2 border border-gray-300 rounded-md"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
          >
            {currencies.map((cur) => (
              <option key={cur}>{cur}</option>
            ))}
          </select>

          <select
            className="w-full p-2 border border-gray-300 rounded-md"
            value={to}
            onChange={(e) => setTo(e.target.value)}
          >
            {currencies.map((cur) => (
              <option key={cur}>{cur}</option>
            ))}
          </select>
        </div>

        <input
          type="number"
          className="w-full p-2 mb-4 border border-gray-300 rounded-md"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Digite o valor"
        />

        <button
          onClick={convert}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition"
        >
          Converter
        </button>

        {result !== null && (
          <p className="mt-4 text-center text-lg font-semibold text-green-700">
            {amount} {from} = {result.toFixed(2)} {to}
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
