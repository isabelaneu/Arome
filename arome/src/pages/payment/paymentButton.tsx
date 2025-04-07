import React, { useState, useEffect } from "react";

const PaymentButton: React.FC = () => {
  const [idPedido, setIdPedido] = useState<number | null>(null);

  useEffect(() => {
    const fetchUltimoPedido = async () => {
      try {
        const response = await fetch("https://arome-backend-udit.onrender.com/pedidos/ultimoPedido"); 
        if (!response.ok) {
          throw new Error("Erro ao buscar pedido");
        }
        const data = await response.json();
        setIdPedido(data.id);
      } catch (error) {
        console.error("Erro ao buscar pedido", error);
      }
    };
    fetchUltimoPedido();
  }, []);

  const handlePagamento = async () => {
    if (!idPedido) {
      console.error("ID do pedido não encontrado");
      return;
    }
    try {
      const response = await fetch(
        `https://arome-backend-udit.onrender.com/pedidos/buscar/{idPedido}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/pdf",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Erro ao gerar nota fiscal");
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "nota_fiscal.pdf";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } catch (error) {
      console.error("Erro ao processar pagamento e gerar nota fiscal", error);
    }
  };

  return (
    <button onClick={handlePagamento} className="bg-pink" disabled={!idPedido}>
      Pagar e Gerar Nota Fiscal
    </button>
  );
};

export default PaymentButton;
