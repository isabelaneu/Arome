import React from "react";
import NavbarComponent from "../../components/navbar/navbar";
import "./carrinho.css"
import { useNavigate } from "react-router-dom";


function Carrinho(){
    const navigate = useNavigate();

    return(
        <div className="fundoCarrinho">
            <NavbarComponent cor="#59291B"></NavbarComponent>
            <br /><br /><br />
            <p className="tituloShop">- Seu Carrinho -</p>

            <br /><br />

            <div className="backToShop" style={{display: 'flex'}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none" onClick={() => navigate("/shop")} style={{cursor:"pointer"}}>
                    <path d="M20.9208 11.2238V13.2238H8.92081L14.4208 18.7238L13.0008 20.1438L5.08081 12.2238L13.0008 4.30377L14.4208 5.72377L8.92081 11.2238H20.9208Z" fill="#59291B" />
                </svg>
                <p style={{fontFamily: "Poppins", color: '#59291B', cursor: 'pointer'}} onClick={() => navigate("/shop")}>Continuar comprando</p>
            </div>

            <br /><br />
            <div className="cardCompra">
                <img src="https://i.pinimg.com/474x/09/21/27/09212787e98f0a771be6d9b72960d1de.jpg" alt="" className="imgCompra"/>
                <p>Mel & Baunilha - R$ 59,90 </p>

                <div className="quantidade">
                    {/* - */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                        <path d="M19.0544 13.3947H5.05444V11.3947H19.0544V13.3947Z" fill="#59291B"/>
                    </svg>
                    <p>2</p>
                    {/* + */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" fill="#59291B"/>
                    </svg>
                </div>
            </div>
            <div className="cardCompra">
                <img src="https://i.pinimg.com/474x/09/21/27/09212787e98f0a771be6d9b72960d1de.jpg" alt="" className="imgCompra"/>
                <p>Mel & Baunilha - R$ 59,90 </p>

                <div className="quantidade">
                    {/* - */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                            <path d="M19.0544 13.3947H5.05444V11.3947H19.0544V13.3947Z" fill="#59291B"/>
                        </svg>
                        <p>2</p>
                        {/* + */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" fill="#59291B"/>
                        </svg>
                </div>
            </div>
            <br /><br />
            <div className="buttonPag">
                <button onClick={() => navigate("/payment")}>Finalizar pagamento</button>
            </div>
            <br /><br /><br />
        </div>
    )
}

export default Carrinho