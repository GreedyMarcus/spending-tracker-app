import { Placement, autoUpdate, flip, offset, shift, useFloating } from "@floating-ui/react-dom";
import { AnimatePresence } from "framer-motion";
import { ReactNode } from "react";
import { useHotkeys } from "react-hotkeys-hook";
import { Animate } from "@components/Animate";
import { Overlay } from "@components/Overlay";
import * as S from "./Menu.styles";

export type MenuProps<TElement extends HTMLElement> = {
  id?: string;
  open: boolean;
  anchorElement: TElement | null;
  placement?: Placement;
  width?: string;
  children: ReactNode;
  onClose?: VoidFunction;
};

export function Menu<TElement extends HTMLElement>({
  open,
  anchorElement,
  placement = "bottom-end",
  width,
  children,
  onClose,
  ...rest
}: MenuProps<TElement>) {
  const { refs, floatingStyles } = useFloating<TElement>({
    open,
    placement,
    middleware: [offset({ mainAxis: 6 }), flip(), shift()],
    elements: {
      reference: anchorElement,
    },
    whileElementsMounted: autoUpdate,
  });

  useHotkeys("esc", () => onClose?.(), { enabled: open });

  const handleClose = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    onClose?.();
  };

  return (
    <AnimatePresence>
      {open && (
        <Animate name="fade" zIndex="menu">
          <Overlay transparent onClick={handleClose}>
            <S.Component ref={refs.setFloating} role="menu" $width={width} style={floatingStyles} {...rest}>
              {children}
            </S.Component>
          </Overlay>
        </Animate>
      )}
    </AnimatePresence>
  );
}
