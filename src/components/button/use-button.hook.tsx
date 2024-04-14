import useRenderButtonHierarchy
  from "@/components/button/hooks/use-render-button-hierarchy.hook";

export default function useButton() {
  const { renderButtonHierarchy } = useRenderButtonHierarchy();

  return {
    renderButtonHierarchy,
  };
}