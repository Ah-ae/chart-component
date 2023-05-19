import * as S from "./style";

function Total() {
  return (
    <S.Wrapper>
      <S.ThisMonthArea>
        <S.Desc>Total this month</S.Desc>
        <S.Number>$478.33</S.Number>
      </S.ThisMonthArea>
      <S.LastMonthArea>
        <S.Percentage>+2.4%</S.Percentage>
        <S.Desc>from last month</S.Desc>
      </S.LastMonthArea>
    </S.Wrapper>
  );
}

export default Total;
