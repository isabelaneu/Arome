import React, { useState } from "react";
import './restrict.css';
import Navbar from "../../components/navbar/navbar";
import { adicionarProduto, listarClientes, removerProduto, atualizarCliente, listarProdutos,obterHistoricoVendas } from "../../services/restrict.service";
import Cookies from "js-cookie";
import { useCarrinho } from "../../contexts/carinho.contexts";


function Restrict() {
    const { carrinho } = useCarrinho(); 
    const [activeSection, setActiveSection] = useState<string | null>(null);
    const [removerID, setRemoverID] = useState<string>("");
    const [apiMessage, setApiMessage] = useState<string>("");
    const [clientes, setClientes] = useState<any[]>([]);
    const [produtos, setProdutos] = useState<any[]>([]);
    const [clienteParaAtualizar, setClienteParaAtualizar] = useState<any>(null);
    const [vendas, setVendas] = useState<any[]>([]);
    const [formData, setFormData] = useState({
        nome: "",
        tipo: "",
        preco: "",
        qntEstoque: "",
        descricao: "",
        imagem: ""
    });

    const clearApiMessage = (message: string, delay: number = 7000) => {
        setApiMessage(message);
        setTimeout(() => {
            setApiMessage("");
            setActiveSection(null);
        }, delay);
    };

    const toggleSection = async (section: string) => {
        const newSection = activeSection === section ? null : section;
        setActiveSection(newSection);
    
        switch (newSection ?? "") {
            case "vizualizarClientes":
                await handleSubmitVizualizarClientes();
                break;
            case "vizualizarProdutos":
                await handleSubmitVizualizarProdutos();
                break;
            case "historicoVendas":
                await handleSubmitHistoricoVendas();
                break;
            default:
                break;
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
    };

    const handleSubmitAdicionar = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const message = await adicionarProduto(formData);
            clearApiMessage(message);
            setFormData({
                nome: "",
                tipo: "",
                preco: "",
                qntEstoque: "",
                descricao: "",
                imagem: ""
            });
        } catch (error) {
            console.error(error);
            clearApiMessage("Erro ao cadastrar o produto. Tente novamente.");
        }
    };

    const handleSubmitVizualizarClientes = async () => {
        try {
            const data = await listarClientes();
            setClientes(data);
            clearApiMessage("Clientes carregados com sucesso.");
        } catch (error) {
            console.error(error);
            clearApiMessage("Erro ao carregar clientes.");
        }
    };

    const handleSubmitVizualizarProdutos = async () => {
        try {
            const data = await listarProdutos();
            setProdutos(data);
            clearApiMessage("Produtos carregados com sucesso.");
        } catch (error) {
            console.error(error);
            clearApiMessage("Erro ao carregar produtos.");
        }
    };

    const handleSubmitRemover = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await removerProduto(removerID);
            clearApiMessage("Produto removido com sucesso");
            setRemoverID("");
        } catch (error) {
            console.error(error);
            clearApiMessage("Erro ao remover o produto. Tente novamente.");
        }
    };

    const handleSubmitAtualizar = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!clienteParaAtualizar) return;

        try {
            const message = await atualizarCliente(clienteParaAtualizar.id, clienteParaAtualizar);
            clearApiMessage(message);
            setClienteParaAtualizar(null);
        } catch (error) {
            console.error(error);
            clearApiMessage("Erro ao atualizar o cliente. Tente novamente.");
        }
    };

    interface Produto {
        id: number;
        nome: string;
        quantidade: number;
        preco: number; 
    }
    
    interface Pedido {
        id: number;
        id_cliente: string;
        id_produto: number;
        valor_total: number;
        pedido_feito: boolean;
        produtos?: Produto[];
        quantidade?: number;  
        data?: string;       
    }
    

    const handleSubmitHistoricoVendas = async () => {
        try {
            const data: Pedido[] = await obterHistoricoVendas();
            
            const respostaProdutos = await fetch('https://arome-backend-1-4j41.onrender.com/produtos/listar');
            const produtosData: Produto[] = await respostaProdutos.json();
    
            if (!Array.isArray(produtosData)) {
                throw new Error("Produtos não retornados corretamente.");
            }
    
            const historicoCarrinho = JSON.parse(localStorage.getItem("historicoCarrinho") || "[]");
    
            const vendasComProdutos = data.map((pedido: Pedido) => {
                const produtosRelacionados = produtosData.filter(produto => produto.id === pedido.id_produto);
                const produtoNoCarrinho = historicoCarrinho.find((produto: Produto) => produto.id === pedido.id_produto);
    
                return {
                    ...pedido,
                    produtos: produtosRelacionados,
                    quantidade: produtoNoCarrinho ? produtoNoCarrinho.quantidade : 0,
                    data: produtoNoCarrinho ? produtoNoCarrinho.data : "",
                };
            });
    
            setVendas(vendasComProdutos);
        } catch (error) {
            console.error(error);
            setApiMessage("Erro ao carregar histórico de vendas.");
        }
    };
    
    
    
    return (
        <div className="fundoRestrict">
            <Navbar cor="#59291B" />
            <br /><br />
            <main>

            {/* Seção - Vizualizar produtos */}
            <section 
                    id="vizualizar-produto" 
                    style={{ maxHeight: activeSection === "vizualizarProdutos" ? "100%" : "10vh", overflow: "hidden", transition: "max-height 0.3s ease-in-out" }}
                >
                    <div className="opcao">
                        <div>
                            <h2>Visualizar Produtos</h2>
                            <p>Lista completa de produtos cadastrados.</p><br />
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none" 
                            onClick={() => toggleSection("vizualizarProdutos")}>
                            <path d="M11.1363 4.58197H13.1363V16.582L18.6363 11.082L20.0563 12.502L12.1363 20.422L4.21631 12.502L5.63631 11.082L11.1363 16.582V4.58197Z" fill="black"/>
                        </svg>
                    </div>

                    {apiMessage && <h1>{apiMessage}</h1>}

                    <div>
                        {produtos.length > 0 ? (
                            <ul>
                                {produtos.map((produto, index) => (
                                    <li key={index} style={{fontFamily:"Poppins"}}>
                                        <strong>Id:</strong> {produto.id} <br />
                                        <strong>Nome:</strong> {produto.nome} <br />
                                        <strong>Preço:</strong> {produto.preco} <br />
                                        <strong>Estoque:</strong> {produto.qt_estoque} <br />
                                        <hr />
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p>Nenhum produto encontrado.</p>
                        )}
                    </div>
                </section>


            {/* Seção Adicionar Produto */}
            <section 
                    id="add-produtos" 
                    style={{ maxHeight: activeSection === "addProdutos" ? "100%" : "10vh", overflow: "hidden", transition: "max-height 0.3s ease-in-out" }}
                >
                    <div className="opcao">
                        <div>
                            <h2>Adicionar Produtos</h2>
                            <p>Cadastre novos produtos que estejam em estoque.</p><br />
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none" 
                            onClick={() => toggleSection("addProdutos")}>
                            <path d="M11.1363 4.58197H13.1363V16.582L18.6363 11.082L20.0563 12.502L12.1363 20.422L4.21631 12.502L5.63631 11.082L11.1363 16.582V4.58197Z" fill="black"/>
                        </svg>
                    </div>
                    <form onSubmit={handleSubmitAdicionar}>
                        {Object.keys(formData).map(key => (
                            <div className="form-group" key={key}>
                                <label htmlFor={key}>{key.charAt(0).toUpperCase() + key.slice(1)}:</label>
                                <input
                                    type={key === "preco" || key === "qntEstoque" ? "number" : "text"}
                                    id={key}
                                    value={formData[key as keyof typeof formData]}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                        ))}
                        <button type="submit" style={{ width: '25%' }}>Cadastrar</button>
                    </form>
                    {apiMessage && <h1>{apiMessage}</h1>}
                </section>

            {/* Seção Remover Produto*/}
            <section 
                    id="remover-produtos" 
                    style={{ maxHeight: activeSection === "removerProdutos" ? "100%" : "10vh", overflow: "hidden", transition: "max-height 0.3s ease-in-out" }}
                >
                    <div className="opcao">
                        <div>
                            <h2>Remover Produtos</h2>
                            <p>Remova produtos do sistema.</p><br />
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none" 
                            onClick={() => toggleSection("removerProdutos")}>
                            <path d="M11.1363 4.58197H13.1363V16.582L18.6363 11.082L20.0563 12.502L12.1363 20.422L4.21631 12.502L5.63631 11.082L11.1363 16.582V4.58197Z" fill="black"/>
                        </svg>
                    </div>
                    <form onSubmit={handleSubmitRemover}>
                        <div className="form-group">
                            <label htmlFor="removerID">ID do Produto:</label>
                            <input 
                                type="text" 
                                id="removerID" 
                                value={removerID} 
                                onChange={(e) => setRemoverID(e.target.value)} 
                                required 
                            />
                        </div>
                        <button type="submit" style={{ width: '25%' }}>Remover</button>
                    </form>
                    {apiMessage && <h1>{apiMessage}</h1>}
                </section>

            {/* Seção "Histórico de Vendas" */}
            <section 
                id="historico-vendas" 
                style={{ maxHeight: activeSection === "historicoVendas" ? "100%" : "10vh", overflow: "hidden", transition: "max-height 0.3s ease-in-out" }}
            >
                <div className="opcao">
                    <div>
                        <h2>Histórico de Vendas</h2>
                        <p>Lista de vendas realizadas no sistema.</p><br />
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none" 
                        onClick={() => toggleSection("historicoVendas")}>
                        <path d="M11.1363 4.58197H13.1363V16.582L18.6363 11.082L20.0563 12.502L12.1363 20.422L4.21631 12.502L5.63631 11.082L11.1363 16.582V4.58197Z" fill="black"/>
                    </svg>
                </div>

                {apiMessage && <h1>{apiMessage}</h1>}

                <div>
                    {vendas.length > 0 ? (
                        <ul>
                            {vendas.map((venda, index) => (
                                <li key={index} style={{ fontFamily: "Poppins" }}>
                                    <strong>ID da Venda:</strong> {venda.id} <br />
                                    <strong>Produtos:</strong>
                                    <ul>
                                        {venda.produtos && venda.produtos.length > 0 ? (
                                            venda.produtos.map((produto: Produto, i: number) => (
                                                <li key={i}>
                                                    ID Produto: {produto.id} - Qtd: {produto.quantidade} - Preço: {produto.preco}
                                                </li>
                                            ))
                                        ) : (
                                            <p>Sem produtos nessa venda.</p>
                                        )}
                                    </ul>

                                    <strong>Quantidade Total:</strong> {venda.quantidade} <br />
                                    <strong>Data:</strong> {venda.data || "Data não disponível"} <br />
                                    <hr />
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>Nenhuma venda encontrada.</p>
                    )}
                </div>

            </section>

            {/* Seção "Atualizar Clientes" */}
            <section 
                    id="atualizar-clientes" 
                    style={{ maxHeight: activeSection === "atualizarCliente" ? "100%" : "10vh", overflow: "hidden", transition: "max-height 0.3s ease-in-out" }}
                >
                    <div className="opcao">
                        <div>
                            <h2>Atualizar Cliente</h2>
                            <p>Edite os dados do cliente e clique em atualizar.</p><br />
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none" 
                            onClick={() => toggleSection("atualizarCliente")}>
                            <path d="M11.1363 4.58197H13.1363V16.582L18.6363 11.082L20.0563 12.502L12.1363 20.422L4.21631 12.502L5.63631 11.082L11.1363 16.582V4.58197Z" fill="black"/>
                        </svg>
                    </div>

                    <form onSubmit={handleSubmitAtualizar}>
                        <div className="form-group">
                            <input
                                type="number"
                                placeholder="ID do Cliente"
                                value={clienteParaAtualizar?.id || ""}
                                onChange={(e) => setClienteParaAtualizar({ ...clienteParaAtualizar, id: Number(e.target.value) })}
                                required
                            />
                            <input
                                type="text"
                                placeholder="Nome"
                                value={clienteParaAtualizar?.nome || ""}
                                onChange={(e) => setClienteParaAtualizar({ ...clienteParaAtualizar, nome: e.target.value })}
                                required
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                value={clienteParaAtualizar?.email || ""}
                                onChange={(e) => setClienteParaAtualizar({ ...clienteParaAtualizar, email: e.target.value })}
                                required
                            />
                            <input
                                type="text"
                                placeholder="CPF"
                                value={clienteParaAtualizar?.cpf || ""}
                                onChange={(e) => setClienteParaAtualizar({ ...clienteParaAtualizar, cpf: e.target.value })}
                                required
                            />
                            <input
                                type="password"
                                placeholder="Senha"
                                value={clienteParaAtualizar?.senha || ""}
                                onChange={(e) => setClienteParaAtualizar({ ...clienteParaAtualizar, senha: e.target.value })}
                                required
                            />
                            <input
                                type="datetime-local"
                                value={clienteParaAtualizar?.data_nascimento?.slice(0, 16) || ""}
                                onChange={(e) => {
                                    const dateValue = new Date(e.target.value).toISOString();
                                    setClienteParaAtualizar({ ...clienteParaAtualizar, data_nascimento: dateValue });
                                }}
                                required
                            />
                        </div>
                        <button type="submit">Atualizar Cliente</button>
                    </form>
                    {apiMessage && <h1>{apiMessage}</h1>}
                </section>

            {/* Seção "Vizualizar Clientes" */}
            <section 
                    id="vizualizar-clientes" 
                    style={{ maxHeight: activeSection === "vizualizarClientes" ? "100%" : "10vh", overflow: "hidden", transition: "max-height 0.3s ease-in-out" }}
                >
                    <div className="opcao">
                        <div>
                            <h2>Visualizar Clientes</h2>
                            <p>Lista completa de clientes cadastrados.</p><br />
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none" 
                            onClick={() => toggleSection("vizualizarClientes")}>
                            <path d="M11.1363 4.58197H13.1363V16.582L18.6363 11.082L20.0563 12.502L12.1363 20.422L4.21631 12.502L5.63631 11.082L11.1363 16.582V4.58197Z" fill="black"/>
                        </svg>
                    </div>

                    {apiMessage && <h1>{apiMessage}</h1>}

                    <div>
                        {clientes.length > 0 ? (
                            <ul>
                                {clientes.map((cliente, index) => (
                                    <li key={index} style={{fontFamily:"Poppins"}}>
                                        <strong>Id:</strong> {cliente.id} <br />
                                        <strong>Nome:</strong> {cliente.nome} <br />
                                        <strong>Email:</strong> {cliente.email} <br />
                                        <strong>CPF:</strong> {cliente.cpf} <br />
                                        <hr />
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p>Nenhum cliente encontrado.</p>
                        )}
                    </div>
                </section>

            </main>
        </div>
    );
}

export default Restrict;
