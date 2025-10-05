import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  // Obtiene la función 't' para traducir y la función 'i18n' para cambiar el idioma
  const { t, i18n } = useTranslation();

  // Define los items de navegación usando las claves de traducción
  const navItems = [
    { path: "/", labelKey: "navbar.home" }, // Clave agregada a JSON
    { path: "/exoplanetas", labelKey: "navbar.exoplanets" },
    { path: "/game", labelKey: "navbar.game" },
    { path: "/ia", labelKey: "navbar.ia" }, // Clave corregida a 'ia'
  ];

  // Función para cambiar el idioma
  const changeLanguage = (lng) => {
    // i18n.changeLanguage(lng) es la función clave de i18next
    i18n.changeLanguage(lng);
  };

  // Obtener el idioma actual para aplicar estilos al botón activo
  const currentLang = i18n.language;

  return (
    <header className="fixed top-0 w-full flex justify-between items-center px-8 py-4 bg-black/80 border-b border-gray-800 z-50 backdrop-blur">
      <h1 className="text-2xl font-bold tracking-widest text-white">
        Quantum<span className="text-indigo-500">Cosmic</span>
      </h1>
      <nav className="flex gap-6 text-gray-300 items-center">
        {navItems.map(({ path, labelKey }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              `hover:text-white transition ${
                isActive ? "text-indigo-400 font-semibold" : ""
              }`
            }
          >
            {/* Usa la función t() para obtener la traducción */}
            {t(labelKey)}
          </NavLink>
        ))}

        {/* Language Switch */}
        <div className="flex gap-2 ml-4">
          <button
            onClick={() => changeLanguage("es")}
            className={`text-sm px-1 py-0.5 rounded transition ${
              currentLang === "es"
                ? "bg-indigo-600 text-white font-bold"
                : "hover:bg-gray-700"
            }`}
          >
            ES
          </button>
          <span className="text-gray-500">|</span>
          <button
            onClick={() => changeLanguage("en")}
            className={`text-sm px-1 py-0.5 rounded transition ${
              currentLang === "en"
                ? "bg-indigo-600 text-white font-bold"
                : "hover:bg-gray-700"
            }`}
          >
            EN
          </button>
        </div>
      </nav>
    </header>
  );
}
