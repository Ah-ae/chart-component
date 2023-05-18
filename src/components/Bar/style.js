import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const BarArea = styled.div`
  height: 13rem;
  display: flex;
  align-items: flex-end;
`;

export const Bar = styled.div`
  position: relative;
  margin: 0 0.5rem;
  width: 3.5rem;
  height: ${(props) => props.height};
  background-color: ${(props) =>
    props.today ? "var(--cyan)" : "var(--soft-red)"};
  border-radius: 0.375rem;
  cursor: pointer;

  :hover {
    background-color: ${(props) =>
      props.today ? "var(--cyan-hover)" : "var(--soft-red-hover)"};
  }

  &:before {
    content: "${(props) => `$${props.amount}`}";
    position: absolute;
    top: -3rem;
    left: -0.5rem;
    width: 4.5rem;
    padding: 0.6rem 0.2rem;
    margin-bottom: 0.4rem;
    background-color: var(--dark-brown);
    color: #fff;
    border-radius: 0.375rem;
    text-align: center;
    visibility: ${(props) => props.visibility};
  }
`;

export const Label = styled.p`
  margin-top: 0.4rem;
  color: var(--medium-brown);
`;
