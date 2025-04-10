import React, { useState, useEffect } from "react";
import "./singup.css"; 
import { useNavigate } from "react-router-dom";
import icon from "../../assets/icon.png";

function Signup() {

    const basePath = "/shop"; 
    const navigate = useNavigate();
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [cpf, setCpf] = useState('');
    const [senha, setSenha] = useState('');

    useEffect(() => {
        const cliente = sessionStorage.getItem("cliente");
        if (cliente) {
            navigate("/home");
        }
    }, [navigate]);

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();

            
        const cliente = { nome, email, cpf, senha, data_nascimento: dataNascimento };
   
        console.log(cliente)

        try {
            const response = await fetch("https://arome-backend-udit.onrender.com/clientes/adicionar", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json", 
                },
                body: JSON.stringify(cliente), 
            });
        
            const responseText = await response.text();
            console.log("Resposta do backend:", responseText);
        
            if (response.ok) {
                alert(responseText);
                document.cookie = `user=${JSON.stringify(cliente)}; path=/; max-age=${7 * 24 * 60 * 60}`
                navigate("/home");
            } else {
                if (responseText.includes("Cliente com este e-mail já existe")) {
                    alert(responseText);
        
                    sessionStorage.setItem("cliente", JSON.stringify(cliente));
        
                    navigate("/home");
                } else {
                    alert("Erro: " + responseText);
            }
        }
    } catch (error) {
        console.error("Erro ao cadastrar cliente", error);
        alert("Erro ao cadastrar cliente"); 
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
                    <h1>Cadastro</h1>
                    <form onSubmit={handleSubmit}>
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
                                type="text"
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
                        <a href="" style={{fontFamily:"Poppins", color:"#59291B", textAlign:"center", margin:"30%"}} onClick={() => navigate("/login")}>Já sou cadastrado!</a>
                    </form>
                </div>
    
                <div>
                    <img src="https://i.pinimg.com/736x/75/7e/ef/757eef0ac724db5d391606d42e961f4f.jpg" alt="" className="imgSingup"/>
                </div>
            </div>
        </div>
    );
}

export default Signup;
