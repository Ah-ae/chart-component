import styled from "styled-components";
import logo from "../../images/logo.svg";

export const Wrapper = styled.div`
  width: 60%;
  max-width: 600px;
  min-width: 530px;
  padding: 2rem;
  background-color: var(--soft-red);
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-position: 90% 50%;
  color: #fff;
  border-radius: 1rem;

  @media screen and (max-width: 420px) {
    width: 90vw;
    max-width: none;
    min-width: unset;
    padding: 1.5rem;
  }
`;

export const Balance = styled.h3`
  margin-top: 0.7rem;
  font-size: 2rem;

  @media screen and (max-width: 420px) {
    margin-top: 0.3rem;
    font-size: 1.8rem;
  }
`;
