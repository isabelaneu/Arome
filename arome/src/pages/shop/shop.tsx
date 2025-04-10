import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/navbar";
import "./shop.css"; 
import { useNavigate } from "react-router-dom";
import { useCarrinho } from "../../contexts/carinho.contexts"; 

interface Produto {
    id: number;
    nome: string;
    tipo: string;
    preco: number;
    qt_estoque: number;
    descricao: string;
    url_imagem: string;
    quantidade?: number;
}

function Shop () {
    const navigate = useNavigate();
    const [produtos, setProdutos] = useState<Produto[]>([]);
    const [loading, setLoading] = useState(true);
    const { adicionarAoCarrinho } = useCarrinho(); 
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        const fetchProdutos = async () => {
            try {
                const response = await fetch("https://arome-backend-udit.onrender.com/produtos/listar");
                const data = await response.json();
                setProdutos(data);
                setLoading(false);
            } catch (error) {
                console.error("Erro ao buscar produtos:", error);
                setLoading(false);
            }
        };

        fetchProdutos();
    }, []);

    const handleAdicionarAoCarrinho = (produto: Produto) => {
        adicionarAoCarrinho({ ...produto, quantidade: 1 });
        setModalVisible(true);
        setTimeout(() => {
            setModalVisible(false);
        }, 2000); // Modal ficará visível por 2 segundos
    };

    if (loading) return (
        <div> 
            <div className="modal-content">
                <img src="https://cdn.pixabay.com/animation/2023/08/11/21/18/21-18-05-265_512.gif" alt="Concluído" />
                <p>Carregando Produtos...</p>
            </div>
        </div>
    );

    return(
        <div className="fundoShop">
            <Navbar cor={"#59291B"}></Navbar>
            <br /><br /><br />
            <p className="tituloShop">Nossas Velas</p>
            <br /><br />

            <div className="viewCardShop">
                {produtos.map(produto => (
                    <div className="cardShop" key={produto.id} onClick={() => navigate(`/product/${produto.id}`, { state: { produtos } })}>
                        <img src={produto.url_imagem} alt={produto.nome} className="imgCardShop"/>
                        <p>{produto.nome} - R$ {produto.preco.toFixed(2)}</p> <br />
                        <button 
                            onClick={(e) => { 
                                e.stopPropagation();
                                handleAdicionarAoCarrinho(produto);
                            }}
                        >
                            Adicionar ao Carrinho
                        </button>
                    </div>
                ))}
            </div>

            {modalVisible && (
                <div className="modal">
                    <div className="modal-content-gif">
                        <img src="https://media.tenor.com/tVQbHgFJ1t4AAAAj/confirmado.gif" alt="Concluído" className="modal>p"/>
                        <p>Produto Adicionado!</p>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Shop;
