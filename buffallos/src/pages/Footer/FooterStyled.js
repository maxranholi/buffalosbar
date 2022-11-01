import styled from "styled-components";

export const Container = styled.footer`
  display: flex;
  justify-content: space-around;
  gap: 30%;
  align-items: center;
  background-color: #141414;
  width: 100%;
  color: #ffff;
  margin-top: 80px;

  @media (max-width: 1366px) {
    gap: 40%;
  }

  @media (max-width: 768px) {
    margin-top: 0px;
    height: 4rem;
  }
`;

export const DivMedia = styled.div`
  display: flex;
  gap: 2rem;
`;

export const PFooter = styled.p`
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;
