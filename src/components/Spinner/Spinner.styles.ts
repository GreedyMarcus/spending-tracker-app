import styled, { css, keyframes } from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 4rem;

  > svg {
    width: 100%;
    height: 100%;
  }
`;

export const Circle = styled.circle(({ theme, cx }) => {
  const circleDiameter = Number(cx) * 2;

  return css`
    fill: transparent;
    stroke-linecap: round;
    stroke: ${theme.colors.primary[500]};
    stroke-dasharray: ${3.14 * circleDiameter};
    transform-origin: calc(0.5px * ${circleDiameter}) calc(0.5px * ${circleDiameter}) 0;
    animation: ${createSpinnerAnimation(circleDiameter)} 2500ms linear infinite;
  `;
});

function createSpinnerAnimation(circleDiameter: number) {
  return keyframes`
    0% {
      stroke-dashoffset: ${0.66 * circleDiameter};
      transform: rotate(0deg);
    }

    50% {
      stroke-dashoffset: ${3.14 * circleDiameter};
      transform: rotate(720deg);
    }

    100% {
      stroke-dashoffset: ${0.66 * circleDiameter};
      transform: rotate(1080deg);
    }
  `;
}
