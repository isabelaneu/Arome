import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/navbar";
import "./product.css"
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { useCarrinho } from "../../contexts/carinho.contexts";

interface Produto {
    id: number;
    nome: string;
    tipo: string;
    preco: number;
    qt_estoque: number;
    descricao: string;
    url_imagem: string;
}

function Product(){
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const location = useLocation();
    const produtos = location.state?.produtos as Produto[] || [];
    const [produto, setProduto] = useState<Produto | null>(null);
    const [quantidade, setQuantidade] = useState(0);

    const { adicionarAoCarrinho, removerDoCarrinho } = useCarrinho();

    useEffect(() => {
        const produtoEncontrado = produtos.find(p => p.id === Number(id));
        if (produtoEncontrado) {
            setProduto(produtoEncontrado);
        }
    }, [id, produtos]);

    if (!produto) return <div>Produto não encontrado.</div>;

    const incrementar = () => {
        const novaQuantidade = quantidade + 1;
        setQuantidade(novaQuantidade);
        adicionarAoCarrinho({ ...produto, quantidade: novaQuantidade });
    }

    const decrementar = () => {
        if (quantidade > 0) {
            const novaQuantidade = quantidade - 1;
            setQuantidade(novaQuantidade);

            if (novaQuantidade === 0) {
                removerDoCarrinho(produto.id);
            } else {
                adicionarAoCarrinho({ ...produto, quantidade: novaQuantidade });
            }
        }
    }

    return(
        <div className="fundoProduct">
            <Navbar cor={"#59291B"}></Navbar>
            <br /><br /><br />

            <div className="product">
                <img src={produto.url_imagem} alt={produto.nome} className="imgProduct" />

                <div className="info">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none" onClick={() => navigate("/shop")} style={{cursor:"pointer"}}>
                        <path d="M20.9208 11.2238V13.2238H8.92081L14.4208 18.7238L13.0008 20.1438L5.08081 12.2238L13.0008 4.30377L14.4208 5.72377L8.92081 11.2238H20.9208Z" fill="#59291B" />
                    </svg>
                    <h1 className="tituloProduct">{produto.nome}</h1>
                    <h3 className="priceProduct"> R$ {produto.preco.toFixed(2)} </h3>

                    <br />

                    <p className="description">{produto.descricao}</p>

                    <br /><hr /><br />

                    <p style={{paddingBottom:5, fontSize:20}}>Adicione ao carrinho!</p>  

                    <div className="quantidade">
                        {/* Diminuir quantidade */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none"
                            onClick={decrementar} style={{cursor: "pointer"}}>
                            <path d="M19.0544 13.3947H5.05444V11.3947H19.0544V13.3947Z" fill="#59291B"/>
                        </svg>
                        
                        <p>{quantidade}</p>

                        {/* Aumentar quantidade */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            onClick={incrementar} style={{cursor: "pointer"}}>
                            <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" fill="#59291B"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product;
