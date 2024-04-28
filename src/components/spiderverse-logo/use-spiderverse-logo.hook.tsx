import useDefineImageSizeToRender
  from "@/components/spiderverse-logo/hooks/use-define-image-size-to-render.hook";

export default function useSpiderverseLogo() {
  const { defineImageSizeToRender } = useDefineImageSizeToRender();

  return {
    defineImageSizeToRender,
  };
}