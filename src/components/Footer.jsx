import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  // Obtenemos el año actual para pasarlo como variable de interpolación
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-16 py-6 border-t border-gray-800 text-center text-gray-500">
      {/* Usamos la clave 'footer' e interpolamos el valor {{year}} */}
      {t("footer", { year: currentYear })}
    </footer>
  );
}
