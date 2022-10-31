import * as S from "./HeaderStyled";
import { useState } from "react";


const Header = () => {
    const [toggleMenu, setToggleMenu] = useState("disabled");
    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () =>{
       if(window.scrollY > 0){
         setColorchange(true);
       }
       else{
         setColorchange(false);
       }
    };
    window.addEventListener('scroll', changeNavbarColor);

    const toggleState = () => {
      if (toggleMenu === "disabled") {
        setToggleMenu("active");
      } else {
        setToggleMenu("disabled");
      }
    };

    //window.scrollTo(0, 750)
    // const scrollTop = (param) => {
    //   window.scrollTo(0, param);
    //   setToggleMenu("disabled");
    // };

    return (
      <S.Header id="header">
        <S.Nav id="nav" className={colorChange ? 'navbar colorChange' : 'navbar'}>
          <S.BtnMobile
            onClick={() => toggleState()}
            aria-label="Abrir Menu"
            id="btn-mobile"
            aria-haspopup="true"
            aria-controls="menu"
            aria-expanded="false"
          >
            <S.Hamburger id="hamburger"></S.Hamburger>
          </S.BtnMobile>
          <S.MenuUl id="menu" role="menu">
            <li>
              <S.MenuA href="#Shows" onClick={() => setToggleMenu("disabled")}>
                Shows
              </S.MenuA>
            </li>
            <li>
              <S.TagA href="http://www.buffallosbar.com.br/cardapio/qr/" target="blank">Menu</S.TagA>           
            </li>
            <li>
              <S.MenuA href="#Location" onClick={() => setToggleMenu("disabled")}>
                Localiação
              </S.MenuA>
            </li>
          </S.MenuUl>
        </S.Nav>
      </S.Header>
    );
};

export default Header;