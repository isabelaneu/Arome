import React, { useState } from "react";
import "./singup.css"; // Corrigido o nome do arquivo para "signup.css"
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/navbar";

function Signup() {

    const basePath = "/shop"; // Altere conforme necessário
    const navigate = useNavigate();
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [cpf, setCpf] = useState('');
    const [senha, setSenha] = useState('');

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
            
            const cliente = {
                nome,
                email,
                cpf,
                senha,
                data_nascimento: dataNascimento
            };

    try {
        const response = await fetch("http://localhost:8080/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json", // Define o tipo de conteúdo como JSON
            },
            body: JSON.stringify(cliente), // Envia os dados do cliente em formato JSON
        });

        if (response.ok) {
            const data = await response.json(); // Obtemos a resposta do servidor
            alert(data.message); // Exibe a mensagem de sucesso do backend
        } else {
            throw new Error("Erro ao cadastrar cliente");
        }
    } catch (error) {
        console.error("Erro ao cadastrar cliente", error);
        alert("Erro ao cadastrar cliente"); // Exibe mensagem de erro caso a requisição falhe
        }
    };

    return (
        <div className="fundoSingup">
            <Navbar cor={"#59291B"} />
            <br /><br />

            <div className="conteudoSingup">
                <div className="container">
                    <h1>Cadastro</h1>
                    {/* onSubmit={handleSubmit} */}
                    <form >
                        <div className="form-group">
                            <label htmlFor="nome">Nome:</label>
                            <input
                                placeholder="Digite seu nome"
                                type="text"
                                id="nome"
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input
                                placeholder="Digite seu e-mail"
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="data-nascimento">Data de Nascimento:</label>
                            <input
                                type="date"
                                id="data-nascimento"
                                value={dataNascimento}
                                onChange={(e) => setDataNascimento(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="cpf">Cpf:</label>
                            <input
                                placeholder="Digite seu CPF"
                                type="number"
                                id="cpf"
                                value={cpf}
                                onChange={(e) => setCpf(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="senha">Senha:</label>
                            <input
                                placeholder="Digite uma senha"
                                type="password"
                                id="senha"
                                value={senha}
                                onChange={(e) => setSenha(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit">Cadastrar</button>
                    </form>
                </div>
    
                <div>
                    <img src="https://i.pinimg.com/736x/75/7e/ef/757eef0ac724db5d391606d42e961f4f.jpg" alt="" className="imgSingup"/>
                </div>
            </div>
        </div>
    );
}

export default Signup