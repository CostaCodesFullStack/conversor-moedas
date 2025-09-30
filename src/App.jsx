import { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "https://api.frankfurter.app/latest";

// Componente de partículas animadas
const FloatingParticles = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const generateParticles = () => {
      const newParticles = [];
      for (let i = 0; i < 50; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 4 + 1,
          speed: Math.random() * 2 + 0.5,
          opacity: Math.random() * 0.5 + 0.2,
          delay: Math.random() * 2,
        });
      }
      setParticles(newParticles);
    };

    generateParticles();
    const interval = setInterval(generateParticles, 10000); // Regenera partículas a cada 10s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle bg-gradient-to-r from-blue-300 to-blue-400 animate-drift"
          style={{
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
            opacity: particle.opacity,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.speed * 2}s`,
          }}
        />
      ))}
    </div>
  );
};

// Componente de ondas animadas
const AnimatedWaves = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-blue-200/30 to-transparent animate-float"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-blue-300/20 to-transparent rounded-full animate-drift"></div>
      <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-transparent rounded-full animate-float"></div>
      <div className="absolute top-1/3 right-1/3 w-48 h-48 bg-gradient-to-tr from-purple-300/15 to-transparent rounded-full animate-drift"></div>
    </div>
  );
};

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
    <div className="min-h-screen animated-gradient flex items-center justify-center relative overflow-hidden">
      {/* Fundo animado */}
      <FloatingParticles />
      <AnimatedWaves />
      
      {/* Overlay com gradiente suave */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-blue-100/60 to-blue-200/80"></div>
      
      {/* Card principal */}
      <div className="bg-white/95 backdrop-blur-md shadow-2xl rounded-2xl p-8 max-w-md w-full relative z-10 border border-white/30">
        <h1 className="text-2xl font-bold text-center text-blue-800 mb-6">
          Conversor de Moedas 💱
        </h1>

        <div className="flex justify-between gap-4 mb-4">
          <select
            className="w-full p-3 border border-gray-300 rounded-md transition-all duration-300 hover:border-blue-400 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
          >
            {currencies.map((cur) => (
              <option key={cur}>{cur}</option>
            ))}
          </select>

          <select
            className="w-full p-3 border border-gray-300 rounded-md transition-all duration-300 hover:border-blue-400 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
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
          className="w-full p-3 mb-4 border border-gray-300 rounded-md transition-all duration-300 hover:border-blue-400 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Digite o valor"
        />

        <button
          onClick={convert}
          className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 rounded-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95"
        >
          Converter
        </button>

        {result !== null && (
          <div className="mt-4 text-center animate-bounce">
            <p className="text-lg font-semibold text-green-700 bg-green-50 p-3 rounded-lg border border-green-200">
              {amount} {from} = {result.toFixed(2)} {to}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
