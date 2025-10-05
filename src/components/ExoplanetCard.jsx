import { Orbit } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function ExoplanetCard({ planet }) {
  const { t } = useTranslation();

  return (
    <div className="bg-gray-900/80 border border-gray-800 rounded-2xl p-6 shadow hover:shadow-indigo-500/20 transition transform hover:-translate-y-1 backdrop-blur">
      <div className="flex items-center gap-3 mb-4">
        <Orbit className="w-6 h-6 text-indigo-400" />
        <h3 className="text-xl font-semibold text-white">{planet.name}</h3>
      </div>
      <ul className="text-gray-300 space-y-1 text-sm">
        <li>
          {/* Traducción de etiquetas */}
          <span className="font-medium text-gray-400">{t("exoplanetCard.year")}:</span>{" "}
          {planet.disc_year}
        </li>
        <li>
          <span className="font-medium text-gray-400">{t("exoplanetCard.period")}:</span>{" "}
          {planet.orbital_period} {t("exoplanetCard.periodUnit")}
        </li>
        <li>
          <span className="font-medium text-gray-400">{t("exoplanetCard.radius")}:</span>{" "}
          {planet.radius} R⊕
        </li>
        <li>
          <span className="font-medium text-gray-400">{t("exoplanetCard.distance")}:</span>{" "}
          {planet.distance} pc
        </li>
      </ul>
    </div>
  );
}
