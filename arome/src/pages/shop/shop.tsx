import React from "react";
import Navbar from "../../components/navbar/navbar";
import "./shop.css"; 
import Footer from "../../components/footer/footer";
import "../../components/navbar/navbar.css"
import "../../components/footer/footer.css"
import { Navigate, useNavigate } from "react-router-dom";


function Shop (){
    const navigate = useNavigate();

    
    return(
        <div className="fundoShop">
            <Navbar cor={"#59291B"}></Navbar>
            <br /><br /><br />
            <p className="tituloShop">- Nossas Velas -</p>
            <br /><br />

            <div className="viewCardShop">
                <div className="cardShop" onClick={() => navigate("/product")} >
                    <img src="https://i.pinimg.com/474x/09/21/27/09212787e98f0a771be6d9b72960d1de.jpg" alt="" className="imgCardShop" id="baunilha"/>
                    <p className="textoCardShop">Mel & Baunilha <br />
                    R$ 59,90</p>

                    <div className="selecionar">
                        {/* + */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" fill="#59291B"/>
                        </svg>
                        {/* quant */}
                        <p>2</p>
                        {/* - */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                            <path d="M19.0544 13.3947H5.05444V11.3947H19.0544V13.3947Z" fill="#59291B"/>
                        </svg>
                    </div>
                </div>
                <div className="cardShop">
                    <img src="https://i.pinimg.com/736x/85/5b/e7/855be7796b0fb9ffd949d782b9060ce4.jpg" alt="" className="imgCardShop" id="cereja"/>
                    <p className="textoCardShop">Cereja & Avelã <br />
                    R$ 62,50</p>
                    
                    <div className="selecionar">
                        {/* + */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" fill="#59291B"/>
                        </svg>
                        {/* quant */}
                        <p>0</p>
                        {/* - */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                            <path d="M19.0544 13.3947H5.05444V11.3947H19.0544V13.3947Z" fill="#59291B"/>
                        </svg>
                    </div>
                </div>
                <div className="cardShop">
                    <img src="https://i.pinimg.com/736x/6d/3d/ed/6d3dedc2e49b5f6911fb3636887755c1.jpg" alt="" className="imgCardShop" id="lavanda"/>
                    <p className="textoCardShop"> Lavanda & Rosa <br />
                    R$ 58,90</p>
                    
                    <div className="selecionar">
                        {/* + */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" fill="#59291B"/>
                        </svg>
                        {/* quant */}
                        <p>0</p>
                        {/* - */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                            <path d="M19.0544 13.3947H5.05444V11.3947H19.0544V13.3947Z" fill="#59291B"/>
                        </svg>
                    </div>
                </div>
                <div className="cardShop">
                    <img src="https://i.pinimg.com/736x/4e/12/bc/4e12bc031f067c41dc2b052216ef0c75.jpg" alt="" className="imgCardShop" id="canela"/>
                    <p className="textoCardShop">Canela & Laranja <br />
                    R$ 61,90</p>
                    
                    <div className="selecionar">
                        {/* + */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" fill="#59291B"/>
                        </svg>
                        {/* quant */}
                        <p>0</p>
                        {/* - */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                            <path d="M19.0544 13.3947H5.05444V11.3947H19.0544V13.3947Z" fill="#59291B"/>
                        </svg>
                    </div>
                </div>
                <div className="cardShop">
                    <img src="https://i.pinimg.com/736x/9e/a2/61/9ea2617a9917a96e20ab9fe6fa7343bb.jpg" alt=""  className="imgCardShop" id="baunilhaEsp"/>

                    <p className="textoCardShop"> Baunilha - Edição Especial <br />
                    R$ 60,50</p>

                    <div className="selecionar">
                        {/* + */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" fill="#59291B"/>
                        </svg>
                       {/* quant */}
                       <p>0</p>
                        {/* - */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                            <path d="M19.0544 13.3947H5.05444V11.3947H19.0544V13.3947Z" fill="#59291B"/>
                        </svg>
                    </div>
                    

                </div>
                <div className="cardShop">
                    <img src="https://i.pinimg.com/736x/ab/74/bd/ab74bdd3e050bd0d7066f0d5199da601.jpg" alt="" className="imgCardShop" id="cerejaEsp"/>
                    <p className="textoCardShop">
                        Cereja & Avelã - Edição Especial <br />
                    R$ 59,90</p>
                    
                    <div className="selecionar">
                        {/* + */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" fill="#59291B"/>
                        </svg>
                        {/* quant */}
                        <p>0</p>
                        {/* - */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                            <path d="M19.0544 13.3947H5.05444V11.3947H19.0544V13.3947Z" fill="#59291B"/>
                        </svg>
                    </div>
                    
                </div>
                <div className="cardShop">
                    <img src="https://i.pinimg.com/736x/6d/d4/59/6dd45950aa64e1bb344bf04d002ff567.jpg" alt="" className="imgCardShop" id="lavandaEsp"/>
                    <p className="textoCardShop">
                        Lavanda - Edição Especial <br />
                    R$ 59,90</p>
                    
                    <div className="selecionar">
                        {/* + */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" fill="#59291B"/>
                        </svg>
                        {/* quant */}
                        <p>0</p>
                        {/* - */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                            <path d="M19.0544 13.3947H5.05444V11.3947H19.0544V13.3947Z" fill="#59291B"/>
                        </svg>
                    </div>
                </div>
                <div className="cardShop">
                    <img src="https://cdn.dooca.store/133256/products/glowup-37-1_1600x1600+fill_ffffff.jpg?v=1732323510" alt="" className="imgCardShop" id="kit"/>
                    <p className="textoCardShop">
                        Kit Arome <br />
                    R$ 59,90</p>
                   
                    <div className="selecionar">
                        {/* + */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" fill="#59291B"/>
                        </svg>
                        {/* quant */}
                        <p>0</p>
                        {/* - */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                            <path d="M19.0544 13.3947H5.05444V11.3947H19.0544V13.3947Z" fill="#59291B"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shop