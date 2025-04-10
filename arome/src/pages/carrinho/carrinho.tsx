import React from "react";
import { useCarrinho } from "../../contexts/carinho.contexts";
import NavbarComponent from "../../components/navbar/navbar";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/icon.png"
import "./carrinho.css";

function Carrinho() {
    const navigate = useNavigate();
    const { carrinho, atualizarQuantidade, removerDoCarrinho } = useCarrinho();

    return (
        <div className="fundoCarrinho">
            <NavbarComponent cor="#59291B" />
            <br /><br /><br />
            <p className="tituloShop">Seu Carrinho</p>
            <br /><br />

            <div className="backToShop" style={{display: 'flex'}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none" onClick={() => navigate("/shop")} style={{cursor:"pointer"}}>
                    <path d="M20.9208 11.2238V13.2238H8.92081L14.4208 18.7238L13.0008 20.1438L5.08081 12.2238L13.0008 4.30377L14.4208 5.72377L8.92081 11.2238H20.9208Z" fill="#59291B" />
                </svg>
                <p style={{fontFamily: "Poppins", color: '#59291B', cursor: 'pointer'}} onClick={() => navigate("/shop")}>Continuar comprando</p>
            </div>

            <br /><br />

            {carrinho.length === 0 ? (
                <img style={{marginLeft:"50%"}} src={logo} alt="" />
            ) : (
                carrinho.map(produto => (
                    <div className="cardCompra" key={produto.id}>
                        <img src={produto.url_imagem} alt={produto.nome} className="imgCompra"/>
                        <p>{produto.nome} - R$ {(produto.preco*produto.quantidade).toFixed(2)}</p>
                        
                        <div style={{display:"flex"}}>

                            <div className="quantidade">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none" onClick={() => atualizarQuantidade(produto.id, produto.quantidade - 1)} style={{cursor: "pointer"}}>
                                    <path d="M19.0544 13.3947H5.05444V11.3947H19.0544V13.3947Z" fill="#59291B"/>
                                </svg>
                                <p>{produto.quantidade}</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" onClick={() => atualizarQuantidade(produto.id, produto.quantidade + 1)} style={{cursor: "pointer"}}>
                                    <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" fill="#59291B"/>
                                </svg>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none" onClick={() => removerDoCarrinho(produto.id)}>
                                <path d="M6.06897 19.6897C6.06897 20.2201 6.27968 20.7288 6.65476 21.1039C7.02983 21.479 7.53854 21.6897 8.06897 21.6897H16.069C16.5994 21.6897 17.1081 21.479 17.4832 21.1039C17.8583 20.7288 18.069 20.2201 18.069 19.6897V7.6897H6.06897V19.6897ZM8.06897 9.6897H16.069V19.6897H8.06897V9.6897ZM15.569 4.6897L14.569 3.6897H9.56897L8.56897 4.6897H5.06897V6.6897H19.069V4.6897H15.569Z" fill="#59291B"/>
                            </svg>
                        </div>

                    </div>
                ))
            )}
            
            <br /><br />

            {carrinho.length > 0 && ( 
                <div className="buttonPag">
                    <button onClick={() => navigate("/payment")}>Finalizar pagamento</button>
                </div>
            )}


            <br /><br /><br />
        </div>
    );
}

export default Carrinho;
