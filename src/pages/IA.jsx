// src/pages/IA.jsx
import { useState } from "react";
import { useTranslation } from "react-i18next";
import Section from "../components/Section";
import WipNotice from "../components/WipNotice";

export default function IA() {
  const { t } = useTranslation();

  const [inputs, setInputs] = useState({
    koi_period: "",
    koi_duration: "",
    koi_depth: "",
    koi_prad: "",
    koi_teq: "",
    koi_insol: "",
    koi_model_snr: "",
    koi_steff: "",
    koi_slogg: "",
    koi_srad: "",
  });

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResult(null);

    // Validar que todos los campos estén llenos
    const missing = Object.values(inputs).some((value) => value === "");
    if (missing) {
      setError(t("pages.ia.errorAllRequired"));
      setLoading(false);
      return;
    }

    // Convertir a números
    const numericInputs = {};
    try {
      for (const [key, value] of Object.entries(inputs)) {
        const num = parseFloat(value);
        if (isNaN(num)) throw new Error(`Invalid number in ${key}`);
        numericInputs[key] = num;
      }
    } catch {
      setError(t("pages.ia.errorInvalid"));
      setLoading(false);
      return;
    }

    try {
      // ✅ Usa la ruta relativa /predict (Vite la redirige al backend real)
      const response = await fetch("/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(numericInputs),
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const data = await response.json();

      if (data.status === "success") {
        setResult(data);
      } else {
        throw new Error("Prediction failed");
      }
    } catch (err) {
      console.error("API Error:", err);
      setError(t("pages.ia.errorApi"));
    } finally {
      setLoading(false);
    }
  };

  const fields = [
    {
      name: "koi_period",
      label: t("pages.ia.label_period"),
      unit: t("pages.ia.unit_days"),
    },
    {
      name: "koi_duration",
      label: t("pages.ia.label_duration"),
      unit: t("pages.ia.unit_hours"),
    },
    {
      name: "koi_depth",
      label: t("pages.ia.label_depth"),
      unit: t("pages.ia.unit_ppm"),
    },
    {
      name: "koi_prad",
      label: t("pages.ia.label_prad"),
      unit: t("pages.ia.unit_earth_radii"),
    },
    {
      name: "koi_teq",
      label: t("pages.ia.label_teq"),
      unit: t("pages.ia.unit_kelvin"),
    },
    {
      name: "koi_insol",
      label: t("pages.ia.label_insol"),
      unit: t("pages.ia.unit_solar"),
    },
    { name: "koi_model_snr", label: t("pages.ia.label_snr"), unit: "" },
    {
      name: "koi_steff",
      label: t("pages.ia.label_steff"),
      unit: t("pages.ia.unit_kelvin"),
    },
    {
      name: "koi_slogg",
      label: t("pages.ia.label_slogg"),
      unit: t("pages.ia.unit_logg"),
    },
    {
      name: "koi_srad",
      label: t("pages.ia.label_srad"),
      unit: t("pages.ia.unit_solar"),
    },
  ];

  return (
    <Section titleKey="pages.ia.title">
      <div className="text-center animate-fade-in">
        <p className="text-gray-400 max-w-3xl mx-auto mb-8">
          {t("pages.ia.desc")}
        </p>

        <WipNotice />

        <div className="mt-12 max-w-4xl mx-auto bg-gray-900/80 p-6 sm:p-8 rounded-2xl border border-gray-800 shadow-lg">
          <h3 className="text-2xl font-semibold text-white mb-6">
            {t("pages.ia.inputTitle")}
          </h3>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              {fields.map((field) => (
                <div key={field.name} className="flex flex-col">
                  <label className="text-gray-300 text-sm mb-1 flex justify-between">
                    <span>{field.label}</span>
                    {field.unit && (
                      <span className="text-gray-500">({field.unit})</span>
                    )}
                  </label>
                  <input
                    type="number"
                    step="any"
                    name={field.name}
                    value={inputs[field.name]}
                    onChange={handleChange}
                    required
                    className="p-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-indigo-400 text-sm"
                  />
                </div>
              ))}
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`px-6 py-2.5 rounded-lg font-medium transition ${
                loading
                  ? "bg-gray-600 cursor-not-allowed"
                  : "bg-indigo-500 hover:bg-indigo-600 text-white"
              }`}
            >
              {loading
                ? t("pages.ia.buttonEvaluating")
                : t("pages.ia.buttonEvaluate")}
            </button>
          </form>

          {error && (
            <div className="mt-4 p-3 bg-red-900/50 text-red-200 rounded-lg text-sm">
              {error}
            </div>
          )}

          {result && (
            <div className="mt-6 p-4 bg-gray-800/70 rounded-lg text-gray-200 animate-fade-in">
              <h4 className="font-bold text-lg mb-2">
                {t("pages.ia.resultTitle")}
              </h4>
              <p className="mb-2">
                <span className="font-semibold">
                  {t("pages.ia.prediction")}:
                </span>{" "}
                <span
                  className={
                    result.prediction === "CONFIRMED"
                      ? "text-green-400 font-medium"
                      : "text-orange-400 font-medium"
                  }
                >
                  {result.prediction}
                </span>
              </p>
              <p className="text-sm">
                <span className="font-semibold">
                  {t("pages.ia.confidence")}:
                </span>{" "}
                {result.prediction === "CONFIRMED"
                  ? `${(result.probabilities.CONFIRMED * 100).toFixed(1)}%`
                  : `${(result.probabilities["FALSE POSITIVE"] * 100).toFixed(
                      1
                    )}%`}
              </p>
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}
