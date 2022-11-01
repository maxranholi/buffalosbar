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

    return (
      <S.Header id="header">
        <div className={colorChange ? 'navbar colorChange' : 'navbar'}>
        <S.Nav id="nav" className={toggleMenu} >
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
            <S.MenuA href="#Menu" onClick={() => setToggleMenu("disabled")}>
              Menu
            </S.MenuA>
          </li>
          <li>
            <S.MenuA href="#Location" onClick={() => setToggleMenu("disabled")}>
              Localização
            </S.MenuA>
          </li>
        </S.MenuUl>
      </S.Nav>
        </div>
      
    </S.Header>
  );
};

export default Header;