import Bar from "../Bar";
import data from "../../data.json";
import * as S from "./style";

function BarChart() {
  console.log(data);
  return (
    <S.Wrapper>
      {data &&
        data.map((d) => <Bar key={d.label} label={d.day} amount={d.amount} />)}
    </S.Wrapper>
  );
}

export default BarChart;
