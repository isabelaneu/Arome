import React, { useState } from "react";
import "./payment.css";
import Navbar from "../../components/navbar/navbar";
import { useNavigate } from "react-router-dom";
import { useCarrinho } from "../../contexts/carinho.contexts";
import Cookies from "js-cookie";
import qrcode from '../../assets/image.png';

function Payment() {
    const { carrinho, limparCarrinho } = useCarrinho(); // <- usamos limparCarrinho aqui

    const [paymentMethod, setPaymentMethod] = useState("credito");
    const [cardholderName, setCardholderName] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    const [expiryDate, setExpiryDate] = useState("");
    const [cvv, setCvv] = useState("");
    const [parcelas, setParcelas] = useState("");
    const [modalVisible, setModalVisible] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
    
        try {
            const cliente = JSON.parse(Cookies.get("user") || "{}");
    
            const pedidos = carrinho.map(produto => ({
                id_cliente: cliente.id,
                id_produto: produto.id,
                valor_total: produto.preco * produto.quantidade,
                pedido_feito: false
            }));
    
            const response = await fetch("https://arome-backend-1-4j41.onrender.com/pedidos/adicionar", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ pedidos }) // <- correto!
            });
    
            if (!response.ok) {
                const errorData = await response.json();
                console.error("Erro ao registrar pedido:", errorData);
                throw new Error("Erro ao registrar pedido");
            }
    
            console.log("Pedidos enviados com sucesso:", pedidos);
            limparCarrinho();
    
            setModalVisible(true);
            setTimeout(() => {
                setModalVisible(false);
                navigate("/home");
            }, 4000);
    
        } catch (error) {
            console.error("Erro no pagamento:", error);
            alert("Houve um erro ao processar o pagamento.");
        }
    };    

    return (
        <div>
            <Navbar cor={"#59291B"} />
            <br /><br />

            <div className="backToCarrinho" style={{ display: 'flex' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none" onClick={() => navigate("/carrinho")} style={{ cursor: "pointer" }}>
                    <path d="M20.9208 11.2238V13.2238H8.92081L14.4208 18.7238L13.0008 20.1438L5.08081 12.2238L13.0008 4.30377L14.4208 5.72377L8.92081 11.2238H20.9208Z" fill="#59291B" />
                </svg>
                <p style={{ fontFamily: "Poppins", color: '#59291B', cursor: 'pointer' }} onClick={() => navigate("/carrinho")}>
                    Voltar para o carrinho
                </p>
            </div>

            <div className="containerPay">
                <h1>Pagamento</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="payment-method">Método de Pagamento</label>
                        <select
                            id="payment-method"
                            value={paymentMethod}
                            onChange={(e) => setPaymentMethod(e.target.value)}
                        >
                            <option value="credito">Crédito</option>
                            <option value="debito">Débito</option>
                            <option value="pix">Pix</option>
                        </select>
                    </div>

                    {(paymentMethod === "credito" || paymentMethod === "debito") && (
                        <>
                            <div className="form-group">
                                <label htmlFor="cardholder-name">Nome do Titular do Cartão</label>
                                <input
                                    type="text"
                                    id="cardholder-name"
                                    value={cardholderName}
                                    onChange={(e) => setCardholderName(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="card-number">Número do Cartão</label>
                                <input
                                    type="number"
                                    id="card-number"
                                    value={cardNumber}
                                    onChange={(e) => setCardNumber(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="expiry-date">Data de Validade (MM/AA)</label>
                                <input
                                    type="text"
                                    id="expiry-date"
                                    value={expiryDate}
                                    onChange={(e) => setExpiryDate(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="cvv">Código de Segurança (CVV)</label>
                                <input
                                    type="number"
                                    id="cvv"
                                    value={cvv}
                                    onChange={(e) => setCvv(e.target.value)}
                                    required
                                />
                            </div>

                            {paymentMethod === "credito" && (
                                <div className="form-group">
                                    <label htmlFor="parcelas">Quantidade de Parcelas</label>
                                    <select
                                        id="parcelas"
                                        value={parcelas}
                                        onChange={(e) => setParcelas(e.target.value)}
                                    >
                                        <option value="1">1x</option>
                                        <option value="2">2x</option>
                                        <option value="3">3x</option>
                                        <option value="4">4x</option>
                                    </select>
                                </div>
                            )}
                        </>
                    )}

                    {paymentMethod === "pix" && (
                        <div className="form-group">
                            <label htmlFor="qrcode">Escaneie o QR Code para pagamento via Pix</label>
                            <img src={qrcode} alt="QR Code" id="qrcode" />
                        </div>
                    )}

                    <button type="submit">Pagar</button>
                </form>
            </div>

            {modalVisible && (
                <div className="modal">
                    <div className="modal-content">
                        <img src="https://media.tenor.com/tVQbHgFJ1t4AAAAj/confirmado.gif" alt="Concluído" className="modal>p" />
                        <p>Pagamento Concluído!</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Payment;
