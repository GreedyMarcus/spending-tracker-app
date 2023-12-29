import * as S from "./Spinner.styles";

export function Spinner() {
  return (
    <S.Container>
      <svg viewBox="0 0 512 512">
        <S.Circle cx="256" cy="256" r="230" strokeWidth="52" />
      </svg>
    </S.Container>
  );
}
