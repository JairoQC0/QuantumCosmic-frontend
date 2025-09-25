import { useState } from "react";
import WipNotice from "../components/WipNotice";
import Section from "../components/Section";

export default function ML() {
  const [inputs, setInputs] = useState({
    starDistance: "",
    orbitalPeriod: "",
    planetRadius: "",
  });

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  return (
    <Section title="Machine Learning">
      <div className="text-center animate-fade-in">
        <p className="text-gray-400 max-w-2xl mx-auto mb-8">
          Aquí irá la sección visual dedicada a modelos de Machine Learning
          aplicados al estudio del universo.
        </p>

        <WipNotice />

        {/* 🔹 Apartado de análisis */}
        <div className="mt-12 max-w-3xl mx-auto bg-gray-900/80 p-8 rounded-2xl border border-gray-800 shadow-lg">
          <h3 className="text-2xl font-semibold text-white mb-6">
            Análisis de Exoplaneta
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
            Analizar
          </button>

          {/* Resultado simulado */}
          <div className="mt-6 p-4 bg-gray-800/70 rounded-lg text-gray-200">
            Resultado del análisis aparecerá aquí.
          </div>
        </div>
      </div>
    </Section>
  );
}
