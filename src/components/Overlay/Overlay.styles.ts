import styled, { css } from "styled-components";

type ComponentProps = {
  $transparent?: boolean;
};

export const Component = styled.div<ComponentProps>(
  ({ theme, $transparent }) => css`
    z-index: ${theme.zIndex.overlay};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, ${$transparent ? 0 : 0.5});
    width: 100%;
    height: 100%;
    transition: background-color 200ms ease-out;
  `
);
