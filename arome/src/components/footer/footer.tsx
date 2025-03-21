import React from "react";
import "./footer.css"
import icon from "../../assets/icon.png"

function Footer(){
    return(
        <div className="footer">
            <div className="logoFooter">
                <img src={icon} alt="" className="icon"/>
                <p className="arome">AROME</p>
            </div>
            <div className="descricao">
                <p className="textoFooter">
                    Feito com ingredientes naturais |  Produto Nacional | Sustentável e Relaxante 

                    Tem dúvidas? Fale conosco: arome@gmail.com | Siga-nos no Instagram: @arome_oficial | Facebook: @arome_oficial

                    © 2025 Arome 
                </p>
            </div>

        </div>
    )
}

export default Footer