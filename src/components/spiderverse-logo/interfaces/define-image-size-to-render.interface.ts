import {
  ImageSizeType,
} from "@/components/spiderverse-logo/types/image-size.type";
import type {
  ImageProps as NextImageProps,
} from "next/dist/shared/lib/get-img-props";

type CustomImageProps = Pick<NextImageProps, "src" | "height" | "width">;

export interface IDefineImageSizeToRender extends Record<ImageSizeType, CustomImageProps> {
}
