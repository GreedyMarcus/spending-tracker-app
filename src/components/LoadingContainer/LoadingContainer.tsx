import { AnimatePresence } from "framer-motion";
import { ReactNode } from "react";
import { Animate } from "@components/Animate";
import { Spinner } from "@components/Spinner";
import * as S from "./LoadingContainer.styles";

export type LoadingContainerProps = {
  loading: boolean;
  loadingKey?: string;
  children: ReactNode;
};

export function LoadingContainer({ loading, loadingKey, children }: LoadingContainerProps) {
  return (
    <AnimatePresence mode="wait">
      <Animate key={loadingKey ?? String(loading)} name="fade">
        {loading ? (
          <S.SpinnerContainer>
            <Spinner />
          </S.SpinnerContainer>
        ) : (
          children
        )}
      </Animate>
    </AnimatePresence>
  );
}
