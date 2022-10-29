import { Container, SubTitle, Texts } from "./MainStyled";
import image from "../../assets/background-main.png";
import { ImageDesktop } from "./MainStyled";
import { Title } from "./MainStyled";
import { ImageMobile } from "./MainStyled";
import backgoundblack from "../../assets/backgroundMobile.png";
import { ImgWpp } from "./MainStyled";
import wpp from "../../assets/botaoWpp.png";
import Header from "../Header/Header";

const Main = () => {
  return (
    <Container>
      <Header />
      <ImageDesktop src={image} />
      <ImageMobile src={backgoundblack} />
      <Texts>
        <Title>BUFFALLOS BAR</Title>
        <SubTitle>Cerveja, Drinks, Comida boa e Rock</SubTitle>
      </Texts>
        <a href="https://wa.me/+5521976460392?text=Reservas" target="blank">
          <ImgWpp src={wpp} alt="botão do whatsapp" />
        </a>
    </Container>
  );
};

export default Main;
