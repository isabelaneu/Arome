import React from "react";
import "./home.css"
import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/navbar";



function Home (){

    return(
        <div>
            <div className="fundoHome">
                <Navbar cor={"#E6E1DB"}></Navbar>
                <p className="lancamentos">Conheça nossos lançamentos!</p>
           </div>
           <div className="fundoAboutUs">
                <div className="retangulo">

                    <p className="tituloAboutUs">Quem Somos</p>
                    <p className="textoAboutUs">Na Arome, criamos velas aromáticas artesanais feitas com carinho e ingredientes naturais. Cada vela é cuidadosamente elaborada para transformar seu ambiente, trazendo aconchego, bem-estar e momentos de relaxamento. <br /><br />
                    Escolha entre nossas fragrâncias exclusivas e encontre o aroma perfeito para cada ocasião. Feitas à mão, com ceras vegetais e óleos essenciais, nossas velas proporcionam uma experiência sensorial única.
                    </p>
                </div>
                <div className="imageAboutUs"></div>             
           </div>
           <Footer></Footer>
        </div>
    )
}

export default Home