import styled from "styled-components";

// *Estilização do header
export const Header = styled.div`
  box-sizing: border-box;
  height: 100px;
  width: 100%;
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 2.8rem;
  justify-content: space-around;
  position: fixed;
  top: 0;
  z-index: 10;

  .navbar{
    background-color: transparent;
}
  
.navbar.colorChange{
    box-sizing: border-box;
  height: 100px;
  width: 100%;
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 2.8rem;
  justify-content: space-around;
  background: #f1f1f1;
  position: fixed;
  top: 0;
  z-index: 10;
  transition: all ease 0.4s;
}

  @media (max-width: 768px) {
    .navbar{
        box-sizing: border-box;
  height: 100px;
  width: 100%;
  padding: 1rem;
  display: flex;
  gap: 2.8rem;
  justify-content: flex-end;
  background: transparent;
  position: fixed;
  top: 0;
  z-index: 10;
}
  
.navbar.colorChange{
    box-sizing: border-box;
  height: 100px;
  width: 100%;
  padding: 1rem;
  display: flex;
  gap: 2.8rem;
  justify-content: flex-end;
  background: transparent;
  position: fixed;
  top: 0;
  z-index: 10;
}
}
`

// !CÓODIGO PORCO, MAS TABO
export const DivTest = styled.div`
  width: 1050px;
  margin-left: 60px;
  padding-top: 20px;
`;

// *Estilização da logo do header
export const ImgHeader = styled.img`
  cursor: pointer;
  @media (max-width: 768px) {
    margin-left: -76px;
  }
`;

// *Estilização do menu UL
export const MenuUl = styled.ul`
  display: flex;
  list-style: none;
  gap: 2rem;
  @media (max-width: 768px) {
    display: block;
    position: absolute;
    width: 100%;
    top: 70px;
    right: 0px;
    background: #f3f4f6;
    transition: 0.6s;
    z-index: 1000;
    height: 0px;
    visibility: hidden;
    overflow-y: hidden;
  }
`;

// *Estilização da tag a do menu
export const MenuA = styled.a`
  display: block;
  padding: 1.5rem;
  font-size: 2rem;
  color: black;
  text-decoration: none;
  cursor: pointer;
  position: relative;
  border: none;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-duration: 500ms;
  transition-property: color;
  @media (max-width: 768px) {
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  }
  &:focus:after {
    width: 100%;
    left: 0%;
  }
  &:hover:after {
    width: 100%;
    left: 0%;
  }
  &:after {
    content: "";
    pointer-events: none;
    bottom: -2px;
    left: 50%;
    position: absolute;
    width: 0%;
    height: 2px;
    background-color: #131313;
    transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
    transition-duration: 500ms;
    transition-property: width, left;
  }
`;
// *Estilização do botão para mobile
export const BtnMobile = styled.button`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    border: none;
    background: none;
    cursor: pointer;
    gap: 0.5rem;
  }
`;

// *Estilização do Hamburger
export const Hamburger = styled.span`
  @media (max-width: 768px) {
    border-top: 4px solid;
    width: 36px;
    color: #ffff;
    &::after,
    ::before {
      content: "";
      display: block;
      width: 36px;
      height: 4px;
      margin-top: 10px;
      transition: 0.3s;
      position: relative;
      background-color: #ffff;
    }
  }
`;

// *Estilização do Nav
export const Nav = styled.nav`
  @media (max-width: 768px) {
    &.active #hamburger {
      border-top-color: transparent;
    }
    &.active #hamburger::before {
      transform: rotate(125deg);
      background: #ffff;
    }
    &.active #hamburger::after {
      transform: rotate(-125deg);
      background-color: #ffff;
      top: -13px;
    }
    &.active #menu {
      height: calc(100vh - 70px);
      visibility: visible;
      overflow-y: auto;
    }
  }
`;

export const TagA = styled.a`
display: block;
  padding: 1.5rem;
  font-size: 2rem;
  color: black;
  text-decoration: none;
  cursor: pointer;
  position: relative;
  border: none;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-duration: 500ms;
  transition-property: color;
  @media (max-width: 768px) {
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  }
  &:focus:after {
    width: 100%;
    left: 0%;
  }
  &:hover:after {
    width: 100%;
    left: 0%;
  }
  &:after {
    content: "";
    pointer-events: none;
    bottom: -2px;
    left: 50%;
    position: absolute;
    width: 0%;
    height: 2px;
    background-color: #131313;
    transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
    transition-duration: 500ms;
    transition-property: width, left;
  }
`