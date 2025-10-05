import { AlertTriangle } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function WipNotice() {
  const { t } = useTranslation();
  
  return (
    <div className="mt-6 flex justify-center">
      <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 text-yellow-400 border border-yellow-400/30 animate-pulse">
        <AlertTriangle className="w-4 h-4" />
        <span className="text-sm">
          {/* Traducción del mensaje "Work in Progress" */}
          {t("wip")}
        </span>
      </div>
    </div>
  );
}
