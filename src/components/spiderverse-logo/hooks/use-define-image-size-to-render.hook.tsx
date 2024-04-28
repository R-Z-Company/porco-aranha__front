import SmallLogo from "../../../../public/spider-verse-logo.png";
import LargeLogo from "../../../../public/spider-verse-logo-large.png";
import {
  IDefineImageSizeToRender,
} from "@/components/spiderverse-logo/interfaces/define-image-size-to-render.interface";


export default function useDefineImageSizeToRender() {
  const defineImageSizeToRender: IDefineImageSizeToRender = {
    "small": {
      src: SmallLogo,
      height: 56,
      width: 174,
    },
    "large": {
      src: LargeLogo,
      height: 112,
      width: 348,
    },
  };

  return {
    defineImageSizeToRender,
  };
}