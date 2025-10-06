// src/pages/Home.jsx
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom"; // 👈 Importamos Link
import PlanetSphere from "../components/PlanetSphere";
import StarsBackground from "../components/StarsBackground";

export default function Home() {
  const { t } = useTranslation();

  const features = [
    {
      title: t("pages.home.features.ai.title"),
      description: t("pages.home.features.ai.desc"),
      icon: "🧠",
    },
    {
      title: t("pages.home.features.data.title"),
      description: t("pages.home.features.data.desc"),
      icon: "📊",
    },
    {
      title: t("pages.home.features.explore.title"),
      description: t("pages.home.features.explore.desc"),
      icon: "🔭",
    },
  ];

  return (
    <div className="relative w-full min-h-screen bg-black overflow-hidden">
      {/* Fondo estrellado */}
      <StarsBackground />

      {/* Hero Section */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-16 md:py-24 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Texto */}
        <div className="text-white text-center md:text-left max-w-lg space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            {t("pages.home.title")}
          </h1>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
            {t("pages.home.subtitle")}
          </p>
          <div className="mt-6">
            {/* ✅ Usamos Link en lugar de <a> */}
            <Link
              to="/exoplanetas"
              className="inline-block px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-medium text-white transition shadow-lg hover:shadow-indigo-500/20"
            >
              {t("pages.home.cta")}
            </Link>
          </div>
        </div>

        {/* Esfera 3D */}
        <div className="w-full md:w-[450px] h-[400px] flex items-center justify-center">
          <PlanetSphere textureUrl="/textures/earth.jpg" />
        </div>
      </div>

      {/* Sección de Características */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            {t("pages.home.features.title")}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {t("pages.home.features.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 text-center hover:border-indigo-500/30 transition"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Llamado a la acción final */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 py-16 text-center">
        <h3 className="text-2xl font-bold text-white mb-4">
          {t("pages.home.ctaSection.title")}
        </h3>
        <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
          {t("pages.home.ctaSection.subtitle")}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* ✅ Botones con Link */}
          <Link
            to="/ia"
            className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 rounded-lg font-medium text-white transition shadow-lg"
          >
            {t("pages.home.ctaSection.button1")}
          </Link>
          <Link
            to="/exoplanetas"
            className="px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg font-medium text-white transition border border-gray-700"
          >
            {t("pages.home.ctaSection.button2")}
          </Link>
        </div>
      </div>
    </div>
  );
}
