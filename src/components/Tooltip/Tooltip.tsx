import { autoUpdate, flip, offset, shift, useFloating } from "@floating-ui/react-dom";
import { AnimatePresence } from "framer-motion";
import { ReactNode } from "react";
import { Animate } from "@components/Animate";
import { useHoverDetection } from "@hooks/useHoverDetection";
import * as S from "./Tooltip.styles";

export type TooltipProps = {
  content: string;
  children: ReactNode;
};

export function Tooltip({ content, children }: TooltipProps) {
  const { isElementHovering, observableElement, setObservableElement } = useHoverDetection();

  const { refs, floatingStyles } = useFloating<HTMLElement>({
    open: isElementHovering,
    placement: "bottom",
    middleware: [offset({ mainAxis: 6 }), flip(), shift()],
    elements: {
      reference: observableElement,
    },
    whileElementsMounted: autoUpdate,
  });

  return (
    <>
      <S.Container ref={setObservableElement}>{children}</S.Container>
      <AnimatePresence>
        {isElementHovering && (
          <Animate name="fade" zIndex="tooltip">
            <S.Content ref={refs.setFloating} style={floatingStyles}>
              {content}
            </S.Content>
          </Animate>
        )}
      </AnimatePresence>
    </>
  );
}
