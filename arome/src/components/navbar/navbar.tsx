import React from "react";
import { useNavigate } from "react-router-dom";
import icon from "../../assets/icon.png";
import "./navbar.css"

interface NavbarProps {
  cor: string; 
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
        <button className="areaRestrita" onClick={( () => navigate('/loginRestrict'))}>Área restrita</button>
      </div>
    </nav>
  );
};

export default NavbarComponent;
