import React, { useState } from "react";
import Result from "./Result";

const AgeCalculator = () => {
  const [birthYear, setBirthYear] = useState("");
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    const currentYear = new Date().getFullYear();
    const calculatedAge = currentYear - birthYear;
    setAge(calculatedAge);
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">Calculadora de Idade</h1>
      <input
        type="number"
        placeholder="Ano de nascimento"
        value={birthYear}
        onChange={(e) => setBirthYear(e.target.value)}
        className="border p-2 mb-4 w-full"
      />
      <button
        onClick={calculateAge}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Calcular Idade
      </button>
      {age !== null && <Result age={age} />}
    </div>
  );
};

export default AgeCalculator;
