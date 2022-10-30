import * as S from "./FooterStyled";
import instagram from "../../assets/Instagram.png";
import facebook from "../../assets/Facebook.png";

const Footer = () => {
  return (
    <>
      <S.Container>
        <S.DivMedia>
          <a href="https://www.instagram.com/buffallosbar/" target="blank"><img src={instagram} alt="logo do facebook"/></a>
          <a href="https://pt-br.facebook.com/buffallosbar/" target="blank"><img src={facebook} alt="logo do instagram"/></a>
        </S.DivMedia>
        <S.PFooter>© 2022 Buffallos Bar </S.PFooter>
      </S.Container>
    </>
  );
};

export default Footer;
