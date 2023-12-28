import { motion } from "framer-motion";
import { ReactNode } from "react";
import { ZIndexElement } from "styled-components";
import { theme } from "@styles/theme";
import { AnimationGetter, AnimationName } from "./Animate.types";

const animations: Record<AnimationName, AnimationGetter> = {
  fade: ({ duration, zIndex }) => ({
    initial: { zIndex, opacity: 0 },
    animate: { zIndex, opacity: 1 },
    exit: { zIndex, opacity: 0 },
    transition: { duration },
  }),
};

export type AnimateProps = {
  name: AnimationName;
  duration?: number;
  zIndex?: ZIndexElement;
  children: ReactNode;
};

export function Animate({ name, duration = 0.2, zIndex, children }: AnimateProps) {
  return (
    <motion.div {...(animations[name]?.({ duration, zIndex: zIndex ? theme.zIndex[zIndex] : undefined }) ?? {})}>
      {children}
    </motion.div>
  );
}
