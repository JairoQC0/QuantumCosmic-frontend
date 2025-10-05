import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import WipNotice from "../components/WipNotice";
import StarsBackground from "../components/StarsBackground";

// Ejemplo de exoplanetas con emojis decorativos
const exoplanets = [
  { name: "Kepler-22b", emoji: "🪐" },
  { name: "HD 209458 b", emoji: "🌍" },
  { name: "Proxima Centauri b", emoji: "🌕" },
  { name: "TRAPPIST-1d", emoji: "☄️" },
  { name: "Gliese 667 Cc", emoji: "🛸" },
  { name: "Kepler-452b", emoji: "⭐" },
];

const shuffleArray = (array) => array.sort(() => Math.random() - 0.5);

export default function Game() {
  const { t } = useTranslation();
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const deck = shuffleArray([...exoplanets, ...exoplanets]);
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
    <div className="relative min-h-screen">
      <StarsBackground />

      <section className="text-center z-10 relative animate-fade-in">
        <h2 className="text-5xl font-bold mb-4">{t("pages.game.title")}</h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-6">
          {/* Traducción de la descripción del juego */}
          {t("pages.game.desc")}
        </p>

        <div className="inline-block bg-gray-900/50 p-4 rounded-2xl backdrop-blur mb-4 relative">
          <div className="grid gap-4 grid-cols-4 justify-center">
            {cards.map((planet, idx) => {
              const isFlipped = flipped.includes(idx) || matched.includes(idx);
              return (
                <div
                  key={idx}
                  className={`w-28 h-28 border border-gray-700 rounded-lg flex flex-col items-center justify-center cursor-pointer transition-transform ${
                    isFlipped
                      ? "bg-indigo-500/80 text-white animate-fade-in"
                      : "bg-gray-800/50"
                  } hover:scale-110`}
                  onClick={() => handleClick(idx)}
                >
                  {isFlipped ? (
                    <>
                      <span className="text-3xl">{planet.emoji}</span>
                      <span className="text-sm mt-1">{planet.name}</span>
                    </>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>

        <p className="text-gray-300 font-medium mb-4">
          {/* Traducción del marcador con interpolación de variables */}
          {t("pages.game.score", { score })}
        </p>
        {score === 6 && (
          <p className="text-indigo-400 font-bold text-lg animate-pulse">
            {/* Traducción del mensaje de victoria */}
            {t("pages.game.winMessage")}
          </p>
        )}

        <p className="text-yellow-400 mt-4 font-medium">
          {/* Traducción de la nota */}
          {t("pages.game.note")}
        </p>

        <WipNotice />
      </section>
    </div>
  );
}
