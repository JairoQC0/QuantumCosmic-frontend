import { Search } from "lucide-react";

export default function ExoplanetFilters({
  search,
  setSearch,
  year,
  setYear,
  minRadius,
  setMinRadius,
  maxRadius,
  setMaxRadius,
  maxDistance,
  setMaxDistance,
}) {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-4 mb-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {/* 🔎 Nombre */}
        <div className="flex items-center gap-2 bg-gray-800 rounded-lg px-3">
          <Search className="w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Buscar por nombre..."
            className="bg-transparent outline-none text-white w-full py-2"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* 📅 Año */}
        <input
          type="number"
          placeholder="Año"
          className="bg-gray-800 rounded-lg px-3 py-2 text-white"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />

        {/* 🌍 Radio mínimo */}
        <input
          type="number"
          placeholder="Radio mínimo (R⊕)"
          className="bg-gray-800 rounded-lg px-3 py-2 text-white"
          value={minRadius}
          onChange={(e) => setMinRadius(e.target.value)}
        />

        {/* 🌍 Radio máximo */}
        <input
          type="number"
          placeholder="Radio máximo (R⊕)"
          className="bg-gray-800 rounded-lg px-3 py-2 text-white"
          value={maxRadius}
          onChange={(e) => setMaxRadius(e.target.value)}
        />

        {/* 📏 Distancia */}
        <input
          type="number"
          placeholder="Distancia máx (pc)"
          className="bg-gray-800 rounded-lg px-3 py-2 text-white"
          value={maxDistance}
          onChange={(e) => setMaxDistance(e.target.value)}
        />
      </div>
    </div>
  );
}
