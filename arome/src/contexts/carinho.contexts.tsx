// src/contexts/CarrinhoContext.tsx

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Produto {
    id: number;
    nome: string;
    tipo: string;
    preco: number;
    qt_estoque: number;
    descricao: string;
    url_imagem: string;
    quantidade: number; // Adicionado para controle do carrinho
}

interface CarrinhoContextType {
    carrinho: Produto[];
    adicionarAoCarrinho: (produto: Produto) => void;
    removerDoCarrinho: (produtoId: number) => void;
    atualizarQuantidade: (produtoId: number, quantidade: number) => void;
}

interface CarrinhoContextType {
    carrinho: Produto[];
    adicionarAoCarrinho: (produto: Produto) => void;
    removerDoCarrinho: (produtoId: number) => void;
    atualizarQuantidade: (produtoId: number, quantidade: number) => void;
    limparCarrinho: () => void; // <- aqui
}


const CarrinhoContext = createContext<CarrinhoContextType | undefined>(undefined);

export const CarrinhoProvider = ({ children }: { children: ReactNode }) => {
    const [carrinho, setCarrinho] = useState<Produto[]>([]);

    const adicionarAoCarrinho = (produto: Produto) => {
        setCarrinho(prevCarrinho => {
            const produtoExistente = prevCarrinho.find(p => p.id === produto.id);

            if (produtoExistente) {
                return prevCarrinho.map(p =>
                    p.id === produto.id ? { ...p, quantidade: p.quantidade + 1 } : p
                );
            }

            return [...prevCarrinho, { ...produto, quantidade: 1 }];
        });
    };

    const removerDoCarrinho = (produtoId: number) => {
        setCarrinho(prevCarrinho => prevCarrinho.filter(p => p.id !== produtoId));
    };

    const atualizarQuantidade = (produtoId: number, quantidade: number) => {
        setCarrinho(prevCarrinho => 
            prevCarrinho.map(p => p.id === produtoId ? { ...p, quantidade } : p)
        );
    };

    const limparCarrinho = () => {
        setCarrinho([]);
    };
    

    return (
        <CarrinhoContext.Provider value={{ carrinho, adicionarAoCarrinho, removerDoCarrinho, atualizarQuantidade, limparCarrinho }}>
            {children}
        </CarrinhoContext.Provider>
    );
};

export const useCarrinho = () => {
    const context = useContext(CarrinhoContext);
    if (!context) {
        throw new Error("useCarrinho deve ser usado dentro de um CarrinhoProvider");
    }
    return context;
};
