import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 1rem;
  padding: 2rem;
  width: 60%;
  max-width: 600px;
  min-width: 530px;
  background-color: var(--very-pale-orange);
  border-radius: 1rem;

  @media screen and (max-width: 420px) {
    width: 90vw;
    max-width: none;
    min-width: unset;
  }
`;

export const Title = styled.h3`
  margin-bottom: 2.5rem;
  font-size: 2rem;
  color: var(--dark-brown);

  @media screen and (max-width: 420px) {
    font-size: 1.5rem;
  }
`;

export const Divider = styled.hr`
  margin: 2rem 0;
  height: 2px;
  border: none;
  background-color: var(--cream);

  @media screen and (max-width: 420px) {
    margin: 1.2rem 0;
  }
`;
