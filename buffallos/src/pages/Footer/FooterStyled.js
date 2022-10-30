import styled from "styled-components";

export const Container = styled.footer`
  display: flex;
  justify-content: space-around;
  gap: 30%;
  align-items: center;
  background-color: #2b2b2b;
  width: 100%;
  color: #ffff;
  margin-top: 80px;

  @media (max-width: 768px) {
    margin-top: 0px;
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
