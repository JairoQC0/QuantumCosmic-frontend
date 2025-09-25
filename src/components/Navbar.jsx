import { NavLink } from "react-router-dom";

export default function Navbar() {
  const navItems = [
    { path: "/", label: "Inicio" },
    { path: "/exoplanetas", label: "Exoplanetas" },
    { path: "/game", label: "Juego" },
    { path: "/ia", label: "IA" },
  ];

  return (
    <header className="fixed top-0 w-full flex justify-between items-center px-8 py-4 bg-black/80 border-b border-gray-800 z-50 backdrop-blur">
      <h1 className="text-2xl font-bold tracking-widest text-white">
        Quantum<span className="text-indigo-500">Cosmic</span>
      </h1>
      <nav className="flex gap-6 text-gray-300 items-center">
        {navItems.map(({ path, label }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              `hover:text-white transition ${
                isActive ? "text-indigo-400 font-semibold" : ""
              }`
            }
          >
            {label}
          </NavLink>
        ))}

        {/* Language Switch */}
        <div className="flex gap-2 ml-4">
          <button
            onClick={() => console.log("ES seleccionado")}
            className="text-sm px-1 py-0.5 rounded hover:bg-gray-700 transition"
          >
            ES
          </button>
          <span>|</span>
          <button
            onClick={() => console.log("EN seleccionado")}
            className="text-sm px-1 py-0.5 rounded hover:bg-gray-700 transition"
          >
            EN
          </button>
        </div>
      </nav>
    </header>
  );
}
