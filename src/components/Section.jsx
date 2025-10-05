import { useTranslation } from "react-i18next";

// Cambiamos 'title' por 'titleKey' para usar la clave de traducción
export default function Section({ titleKey, children }) {
  const { t } = useTranslation();
  
  // Obtenemos el título traducido usando la clave
  const title = t(titleKey); 
  
  return (
    <section className="text-center animate-fade-in">
      {/* Usamos el título traducido */}
      <h2 className="text-5xl font-bold mb-4">{title}</h2> 
      <div className="text-gray-400 max-w-2xl mx-auto">{children}</div>
    </section>
  );
}
