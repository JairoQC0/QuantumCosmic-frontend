import { useState } from "react";
import Section from "../components/Section";
import ExoplanetFilters from "../components/ExoplanetFilters";
import ExoplanetCard from "../components/ExoplanetCard";
import StarsBackground from "../components/StarsBackground";
import exoplanets from "../data/exoplanets.json";

export default function Exoplanetas() {
  const [search, setSearch] = useState("");
  const [year, setYear] = useState("");
  const [minRadius, setMinRadius] = useState("");
  const [maxRadius, setMaxRadius] = useState("");
  const [maxDistance, setMaxDistance] = useState("");

  const filteredPlanets = exoplanets.filter((planet) => {
    const matchesName = planet.name
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesYear = year ? planet.disc_year === parseInt(year) : true;
    const matchesRadius =
      (minRadius ? planet.radius >= parseFloat(minRadius) : true) &&
      (maxRadius ? planet.radius <= parseFloat(maxRadius) : true);
    const matchesDistance = maxDistance
      ? planet.distance <= parseFloat(maxDistance)
      : true;

    return matchesName && matchesYear && matchesRadius && matchesDistance;
  });

  return (
    <div className="relative min-h-screen z-10">
      <StarsBackground />

      <Section title="Exoplanetas NASA">
        <p className="text-gray-400 max-w-2xl mx-auto mb-8 text-center">
          Filtra y explora algunos exoplanetas descubiertos, con sus propiedades
          principales.
        </p>

        <ExoplanetFilters
          search={search}
          setSearch={setSearch}
          year={year}
          setYear={setYear}
          minRadius={minRadius}
          setMinRadius={setMinRadius}
          maxRadius={maxRadius}
          setMaxRadius={setMaxRadius}
          maxDistance={maxDistance}
          setMaxDistance={setMaxDistance}
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-6">
          {filteredPlanets.length > 0 ? (
            filteredPlanets.map((planet) => (
              <ExoplanetCard key={planet.name} planet={planet} />
            ))
          ) : (
            <p className="text-gray-400 col-span-full text-center">
              No se encontraron planetas con esos filtros.
            </p>
          )}
        </div>
      </Section>
    </div>
  );
}
