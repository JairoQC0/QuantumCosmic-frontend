import { useState } from "react";
import { useTranslation } from "react-i18next";
import WipNotice from "../components/WipNotice";
import Section from "../components/Section";

export default function ML() {
  const { t } = useTranslation();
  
  const [inputs, setInputs] = useState({
    starDistance: "",
    orbitalPeriod: "",
    planetRadius: "",
  });

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  return (
    // Usamos la clave de IA para el título, ya que parece que IA es la versión traducida de ML
    <Section titleKey="pages.ia.title"> 
      <div className="text-center animate-fade-in">
        {/* Usamos la clave de IA para la descripción */}
        <p className="text-gray-400 max-w-2xl mx-auto mb-8">
          {t("pages.ia.desc")}
        </p>

        <WipNotice />

        {/* 🔹 Apartado de análisis */}
        <div className="mt-12 max-w-3xl mx-auto bg-gray-900/80 p-8 rounded-2xl border border-gray-800 shadow-lg">
          {/* Usamos la clave de IA para el título del bloque de datos */}
          <h3 className="text-2xl font-semibold text-white mb-6">
            {t("pages.ia.inputTitle")}
          </h3>

          <div className="grid gap-4 sm:grid-cols-3 mb-6">
            <div className="flex flex-col">
              <label className="text-gray-300 mb-1">
                {/* Traducción de la etiqueta */}
                {t("pages.ia.labelDistance")}
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
                {t("pages.ia.labelPeriod")}
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
                {t("pages.ia.labelRadius")}
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
            {/* Traducción del botón */}
            {t("pages.ia.buttonEvaluate")}
          </button>

          {/* Resultado simulado */}
          <div className="mt-6 p-4 bg-gray-800/70 rounded-lg text-gray-200">
            {/* Traducción del mensaje de resultado */}
            {t("pages.ia.result")}
          </div>
        </div>
      </div>
    </Section>
  );
}
