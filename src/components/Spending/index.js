import BarChart from "../BarChart";
import Total from "../Total";
import * as S from "./style";

function Spending() {
  return (
    <S.Wrapper>
      <S.Title>Spending - Last 7 Days</S.Title>
      <BarChart />
      <S.Divider />
      <Total />
    </S.Wrapper>
  );
}

export default Spending;
