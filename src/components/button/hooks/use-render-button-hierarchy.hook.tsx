import {
  IRenderButtonHierarchy,
} from "@/components/button/interfaces/render-button-hierarchy.interface";

export default function useRenderButtonHierarchy() {
  const buttonBase: string = "px-4 h-10 flex items-center justify-center rounded-md gap-3 duration-300 ease-in-out font-bold ";

  const renderButtonHierarchy: IRenderButtonHierarchy = {
    "filled": buttonBase + "bg-red-700 text-gray-50 transition-colors hover:bg-red-800",
    "outlined": buttonBase + "bg-transparent border border-red-900 text-red-700 transition-opacity hover:bg-red-900/10",
    "text": buttonBase + "bg-transparent text-red-700 transition-opacity hover:bg-red-900/10",
  };

  return {
    renderButtonHierarchy,
  };
}

