import React, { useState } from "react";
import "./payment.css";
import Navbar from "../../components/navbar/navbar";

function Payment() {
    const [paymentMethod, setPaymentMethod] = useState("credito");
    const [cardholderName, setCardholderName] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    const [expiryDate, setExpiryDate] = useState("");
    const [cvv, setCvv] = useState("");

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     // Aqui você pode adicionar a lógica para processar o pagamento
    //     console.log("Dados do pagamento:", { cardholderName, cardNumber, expiryDate, cvv });
    // };

    return (
        <div>
            <Navbar cor={"#59291B"} />
            <br /><br />

            <div className="container">
                <h1>Pagamento</h1>
                {/* onSubmit={handleSubmit} */}
                <form >
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

                    {paymentMethod !== "pix" ? (
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
                        </>
                    ) : (
                        <div className="form-group">
                            <label htmlFor="qrcode">Escaneie o QR Code para pagamento via Pix</label>
                            <img src="link-do-seu-qrcode-aqui" alt="QR Code" id="qrcode" />
                        </div>
                    )}

                    <button type="submit">Pagar</button>
                </form>
            </div>
        </div>
    );
}

export default Payment;