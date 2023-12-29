import { Text } from "@components/Text";
import ErrorStateIllustration from "@svgs/error-state-illustration.svg?react";
import * as S from "./ErrorState.styles";

export function ErrorState() {
  return (
    <S.Container>
      <ErrorStateIllustration />
      <Text variant="primary" bold color="error.500">
        Oops! Something went wrong...
      </Text>
    </S.Container>
  );
}
