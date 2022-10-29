import styled from "styled-components";

export const Container = styled.main`
  height: 100vh;
  width: 100%;
  display: flex;
  background-color: #f3f4f6;
`;
export const ImageDesktop = styled.img`
  background-image: url(${(props) => props.img});
  width: 45%;
  height: 100vh;

  @media (max-width: 768px) {
    display: none;
  }
`;
export const ImageMobile = styled.img`
  background-image: url(${(props) => props.img});
  display: none;

  @media (max-width: 769px) {
    display: flex;
    width: 100%;
  }
`;

export const Texts = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  line-height: 1rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Title = styled.h1`
  flex-wrap: wrap;
  font-size: 6.5rem;
  font-family: Alfa Slab One;
  color: #131313;

  @media (max-width: 1755px) {
    font-size: 4.6rem;
  }

  @media (max-width: 1721px) {
    font-size: 4.5rem;
  }

  @media (max-width: 1366px) {
    font-size: 4.6rem;
  }

  @media (max-width: 1232px) {
    font-size: 4rem;
  }

  @media (max-width: 1075px) {
    font-size: 3.7rem;
  }

  @media (max-width: 997px) {
    font-size: 3.4rem;
  }

  @media (max-width: 913px) {
    font-size: 3rem;
  }

   @media (max-width: 807px) {
    font-size: 2.8rem;
  }
`;
export const SubTitle = styled.h2`
  font-size: 3.5rem;
  color: #131313;

  @media (max-width: 1755px) {
    font-size: 3rem;
  }

  @media (max-width: 1721px) {
    font-size: 2rem;
  }

  @media (max-width: 1366px) {
    font-size: 2.5rem;
  }

  @media (max-width: 1075px) {
    font-size: 2.2rem;
  }

  @media (max-width: 997px) {
    font-size: 2rem;
  }

  @media (max-width: 847px) {
    font-size: 1.8rem;
  }
`;


export const ImgWpp = styled.img`
  position: fixed;
  bottom: 0.5rem;
  right: 1.5rem;
  width: 200px;
  z-index: 10;
  cursor: pointer;

  @media (max-width: 1320px) and (min-width: 768px) {
    width: 170px;
    right: 1rem;
  }

  @media (max-width: 768px) {
    width: 150px;
    right: 0.5rem;
  }
`;
