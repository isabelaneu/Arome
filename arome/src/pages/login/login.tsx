import React, { useState, useEffect } from "react";
import "./login.css"; 
import { useNavigate } from "react-router-dom";
import icon from "../../assets/icon.png";

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    useEffect(() => {
        const cliente = sessionStorage.getItem("cliente");
        if (cliente) {
            navigate("/home");
        }
    }, [navigate]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await fetch(`https://arome-backend-1-4j41.onrender.com/clientes/email/${email}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                }
            });

            if (!response.ok) {
                alert("Email não encontrado.");
                return;
            }

            const cliente = await response.json();

            if (cliente.senha === senha) {
                alert("Login realizado com sucesso!");
                document.cookie = `user=${JSON.stringify(cliente)}; path=/; max-age=${7 * 24 * 60 * 60}`;
                sessionStorage.setItem("cliente", JSON.stringify(cliente));
                navigate("/home");
            } else {
                alert("Senha incorreta!");
            }

        } catch (error) {
            console.error("Erro ao logar cliente", error);
            alert("Erro ao logar cliente");
        }
    };

    return (
        <div className="fundoSingup">
            <div className="logo" onClick={() => navigate("/")}>
                <img src={icon} alt="Logo AROME" className="icon" />
                <p className="tituloHome" style={{ color: '#59291B' }}>AROME</p>
            </div>
            <br /><br />

            <div className="conteudoSingup">
                <div className="container">
                    <h1>Login</h1>
                    <form onSubmit={handleSubmit}>
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
                            <label htmlFor="senha">Senha:</label>
                            <input
                                placeholder="Digite sua senha"
                                type="password"
                                id="senha"
                                value={senha}
                                onChange={(e) => setSenha(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit">Entrar</button>
                    </form>
                </div>

                <div>
                    <img src="https://i.pinimg.com/736x/75/7e/ef/757eef0ac724db5d391606d42e961f4f.jpg" alt="Login" className="imgSingup" />
                </div>
            </div>
        </div>
    );
}

export default Login;
