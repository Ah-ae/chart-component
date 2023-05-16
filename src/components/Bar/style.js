import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Bar = styled.div`
  width: 56px;
  height: ${(props) => props.height};
  background-color: hsl(10, 79%, 65%);
  border-radius: 6px;
  cursor: pointer;

  :hover {
    background-color: rgba(236, 119, 95, 0.6);
  }
`;

export const Amount = styled.p`
  width: 72px;
  height: 40px;
  padding: 0.6rem 0.2rem;
  margin-bottom: 0.4rem;
  background-color: hsl(25, 47%, 15%);
  color: #fff;
  border-radius: 6px;
  text-align: center;
  visibility: ${(props) => props.visibility};
`;
