import { useEffect, useState } from "react";

export function useHoverDetection() {
  const [observableElement, setObservableElement] = useState<HTMLElement | null>(null);
  const [isElementHovering, setIsElementHovering] = useState(false);

  useEffect(() => {
    const handleMouseEnter = () => setIsElementHovering(true);
    const handleMouseLeave = () => setIsElementHovering(false);

    observableElement?.addEventListener("mouseenter", handleMouseEnter);
    observableElement?.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      observableElement?.removeEventListener("mouseenter", handleMouseEnter);
      observableElement?.removeEventListener("mouseleave", handleMouseLeave);
      setIsElementHovering(false);
    };
  }, [observableElement]);

  return {
    isElementHovering,
    observableElement,
    setObservableElement,
  };
}
