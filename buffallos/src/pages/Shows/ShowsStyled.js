import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;
  width: 100%;
  background-color: #000;
  background-image: url("https://i.imgur.com/fLlpzez.png");
`;

export const ImgPost = styled.img`
  width: 100%;
  height: 100%;
`;

export const ImgWpp = styled.img`
  position: fixed;
  bottom: 1rem;
  right: 2.5rem;
  width: 200px;
  z-index: 10;
  cursor: pointer;

  @media (max-width: 1320px) and (min-width: 768px) {
    width: 170px;
    right: 1.5rem;
  }

  @media (max-width: 768px) {
    width: 150px;
    right: 0.5rem;
  }
`;
