import React from "react";
import Navbar from "../../components/navbar/navbar";
import "./product.css"
import { useNavigate } from "react-router-dom";


function Product(){
    const navigate = useNavigate()
    return(
        <div className="fundoProduct">
            <Navbar cor={"#59291B"}></Navbar>
            <br /><br /><br />

            <div className="product">
                <img src="https://i.pinimg.com/474x/09/21/27/09212787e98f0a771be6d9b72960d1de.jpg" alt="" className="imgProduct" />

                <div className="info">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none" onClick={() => navigate("/shop")} style={{cursor:"pointer"}}>
                        <path d="M20.9208 11.2238V13.2238H8.92081L14.4208 18.7238L13.0008 20.1438L5.08081 12.2238L13.0008 4.30377L14.4208 5.72377L8.92081 11.2238H20.9208Z" fill="#59291B" />
                    </svg>
                    <h1 className="tituloProduct">Vela Mel & Baunilha</h1>
                    <h3 className="priceProduct"> R$ 59,90 </h3>

                    <br />

                    <p className="description">A vela aromática de mel e baunilha traz uma fragrância envolvente e aconchegante, perfeita para criar um ambiente acolhedor e relaxante. A doçura natural do mel se mistura harmoniosamente com a cremosidade da baunilha, resultando em um aroma suave e reconfortante. <br /> Feita com cera de alta qualidade e pavio de algodão, proporciona uma queima uniforme e duradoura, preenchendo o espaço com uma sensação de bem-estar. Ideal para momentos de descanso, meditação ou para adicionar um toque especial à decoração, essa vela transforma qualquer ambiente em um refúgio de tranquilidade e prazer sensorial.</p>

                    <br /><hr /><br />

                    <p style={{paddingBottom:5, fontSize:20}}>Adicione ao carrinho!</p>  

                    <div className="quantidade">
                        {/* + */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" fill="#59291B"/>
                        </svg>
                        <p>1</p>
                        {/* - */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                            <path d="M19.0544 13.3947H5.05444V11.3947H19.0544V13.3947Z" fill="#59291B"/>
                        </svg>
                    </div>
                </div>
            </div>
            <br /><br /><br /><br /><br />

        </div>
    )
}

export default Product