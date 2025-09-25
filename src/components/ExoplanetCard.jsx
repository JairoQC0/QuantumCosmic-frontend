// src/components/ExoplanetCard.jsx
import { Orbit } from "lucide-react";

export default function ExoplanetCard({ planet }) {
  return (
    <div className="bg-gray-900/80 border border-gray-800 rounded-2xl p-6 shadow hover:shadow-indigo-500/20 transition transform hover:-translate-y-1 backdrop-blur">
      <div className="flex items-center gap-3 mb-4">
        <Orbit className="w-6 h-6 text-indigo-400" />
        <h3 className="text-xl font-semibold text-white">{planet.name}</h3>
      </div>
      <ul className="text-gray-300 space-y-1 text-sm">
        <li>
          <span className="font-medium text-gray-400">Año:</span>{" "}
          {planet.disc_year}
        </li>
        <li>
          <span className="font-medium text-gray-400">Periodo Orbital:</span>{" "}
          {planet.orbital_period} días
        </li>
        <li>
          <span className="font-medium text-gray-400">Radio:</span>{" "}
          {planet.radius} R⊕
        </li>
        <li>
          <span className="font-medium text-gray-400">Distancia:</span>{" "}
          {planet.distance} pc
        </li>
      </ul>
    </div>
  );
}
