import { AnimationProps } from "framer-motion";

export type AnimationName = "fade";

export type AnimationGetter = (options: AnimationOptions) => AnimationProps;

export type AnimationOptions = {
  duration?: number;
  zIndex?: number;
};
