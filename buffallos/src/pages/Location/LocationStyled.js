import styled from "styled-components";

export const SectionTitle = styled.h1`
  text-align: center;
  padding: 10px;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15%;
  height: 100%;
  width: 100%;
  background-color: #f3f4f6;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    height: 100%;
  }
`;

export const ContainerInfos = styled.section`
  display: flex;
  flex-direction: column;
  gap: 15%;

  @media (max-width: 768px) {
    flex-direction: row;
    gap: 5%;
    padding: 10px;
  }
`;

export const IframeMap = styled.iframe`
  width: 42vw;
  height: 500px;
  filter: invert(90%);
  border-radius: 5px;
  border: none;

  @media (max-width: 768px) {
    width: 95vw;
  }
`;

export const TitleLoc = styled.h1`
  font-size: 3rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const PLoc = styled.p`
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;
