import { Text } from "@components/Text";
import EmptyStateIllustration from "@svgs/empty-state-illustration.svg?react";
import * as S from "./EmptyState.styles";

export type EmptyStateProps = {
  resource: string;
};

export function EmptyState({ resource }: EmptyStateProps) {
  return (
    <S.Container>
      <EmptyStateIllustration />
      <Text variant="primary" color="black.700" bold>{`You haven't added any ${resource} yet...`}</Text>
    </S.Container>
  );
}
