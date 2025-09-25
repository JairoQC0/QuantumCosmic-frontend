import { useState } from "react";
import Section from "../components/Section";
import WipNotice from "../components/WipNotice";

export default function IA() {
  const [inputs, setInputs] = useState({
    starDistance: "",
    orbitalPeriod: "",
    planetRadius: "",
  });

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  return (
    <Section title="Inteligencia Artificial">
      <div className="text-center animate-fade-in">
        <h2 className="text-5xl font-bold mb-4"></h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-8">
          Ingresa los datos del objeto estelar y la IA evaluará la probabilidad
          de que sea un exoplaneta.
        </p>

        <WipNotice />

        {/* Inputs para predicción */}
        <div className="mt-12 max-w-3xl mx-auto bg-gray-900/80 p-8 rounded-2xl border border-gray-800 shadow-lg">
          <h3 className="text-2xl font-semibold text-white mb-6">
            Datos de Entrada
          </h3>

          <div className="grid gap-4 sm:grid-cols-3 mb-6">
            <div className="flex flex-col">
              <label className="text-gray-300 mb-1">
                Distancia a la estrella (pc)
              </label>
              <input
                type="number"
                name="starDistance"
                value={inputs.starDistance}
                onChange={handleChange}
                className="p-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-indigo-400"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-gray-300 mb-1">
                Periodo orbital (días)
              </label>
              <input
                type="number"
                name="orbitalPeriod"
                value={inputs.orbitalPeriod}
                onChange={handleChange}
                className="p-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-indigo-400"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-gray-300 mb-1">
                Radio del planeta (R⊕)
              </label>
              <input
                type="number"
                name="planetRadius"
                value={inputs.planetRadius}
                onChange={handleChange}
                className="p-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-indigo-400"
              />
            </div>
          </div>

          <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-2 rounded-lg font-medium transition">
            Evaluar
          </button>

          {/* Resultado simulado */}
          <div className="mt-6 p-4 bg-gray-800/70 rounded-lg text-gray-200">
            La predicción de la IA aparecerá aquí.
          </div>
        </div>
      </div>
    </Section>
  );
}
