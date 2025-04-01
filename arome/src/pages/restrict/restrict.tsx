import React, { useState } from "react";
import './restrict.css';
import Navbar from "../../components/navbar/navbar";

function Restrict() {
    // Estado que armazena a seção atualmente aberta
    const [activeSection, setActiveSection] = useState<string | null>(null);

    const toggleSection = (section: string) => {
        setActiveSection(activeSection === section ? null : section);
    };


    return (
        <div className="fundoRestrict">
            <Navbar cor="#59291B" />
            <br /><br />
            <main>
                {/* Seção "Adicionar Produtos" */}
                <section 
                    id="add-produtos" 
                    style={{ maxHeight: activeSection === "addProdutos" ? "100%" : "10vh", overflow: "hidden", transition: "max-height 0.3s ease-in-out" }}
                >
                    <div className="opcao">
                        <div>
                            <h2>Adicionar Produtos</h2>
                            <p>Cadastre novos produtos que estejam em estoque</p><br />
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none" 
                            onClick={() => toggleSection("addProdutos")}>
                            <path d="M11.1363 4.58197H13.1363V16.582L18.6363 11.082L20.0563 12.502L12.1363 20.422L4.21631 12.502L5.63631 11.082L11.1363 16.582V4.58197Z" fill="black"/>
                        </svg>
                    </div>
                    <form>
                        <div className="form-group">
                            <label htmlFor="nome">Nome:</label>
                            <input placeholder="Digite o nome do produto" type="text" id="nome" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="tipo">Tipo:</label>
                            <input placeholder="Digite o tipo do produto" type="text" id="tipo" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="preco">Preço:</label>
                            <input placeholder="Digite o preço do produto" type="number" id="preco" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="qntEstoque">Quantidade em Estoque:</label>
                            <input placeholder="Digite a quantidade em estoque do produto" type="number" id="qntEstoque" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="descricao">Descrição:</label>
                            <input placeholder="Digite a descrição do produto" type="text" id="descricao" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="imagem">Imagem:</label>
                            <input placeholder="Coloque o link da imagem do produto" type="text" id="imagem" required />
                        </div>
                        <button type="submit" style={{ width: '25%' }}>Cadastrar</button>
                    </form>
                </section>

                {/* Seção "Remover Produtos" */}
                <section 
                    id="remover-produtos" 
                    style={{ maxHeight: activeSection === "removerProdutos" ? "100%" : "10vh", overflow: "hidden", transition: "max-height 0.3s ease-in-out" }}
                >
                    <div className="opcao">
                        <div>
                            <h2>Remover Produtos</h2>
                            <p>Remova produtos do sistema</p><br />
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none" 
                            onClick={() => toggleSection("removerProdutos")}>
                            <path d="M11.1363 4.58197H13.1363V16.582L18.6363 11.082L20.0563 12.502L12.1363 20.422L4.21631 12.502L5.63631 11.082L11.1363 16.582V4.58197Z" fill="black"/>
                        </svg>
                    </div>
                    <form>
                        <div className="form-group">
                            <label htmlFor="nome">Nome:</label>
                            <input placeholder="Digite o nome do produto" type="text" id="nome" required />
                        </div>
                        <button type="submit" style={{ width: '25%' }}>Remover</button>
                    </form>
                </section>

                {/* Seção "Histórico de Vendas" */}
                <section 
                    id="historico-vendas" 
                    style={{ maxHeight: activeSection === "historicoVendas" ? "100%" : "10vh", overflow: "hidden", transition: "max-height 0.3s ease-in-out" }}
                >
                    <div className="opcao">
                        <div>
                            <h2>Histórico de Vendas</h2>
                            <p>Lista de vendas realizadas.</p><br />
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none" 
                            onClick={() => toggleSection("historicoVendas")}>
                            <path d="M11.1363 4.58197H13.1363V16.582L18.6363 11.082L20.0563 12.502L12.1363 20.422L4.21631 12.502L5.63631 11.082L11.1363 16.582V4.58197Z" fill="black"/>
                        </svg>
                    </div>
                </section>

                {/* Seção "Atualizar Clientes" */}
                <section 
                    id="atualizar-clientes" 
                    style={{ maxHeight: activeSection === "atualizarCliente" ? "100%" : "10vh", overflow: "hidden", transition: "max-height 0.3s ease-in-out" }}
                >
                    <div className="opcao">
                        <div>
                            <h2>Atualizar Clientes</h2>
                            <p>Formulário para atualizar e visualizar clientes.</p><br />
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none" 
                            onClick={() => toggleSection("atualizarCliente")}>
                            <path d="M11.1363 4.58197H13.1363V16.582L18.6363 11.082L20.0563 12.502L12.1363 20.422L4.21631 12.502L5.63631 11.082L11.1363 16.582V4.58197Z" fill="black"/>
                        </svg>
                    </div>
                </section>

                {/* Seção "Atualizar Clientes" */}
                <section 
                    id="atualizar-clientes" 
                    style={{ maxHeight: activeSection === "atualizarCliente" ? "100%" : "10vh", overflow: "hidden", transition: "max-height 0.3s ease-in-out" }}
                >
                    <div className="opcao">
                        <div>
                            <h2>Vizualizar Clientes</h2>
                            <p>Formulário para atualizar e visualizar clientes.</p><br />
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none" 
                            onClick={() => toggleSection("atualizarCliente")}>
                            <path d="M11.1363 4.58197H13.1363V16.582L18.6363 11.082L20.0563 12.502L12.1363 20.422L4.21631 12.502L5.63631 11.082L11.1363 16.582V4.58197Z" fill="black"/>
                        </svg>
                    </div>
                </section>

            

            </main>
        </div>
    );
}

export default Restrict;
