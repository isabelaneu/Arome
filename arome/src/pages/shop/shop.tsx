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
                        {/* Carrinho */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className="svgCardShop">
                            <path d="M9 20C9 21.1 8.1 22 7 22C5.9 22 5 21.1 5 20C5 18.9 5.9 18 7 18C8.1 18 9 18.9 9 20ZM17 18C15.9 18 15 18.9 15 20C15 21.1 15.9 22 17 22C18.1 22 19 21.1 19 20C19 18.9 18.1 18 17 18ZM7.2 14.8V14.7L8.1 13H15.5C16.2 13 16.9 12.6 17.2 12L21.1 5L19.4 4L15.5 11H8.5L4.3 2H1V4H3L6.6 11.6L5.2 14C5.1 14.3 5 14.6 5 15C5 16.1 5.9 17 7 17H19V15H7.4C7.3 15 7.2 14.9 7.2 14.8ZM12 9.3L11.4 8.8C9.4 6.9 8 5.7 8 4.2C8 3 9 2 10.2 2C10.9 2 11.6 2.3 12 2.8C12.4 2.3 13.1 2 13.8 2C15 2 16 2.9 16 4.2C16 5.7 14.6 6.9 12.6 8.8L12 9.3Z" fill="#59291B"/>
                        </svg >
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
                        {/* Carrinho */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className="svgCardShop">
                            <path d="M9 20C9 21.1 8.1 22 7 22C5.9 22 5 21.1 5 20C5 18.9 5.9 18 7 18C8.1 18 9 18.9 9 20ZM17 18C15.9 18 15 18.9 15 20C15 21.1 15.9 22 17 22C18.1 22 19 21.1 19 20C19 18.9 18.1 18 17 18ZM7.2 14.8V14.7L8.1 13H15.5C16.2 13 16.9 12.6 17.2 12L21.1 5L19.4 4L15.5 11H8.5L4.3 2H1V4H3L6.6 11.6L5.2 14C5.1 14.3 5 14.6 5 15C5 16.1 5.9 17 7 17H19V15H7.4C7.3 15 7.2 14.9 7.2 14.8ZM12 9.3L11.4 8.8C9.4 6.9 8 5.7 8 4.2C8 3 9 2 10.2 2C10.9 2 11.6 2.3 12 2.8C12.4 2.3 13.1 2 13.8 2C15 2 16 2.9 16 4.2C16 5.7 14.6 6.9 12.6 8.8L12 9.3Z" fill="#59291B"/>
                        </svg >
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
                        {/* Carrinho */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className="svgCardShop">
                            <path d="M9 20C9 21.1 8.1 22 7 22C5.9 22 5 21.1 5 20C5 18.9 5.9 18 7 18C8.1 18 9 18.9 9 20ZM17 18C15.9 18 15 18.9 15 20C15 21.1 15.9 22 17 22C18.1 22 19 21.1 19 20C19 18.9 18.1 18 17 18ZM7.2 14.8V14.7L8.1 13H15.5C16.2 13 16.9 12.6 17.2 12L21.1 5L19.4 4L15.5 11H8.5L4.3 2H1V4H3L6.6 11.6L5.2 14C5.1 14.3 5 14.6 5 15C5 16.1 5.9 17 7 17H19V15H7.4C7.3 15 7.2 14.9 7.2 14.8ZM12 9.3L11.4 8.8C9.4 6.9 8 5.7 8 4.2C8 3 9 2 10.2 2C10.9 2 11.6 2.3 12 2.8C12.4 2.3 13.1 2 13.8 2C15 2 16 2.9 16 4.2C16 5.7 14.6 6.9 12.6 8.8L12 9.3Z" fill="#59291B"/>
                        </svg >
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
                        {/* Carrinho */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className="svgCardShop">
                            <path d="M9 20C9 21.1 8.1 22 7 22C5.9 22 5 21.1 5 20C5 18.9 5.9 18 7 18C8.1 18 9 18.9 9 20ZM17 18C15.9 18 15 18.9 15 20C15 21.1 15.9 22 17 22C18.1 22 19 21.1 19 20C19 18.9 18.1 18 17 18ZM7.2 14.8V14.7L8.1 13H15.5C16.2 13 16.9 12.6 17.2 12L21.1 5L19.4 4L15.5 11H8.5L4.3 2H1V4H3L6.6 11.6L5.2 14C5.1 14.3 5 14.6 5 15C5 16.1 5.9 17 7 17H19V15H7.4C7.3 15 7.2 14.9 7.2 14.8ZM12 9.3L11.4 8.8C9.4 6.9 8 5.7 8 4.2C8 3 9 2 10.2 2C10.9 2 11.6 2.3 12 2.8C12.4 2.3 13.1 2 13.8 2C15 2 16 2.9 16 4.2C16 5.7 14.6 6.9 12.6 8.8L12 9.3Z" fill="#59291B"/>
                        </svg >
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
                        {/* Carrinho */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className="svgCardShop">
                            <path d="M9 20C9 21.1 8.1 22 7 22C5.9 22 5 21.1 5 20C5 18.9 5.9 18 7 18C8.1 18 9 18.9 9 20ZM17 18C15.9 18 15 18.9 15 20C15 21.1 15.9 22 17 22C18.1 22 19 21.1 19 20C19 18.9 18.1 18 17 18ZM7.2 14.8V14.7L8.1 13H15.5C16.2 13 16.9 12.6 17.2 12L21.1 5L19.4 4L15.5 11H8.5L4.3 2H1V4H3L6.6 11.6L5.2 14C5.1 14.3 5 14.6 5 15C5 16.1 5.9 17 7 17H19V15H7.4C7.3 15 7.2 14.9 7.2 14.8ZM12 9.3L11.4 8.8C9.4 6.9 8 5.7 8 4.2C8 3 9 2 10.2 2C10.9 2 11.6 2.3 12 2.8C12.4 2.3 13.1 2 13.8 2C15 2 16 2.9 16 4.2C16 5.7 14.6 6.9 12.6 8.8L12 9.3Z" fill="#59291B"/>
                        </svg >
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
                        {/* Carrinho */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className="svgCardShop">
                            <path d="M9 20C9 21.1 8.1 22 7 22C5.9 22 5 21.1 5 20C5 18.9 5.9 18 7 18C8.1 18 9 18.9 9 20ZM17 18C15.9 18 15 18.9 15 20C15 21.1 15.9 22 17 22C18.1 22 19 21.1 19 20C19 18.9 18.1 18 17 18ZM7.2 14.8V14.7L8.1 13H15.5C16.2 13 16.9 12.6 17.2 12L21.1 5L19.4 4L15.5 11H8.5L4.3 2H1V4H3L6.6 11.6L5.2 14C5.1 14.3 5 14.6 5 15C5 16.1 5.9 17 7 17H19V15H7.4C7.3 15 7.2 14.9 7.2 14.8ZM12 9.3L11.4 8.8C9.4 6.9 8 5.7 8 4.2C8 3 9 2 10.2 2C10.9 2 11.6 2.3 12 2.8C12.4 2.3 13.1 2 13.8 2C15 2 16 2.9 16 4.2C16 5.7 14.6 6.9 12.6 8.8L12 9.3Z" fill="#59291B"/>
                        </svg >
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
                        {/* Carrinho */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className="svgCardShop">
                            <path d="M9 20C9 21.1 8.1 22 7 22C5.9 22 5 21.1 5 20C5 18.9 5.9 18 7 18C8.1 18 9 18.9 9 20ZM17 18C15.9 18 15 18.9 15 20C15 21.1 15.9 22 17 22C18.1 22 19 21.1 19 20C19 18.9 18.1 18 17 18ZM7.2 14.8V14.7L8.1 13H15.5C16.2 13 16.9 12.6 17.2 12L21.1 5L19.4 4L15.5 11H8.5L4.3 2H1V4H3L6.6 11.6L5.2 14C5.1 14.3 5 14.6 5 15C5 16.1 5.9 17 7 17H19V15H7.4C7.3 15 7.2 14.9 7.2 14.8ZM12 9.3L11.4 8.8C9.4 6.9 8 5.7 8 4.2C8 3 9 2 10.2 2C10.9 2 11.6 2.3 12 2.8C12.4 2.3 13.1 2 13.8 2C15 2 16 2.9 16 4.2C16 5.7 14.6 6.9 12.6 8.8L12 9.3Z" fill="#59291B"/>
                        </svg >
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
                        {/* Carrinho */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className="svgCardShop">
                            <path d="M9 20C9 21.1 8.1 22 7 22C5.9 22 5 21.1 5 20C5 18.9 5.9 18 7 18C8.1 18 9 18.9 9 20ZM17 18C15.9 18 15 18.9 15 20C15 21.1 15.9 22 17 22C18.1 22 19 21.1 19 20C19 18.9 18.1 18 17 18ZM7.2 14.8V14.7L8.1 13H15.5C16.2 13 16.9 12.6 17.2 12L21.1 5L19.4 4L15.5 11H8.5L4.3 2H1V4H3L6.6 11.6L5.2 14C5.1 14.3 5 14.6 5 15C5 16.1 5.9 17 7 17H19V15H7.4C7.3 15 7.2 14.9 7.2 14.8ZM12 9.3L11.4 8.8C9.4 6.9 8 5.7 8 4.2C8 3 9 2 10.2 2C10.9 2 11.6 2.3 12 2.8C12.4 2.3 13.1 2 13.8 2C15 2 16 2.9 16 4.2C16 5.7 14.6 6.9 12.6 8.8L12 9.3Z" fill="#59291B"/>
                        </svg >
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