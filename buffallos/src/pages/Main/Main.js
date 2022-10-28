import { Container, SubTitle, Texts } from "./MainStyled"
import image from "../../assets/background-main.png"
import { ImageDesktop } from "./MainStyled"
import { Title } from "./MainStyled"
import { ImageMobile } from "./MainStyled"
import backgoundblack from "../../assets/backgroundMobile.png"

const Main = () => {
    return (
        <Container>
            <ImageDesktop src={image}/>
            <ImageMobile src={backgoundblack}/>
            <Texts>
            <Title>BUFFALLOS BAR</Title>
            <SubTitle>Cerveja, Drinks, Comida boa e Rock</SubTitle>
            </Texts>          
        </Container>
    )
}

export default Main