import { useState } from "react";
import * as S from "./style";

function Bar({ label, amount }) {
  const [visibility, setVisibility] = useState("hidden");
  const handleMouseEnter = () => {
    setVisibility("visible");
  };
  const handleMouseLeave = () => {
    setVisibility("hidden");
  };
  return (
    <S.Wrapper>
      <S.Amount visibility={visibility}>{`$${amount}`}</S.Amount>
      <S.Bar
        height={"80px"}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      <p style={{ color: "hsl(28, 10%, 53%)" }}>{label}</p>
    </S.Wrapper>
  );
}

export default Bar;
