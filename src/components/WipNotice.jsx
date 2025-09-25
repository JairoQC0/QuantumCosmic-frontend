import { AlertTriangle } from "lucide-react";

export default function WipNotice() {
  return (
    <div className="mt-6 flex justify-center">
      <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 text-yellow-400 border border-yellow-400/30 animate-pulse">
        <AlertTriangle className="w-4 h-4" />
        <span className="text-sm">
          Esta página está en proceso de desarrollo
        </span>
      </div>
    </div>
  );
}
