import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ThisMonthArea = styled.div``;

export const LastMonthArea = styled.div`
  align-self: flex-end;
`;

export const Desc = styled.p`
  color: var(--medium-brown);

  @media screen and (max-width: 420px) {
    font-size: 1rem;
  }
`;
export const Number = styled.p`
  font-size: 3rem;
  font-weight: 700;

  @media screen and (max-width: 420px) {
    font-size: 1.8rem;
  }
`;
export const Percentage = styled(Number)`
  font-size: 1rem;
  text-align: right;
`;
