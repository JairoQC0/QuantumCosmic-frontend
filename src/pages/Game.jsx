// src/pages/Game.jsx
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import StarsBackground from "../components/StarsBackground";

// Datos de exoplanetas mejorados
const exoplanetsData = [
  {
    name: "Proxima Centauri b",
    emoji: "🪐",
    distance: 4.2,
    teq: 234,
    habitable: true,
  },
  { name: "TRAPPIST-1e", emoji: "🌍", distance: 39, teq: 251, habitable: true },
  { name: "Kepler-22b", emoji: "⭐", distance: 638, teq: 262, habitable: true },
  {
    name: "HD 209458 b",
    emoji: "🔥",
    distance: 159,
    teq: 1450,
    habitable: false,
  },
  {
    name: "WASP-12b",
    emoji: "🌋",
    distance: 1411,
    teq: 2500,
    habitable: false,
  },
  {
    name: "Gliese 667 Cc",
    emoji: "🌕",
    distance: 23.6,
    teq: 278,
    habitable: true,
  },
];

const shuffleArray = (array) => [...array].sort(() => Math.random() - 0.5);

export default function Game() {
  const { t } = useTranslation();
  const [activeGame, setActiveGame] = useState("memory");

  return (
    <div className="relative min-h-screen bg-black">
      <StarsBackground />

      <section className="text-center z-10 relative py-12 px-4 max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
          {t("pages.game.title")}
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-8">
          {t("pages.game.desc")}
        </p>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {[
            { id: "memory", label: t("pages.game.games.memory") },
            { id: "habitable", label: t("pages.game.games.habitable") },
            { id: "order", label: t("pages.game.games.order") },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveGame(tab.id)}
              className={`px-4 py-2 rounded-lg font-medium transition ${
                activeGame === tab.id
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Renderizar juego activo */}
        {activeGame === "memory" && <MemoryGame />}
        {activeGame === "habitable" && <HabitableGame />}
        {activeGame === "order" && <OrderGame />}
      </section>
    </div>
  );
}

// =============== JUEGO 1: MEMORY ===============
function MemoryGame() {
  const { t } = useTranslation();
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const deck = shuffleArray([...exoplanetsData, ...exoplanetsData]);
    setCards(deck);
  }, []);

  const handleClick = (index) => {
    if (flipped.includes(index) || matched.includes(index)) return;
    if (flipped.length === 2) return;

    const newFlipped = [...flipped, index];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      const [first, second] = newFlipped;
      if (cards[first].name === cards[second].name) {
        setMatched([...matched, first, second]);
        setScore(score + 1);
        setTimeout(() => setFlipped([]), 800);
      } else {
        setTimeout(() => setFlipped([]), 1000);
      }
    }
  };

  return (
    <div className="inline-block bg-gray-900/50 p-4 rounded-2xl backdrop-blur">
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 justify-center">
        {cards.map((planet, idx) => {
          const isFlipped = flipped.includes(idx) || matched.includes(idx);
          return (
            <div
              key={idx}
              className={`w-20 h-20 sm:w-24 sm:h-24 border border-gray-700 rounded-lg flex flex-col items-center justify-center cursor-pointer transition-transform ${
                isFlipped ? "bg-indigo-500/80 text-white" : "bg-gray-800/50"
              } hover:scale-105`}
              onClick={() => handleClick(idx)}
            >
              {isFlipped ? (
                <>
                  <span className="text-2xl sm:text-3xl">{planet.emoji}</span>
                  <span className="text-xs mt-1 hidden sm:block">
                    {planet.name}
                  </span>
                </>
              ) : (
                <span className="text-2xl">❓</span>
              )}
            </div>
          );
        })}
      </div>
      <p className="text-gray-300 font-medium mt-4">
        {t("pages.game.score", { score })}
      </p>
      {score === exoplanetsData.length && (
        <p className="text-indigo-400 font-bold mt-2 animate-pulse">
          {t("pages.game.winMessage")}
        </p>
      )}
    </div>
  );
}

// =============== JUEGO 2: ¿HABITABLE? ===============
function HabitableGame() {
  const { t } = useTranslation();
  const [planet, setPlanet] = useState(null);
  const [feedback, setFeedback] = useState("");
  const [score, setScore] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    nextPlanet();
  }, []);

  const nextPlanet = () => {
    const random =
      exoplanetsData[Math.floor(Math.random() * exoplanetsData.length)];
    setPlanet(random);
    setFeedback("");
  };

  const handleGuess = (guess) => {
    const isCorrect = guess === planet.habitable;
    setFeedback(isCorrect ? "correct" : "wrong");
    if (isCorrect) setScore(score + 1);
    setTotal(total + 1);
    setTimeout(nextPlanet, 1500);
  };

  if (!planet) return null;

  return (
    <div className="bg-gray-900/50 p-6 rounded-2xl backdrop-blur max-w-md mx-auto">
      <div className="text-5xl mb-4">{planet.emoji}</div>
      <h3 className="text-xl font-semibold text-white mb-2">{planet.name}</h3>
      <p className="text-gray-300 mb-4">
        {t("pages.game.habitable.temp", { temp: planet.teq })}
      </p>
      <div className="flex gap-3 justify-center">
        <button
          onClick={() => handleGuess(true)}
          className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg text-white font-medium"
        >
          {t("pages.game.habitable.yes")}
        </button>
        <button
          onClick={() => handleGuess(false)}
          className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg text-white font-medium"
        >
          {t("pages.game.habitable.no")}
        </button>
      </div>
      {feedback && (
        <p
          className={`mt-4 font-bold ${
            feedback === "correct" ? "text-green-400" : "text-red-400"
          }`}
        >
          {feedback === "correct"
            ? t("pages.game.habitable.correct")
            : t("pages.game.habitable.wrong", {
                answer: planet.habitable
                  ? t("pages.game.habitable.yes")
                  : t("pages.game.habitable.no"),
              })}
        </p>
      )}
      <p className="text-gray-400 mt-4">
        {t("pages.game.score", { score: `${score}/${total}` })}
      </p>
    </div>
  );
}

// =============== JUEGO 3: ORDENA POR DISTANCIA ===============
function OrderGame() {
  const { t } = useTranslation();
  const [planets, setPlanets] = useState([]);
  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    setPlanets(shuffleArray([...exoplanetsData.slice(0, 4)])); // 4 planetas
    setFeedback("");
  }, []);

  const moveUp = (index) => {
    if (index === 0) return;
    const newPlanets = [...planets];
    [newPlanets[index], newPlanets[index - 1]] = [
      newPlanets[index - 1],
      newPlanets[index],
    ];
    setPlanets(newPlanets);
  };

  const moveDown = (index) => {
    if (index === planets.length - 1) return;
    const newPlanets = [...planets];
    [newPlanets[index], newPlanets[index + 1]] = [
      newPlanets[index + 1],
      newPlanets[index],
    ];
    setPlanets(newPlanets);
  };

  const checkOrder = () => {
    const sorted = [...planets].sort((a, b) => a.distance - b.distance);
    const isCorrect = planets.every((p, i) => p.name === sorted[i].name);
    setFeedback(isCorrect ? "correct" : "wrong");
    if (isCorrect)
      setTimeout(
        () => setPlanets(shuffleArray([...exoplanetsData.slice(0, 4)])),
        2000
      );
  };

  return (
    <div className="bg-gray-900/50 p-6 rounded-2xl backdrop-blur max-w-md mx-auto">
      <h3 className="text-xl font-semibold text-white mb-4">
        {t("pages.game.order.title")}
      </h3>
      <div className="space-y-3 mb-6">
        {planets.map((planet, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between bg-gray-800/60 p-3 rounded-lg"
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">{planet.emoji}</span>
              <span className="text-white">{planet.name}</span>
              <span className="text-gray-400 text-sm">
                {planet.distance} {t("pages.game.order.ly")}
              </span>
            </div>
            <div className="flex gap-1">
              <button
                onClick={() => moveUp(idx)}
                disabled={idx === 0}
                className="w-8 h-8 rounded bg-gray-700 text-white disabled:opacity-30"
              >
                ↑
              </button>
              <button
                onClick={() => moveDown(idx)}
                disabled={idx === planets.length - 1}
                className="w-8 h-8 rounded bg-gray-700 text-white disabled:opacity-30"
              >
                ↓
              </button>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={checkOrder}
        className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-white font-medium"
      >
        {t("pages.game.order.check")}
      </button>
      {feedback && (
        <p
          className={`mt-4 font-bold text-center ${
            feedback === "correct" ? "text-green-400" : "text-red-400"
          }`}
        >
          {feedback === "correct"
            ? t("pages.game.order.correct")
            : t("pages.game.order.wrong")}
        </p>
      )}
    </div>
  );
}
