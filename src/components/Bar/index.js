import { useEffect, useState } from "react";
import * as S from "./style";

function Bar({ label, amount }) {
  const [visibility, setVisibility] = useState("hidden");
  const handleMouseEnter = () => {
    setVisibility("visible");
  };
  const handleMouseLeave = () => {
    setVisibility("hidden");
  };

  const calculateHeight = (amount) => {
    return `${amount * 3.6}px`;
  };

  const [isToday, setIsToday] = useState(false);
  const DAYS = {
    mon: 1,
    tue: 2,
    wed: 3,
    thu: 4,
    fri: 5,
    sat: 6,
    sun: 0,
  };
  useEffect(() => {
    const today = new Date().getDay(); // 4 => thu
    setIsToday(DAYS[label] === today);
  }, [label]);

  return (
    <S.Wrapper>
      <S.BarArea>
        <S.Bar
          height={() => calculateHeight(amount)}
          amount={amount}
          visibility={visibility}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          today={isToday}
        />
      </S.BarArea>
      <S.Label>{label}</S.Label>
    </S.Wrapper>
  );
}

export default Bar;
