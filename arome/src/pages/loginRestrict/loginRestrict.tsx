import React, { useState } from "react";
import "./loginRestrict.css"; 
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/navbar";

function LoginRestrict() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const adminEmail = process.env.REACT_APP_ADM_EMAIL;
        const adminSenha = process.env.REACT_APP_ADM_SENHA;

        if (email === adminEmail && senha === adminSenha) {
            navigate('/restrict')
        } else {
            alert("Credenciais inválidas");
        }
    };

    return (
        <div className="fundoSingup">
            <Navbar cor="#59291B"></Navbar>
            <br /><br />

            <div className="conteudoSingup" style={{alignItems:'center'}}>
                <div className="container" style={{height:'70%'}}>
                    <h1>Login</h1>
                    {/* onSubmit chama handleSubmit ao submeter o formulário */}
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
                        <button type="submit" onClick={handleSubmit}>Entrar</button>
                    </form>
                </div>
    
                <div>
                    <img src="https://i.pinimg.com/736x/75/7e/ef/757eef0ac724db5d391606d42e961f4f.jpg" alt="" className="imgSingup"/>
                </div>
            </div>
        </div>
    );
}

export default LoginRestrict;
