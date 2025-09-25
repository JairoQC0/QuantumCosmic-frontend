import PlanetSphere from "../components/PlanetSphere";
import StarsBackground from "../components/StarsBackground";

export default function Home() {
  return (
    <div className="relative w-full h-screen bg-black flex items-center justify-center px-6 md:px-32">
      <StarsBackground />

      <div className="z-10 flex flex-col md:flex-row items-center justify-center gap-12 w-full h-full">
        {/* Izquierda: texto centrado verticalmente */}
        <div className="text-white text-center md:text-left space-y-6 md:w-1/2">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            EXOPLANETS
          </h1>
          <p className="text-gray-300 text-base md:text-lg">
            Explore new worlds beyond our solar system and discover planets
            orbiting distant stars. Each exoplanet has its own story waiting to
            be uncovered.
          </p>
        </div>

        {/* Derecha: esfera 3D ocupando todo el ancho y altura del contenedor */}
        <div className="w-full md:w-1/2 h-full">
          <PlanetSphere textureUrl="/textures/earth.jpg" />
        </div>
      </div>
    </div>
  );
}
