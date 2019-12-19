import React, { Component } from 'react';
import Missao from '../../assets/img/Missão.jpg';
import Visao from '../../assets/img/Visão.jpg';
import Valores from '../../assets/img/Valores.jpg';
import fotoJosi from '../../assets/img/Josi.png';
import fotoLuana from '../../assets/img/luana.png'
import fotoJoao from '../../assets/img/João vitor.png';
import fotoFernando from '../../assets/img/fernando.png';
import fotoEricki from '../../assets/img/ericki.png';
import fotoJennifer from '../../assets/img/jennifer.png';
import Rodape from '../../components/rodape/Rodape.js'
import fotoGrupo from '../../assets/img/grupoSomos.jpeg'
import Cabecalho from '../../components/cabecalho/cabecalho';

import '../../assets/css/quemSomos.css';

class quemSomos extends Component {
    render() {
        return (
            <div className="QuemSomos">
                <Cabecalho></Cabecalho>
                <section className="deitadas">
                    <img src={Missao} className="esquerdo" alt="Imagem que representa missão" />
                    <div className="direito">
                        <h1 className="qualidadeSomos">Missão</h1>
                        <div>
                            <p>dfdafsdafdsfsdfdsfdfddsfdfdfdfdfdfdfdfdf<br />
                                fdfsdfdffdfdfdfdfdfdfdfdfdfdffawefwerfaw<br />
                                fsasafasfsafasfasfafasfafasffasfgagagasga<br />
                                asdasdasfasfafasfafasfsafafsfasfasfasfsafs<br />
                            </p>
                        </div>
                    </div>
                </section>
                <section className="deitadas">
                    <div className="esquerdo">
                        <h1 className="qualidadeSomos">Visão</h1>
                        <p>dfdafsdafdsfsdfdsfdfddsfdfdfdfdfdfdfdfdfd<br />
                            fdfsdfdffdfdfdfdfdfdfdfdfdfdffawefwerfawef<br />
                        </p>
                    </div>
                    <img src={Visao} className="direito" alt="Imagem que representa Visão" />
                </section>
                <section className="deitadas">
                    <img src={Valores} className="esquerdo" alt="Imagem que representa valores" />
                    <div className="direito">
                        <h1 className="qualidadeSomos">Valores</h1>
                        <p>dfdafsdafdsfsdfdsfdfddsfdfdfdfdfdfdfdfdfdd<br />
                            fdfsdfdffdfdfdfdfdfdfdfdfdfdffawefwerffsgaf<br />
                            fsalklhfsafshjfasfafsfsafafasfsafsafsdsadasda<br />
                        </p>
                    </div>
                </section>

                <section className="larg">
                    <h2>Quem somos</h2>
                    <div className="persona">
                        <div className="rosto">
                            <img src={fotoJosi} alt="Foto de" />
                            <p className="nomeSomos">Josilaine<br /> 23 anos</p>
                        </div>
                        <div className="rosto">
                            <img src={fotoLuana} alt="Foto de" />
                            <p className="nomeSomos">Luana<br /> 23 anos</p>
                        </div>
                        <div className="rosto">
                            <img src={fotoJoao} alt="Foto de" />
                            <p className="nomeSomos">João<br />17 anos</p>
                        </div>
                        <div className="rosto">
                            <img src={fotoFernando} alt="Foto de" />
                            <p className="nomeSomos">Fernando<br /> 16 anos</p>
                        </div>
                        <div className="rosto">
                            <img src={fotoEricki} alt="Foto de" />
                            <p className="nomeSomos">Ericki<br /> 20 anos</p>
                        </div>
                        <div className="rosto">
                            <img src={fotoJennifer} alt="Foto de" />
                            <p className="nomeSomos">Jennifer<br /> 23 anos</p>
                        </div>
                    </div>
                </section>
                <div className="foto_grupo">
                    <img src={fotoGrupo} alt="Fotos do integrantes do projetos" />
                </div>
                <Rodape></Rodape>
            </div>
        );
    }
}

export default quemSomos;