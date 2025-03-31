import React from "react";
import { useNavigate } from "react-router-dom";
import icon from "../../assets/icon.png";
import cart from "../../assets/cart-minus.svg";
import account from "../../assets/account-circle.svg";
import bars from "../../assets/Group 1.svg";

interface NavbarProps {
  cor: string; // Define que 'cor' é uma string
}

const NavbarComponent: React.FC<NavbarProps> = ({ cor }) => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="logo" onClick={() => navigate("/home")}>
        <img src={icon} alt="Logo AROME" className="icon" />
        <p className="tituloHome" style={{ color: cor }}>AROME</p>
      </div>
      <div className="menu">
        <a className="textoHome" style={{ color: cor }} onClick={() => navigate("/home")}>
          Home
        </a>
        <a className="textoHome" style={{ color: cor }} onClick={() => navigate("/shop")}>
          Shop
        </a>
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="30" viewBox="0 0 28 30" fill="none" className="icon-button" onClick={()=> navigate("/carrinho")}>
          <path d="M19.5 6V3.5H10.1667V6M9 21C7.71667 21 6.66667 22.125 6.66667 23.5C6.66667 24.875 7.71667 26 9 26C10.2833 26 11.3333 24.875 11.3333 23.5C11.3333 22.125 10.2833 21 9 21ZM20.6667 21C19.3833 21 18.3333 22.125 18.3333 23.5C18.3333 24.875 19.3833 26 20.6667 26C21.95 26 23 24.875 23 23.5C23 22.125 21.95 21 20.6667 21ZM9.23333 17V16.875L10.2833 14.75H18.9167C19.7333 14.75 20.55 14.25 20.9 13.5L25.45 4.75L23.4667 3.5L18.9167 12.25H10.75L5.85 1H2V3.5H4.33333L8.53333 13L6.9 16C6.78333 16.375 6.66667 16.75 6.66667 17.25C6.66667 18.625 7.71667 19.75 9 19.75H23V17.25H9.46667C9.35 17.25 9.23333 17.125 9.23333 17Z" fill={cor}/>
        </svg>
        {/* <svg xmlns="http://www.w3.org/2000/svg" width="38" height="36" viewBox="0 0 38 36" fill="none" className="icon-button" onClick={()=> navigate("/singup")}>
          <path d="M19.0001 28.8C15.0417 28.8 11.5426 26.88 9.50008 24C9.54758 21 15.8334 19.35 19.0001 19.35C22.1667 19.35 28.4526 21 28.5001 24C26.4576 26.88 22.9584 28.8 19.0001 28.8ZM19.0001 7.5C20.2599 7.5 21.468 7.97411 22.3588 8.81802C23.2496 9.66193 23.7501 10.8065 23.7501 12C23.7501 13.1935 23.2496 14.3381 22.3588 15.182C21.468 16.0259 20.2599 16.5 19.0001 16.5C17.7403 16.5 16.5321 16.0259 15.6413 15.182C14.7505 14.3381 14.2501 13.1935 14.2501 12C14.2501 10.8065 14.7505 9.66193 15.6413 8.81802C16.5321 7.97411 17.7403 7.5 19.0001 7.5ZM19.0001 3C16.9208 3 14.8619 3.38799 12.9409 4.14181C11.0199 4.89563 9.27448 6.00052 7.80422 7.3934C4.8349 10.2064 3.16675 14.0218 3.16675 18C3.16675 21.9782 4.8349 25.7936 7.80422 28.6066C9.27448 29.9995 11.0199 31.1044 12.9409 31.8582C14.8619 32.612 16.9208 33 19.0001 33C23.1993 33 27.2266 31.4196 30.1959 28.6066C33.1653 25.7936 34.8334 21.9782 34.8334 18C34.8334 9.705 27.7084 3 19.0001 3Z" fill={cor}/>
        </svg> */}
        {/* <svg xmlns="http://www.w3.org/2000/svg" width="37" height="23" viewBox="0 0 37 23" fill="none" className="icon-button">
          <line x1="36.1248" y1="1.25" x2="-2.67029e-05" y2="1.25" stroke={cor}/>
          <line x1="36.187" y1="11.75" x2="0.0622292" y2="11.75" stroke={cor}/>
          <line x1="36.187" y1="21.75" x2="0.0622292" y2="21.75" stroke={cor}/>
        </svg> */}
        <button className="areaRestrita" onClick={( () => navigate('/loginRestrict'))}>Área restrita</button>
      </div>
    </nav>
  );
};

export default NavbarComponent;
