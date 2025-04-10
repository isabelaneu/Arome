export const apiBaseUrl = "https://arome-backend-1-4j41.onrender.com";

// Adicionar Produto
export const adicionarProduto = async (produto: any) => {
    const response = await fetch(`${apiBaseUrl}/produtos/adicionar`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(produto)
    });
    return response.text();
};

// Remover Produto
export const removerProduto = async (removerNome: string) => {
    const response = await fetch(`${apiBaseUrl}/produtos/${removerNome}`, {
        method: "DELETE",
    });
    return response.text();
};

// Histórico de Vendas
export const obterHistoricoVendas = async () => {
    const response = await fetch(`${apiBaseUrl}/vendas/historico`);
    return response.json();
};

// Atualizar Cliente
export const atualizarCliente = async (id: number, clienteData: any) => {
    const body = JSON.stringify({
        id: clienteData.id,
        nome: clienteData.nome,
        email: clienteData.email,
        cpf: clienteData.cpf,
        senha: clienteData.senha,
        data_nascimento: clienteData.data_nascimento,
    });

    const response = await fetch(`${apiBaseUrl}/clientes/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: body,
    });

    if (!response.ok) {
        throw new Error("Erro ao atualizar o cliente.");
    }
    
    return response.text();
};

// Visualizar Clientes
export const listarClientes = async () => {
    const response = await fetch(`${apiBaseUrl}/clientes/listar`);
    return response.json();
};

export const listarProdutos = async () => {
    const response = await fetch(`${apiBaseUrl}/produtos/listar`);
    return response.json();
};
