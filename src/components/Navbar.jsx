import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const currentLang = i18n.language;

  const navItems = [
    { path: "/", labelKey: "navbar.home" },
    { path: "/exoplanetas", labelKey: "navbar.exoplanets" },
    { path: "/game", labelKey: "navbar.game" },
    { path: "/ia", labelKey: "navbar.ia" },
  ];

  const changeLanguage = (lng) => i18n.changeLanguage(lng);

  return (
    <header className="fixed top-0 w-full bg-black/80 border-b border-gray-800 z-50 backdrop-blur">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-2xl font-bold tracking-widest text-white">
          Quantum<span className="text-indigo-500">Cosmic</span>
        </h1>

        {/* Botón móvil */}
        <button
          className="md:hidden text-gray-300 hover:text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

        {/* Navegación desktop */}
        <nav className="hidden md:flex gap-6 text-gray-300 items-center">
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
              {t(labelKey)}
            </NavLink>
          ))}

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
      </div>

      {/* Menú móvil */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center bg-black/90 text-gray-300 py-4 border-t border-gray-800">
          {navItems.map(({ path, labelKey }) => (
            <NavLink
              key={path}
              to={path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `py-2 w-full text-center hover:text-white transition ${
                  isActive ? "text-indigo-400 font-semibold" : ""
                }`
              }
            >
              {t(labelKey)}
            </NavLink>
          ))}
          <div className="flex gap-3 mt-3">
            <button
              onClick={() => changeLanguage("es")}
              className={`text-sm px-2 py-1 rounded transition ${
                currentLang === "es"
                  ? "bg-indigo-600 text-white font-bold"
                  : "hover:bg-gray-700"
              }`}
            >
              ES
            </button>
            <button
              onClick={() => changeLanguage("en")}
              className={`text-sm px-2 py-1 rounded transition ${
                currentLang === "en"
                  ? "bg-indigo-600 text-white font-bold"
                  : "hover:bg-gray-700"
              }`}
            >
              EN
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
