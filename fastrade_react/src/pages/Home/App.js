import React, { Component } from 'react';

//Aqui importamos imagens
import usuarioPng from '../../assets/img/usu_ario.png';
import shopPng from '../../assets/img/shop.png';
import negociarPng from '../../assets/img/nego_ciar.png';
import documentoPng from '../../assets/img/document_home.png';
import ClientePng from '../../assets/img/cliente_home.png';
import bannerFinal from '../../assets/img/img_2.png';
import Rodape from '../../components/rodape/Rodape.js';
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from
  "mdbreact";

//importa Link  
import { Link } from 'react-router-dom';

//importamos a css da home
import Cabecalho from '../../components/cabecalho/cabecalho';
import Home from '../../assets/css/Home.css'
import { parseJwt } from '../../services/auth';

import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

import Carousel from '../../components/carousel/carousel';




// Aqui importamos paginas


// Aqui temos o ciclo de vida!
class App extends Component {
  UNSAFE_componentWillMount() {
    console.log('Carregando');
  }

  componentDidMount() {
    console.log('Carregado');
    this.listaAtualizada();
  }

  componentDidUpdate() {
    console.log("Update");
  }

  componentWillUnmount() {
    console.log("Unmount")
  }

  //declaramos um construtor com uma lista
  constructor() {
    super();
    this.state = {
      listaNomeOferta: [],
      listaImagem: []

    }

  }
  // temos uma lista atualizada onde escolhemos qual produto ira aparecer
  listaAtualizada = () => {
    fetch("https://localhost:5001/api/oferta")
      .then(response => response.json())
      .then(data => this.setState({ listaNomeOferta: data }));
  }

  render() {
    return (

      <div className="App" >
        <Cabecalho></Cabecalho>
     
            <section>
          <Carousel/>
          </section>
      
        <main className="main__home">
     

          {/* <div className="container_oferta">
            <p className="oferte">Produtos em ofertas</p>
            <div className="conteudo">
              {
                this.state.listaNomeOferta.map(
                  function (oferta) {
                    return (
                      <div key={oferta.idOferta} className="alimentos">
                        <img src={"http://localhost:5000/" + oferta.fotoUrlOferta} className="img_home" alt="Imagem de Arroz" />
                        <p>{oferta.idProdutoNavigation.nome}</p>
                        <p className="vermelho">30% Desconto</p>
                      </div>
                    );
                  }
                )
              }

            </div>
          </div> */}

          <div className=" card_home">
            <figure class="snip1401">
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample67.jpg" alt="sample67" />
              <figcaption>
                <h3>Valores a baixo do mercado </h3>
                <p>Produtos de qualidade e com o preço que cabe no bolso.</p>
              </figcaption>
              <a href="#"></a>
            </figure>

            <figure class="snip1401"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg" alt="sample87" />
              <figcaption>
                <h3>Facilidade na compra e venda</h3>
                <p>Ofertas mas faceis e práticas. </p>
              </figcaption>
              <a href="#"></a>
            </figure>

            <figure class="snip1401"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg" alt="sample87" />
              <figcaption>
                <h3>Cadastre-se!</h3>
                <p>Encontre ofertas mas proxímas de vocês. </p>
              </figcaption>
              <a href="#"></a>
            </figure>
          </div>



          <div className="destaque">
            <img src={bannerFinal} alt="imagem da fruta flaboesa no pote" className="img_destaque" /> </div>

          <div className="tod_informativo">
            <div className="dica_informativa">
              <p className="informativo">Quero comprar alimentos</p>

              <div className="global_informativa">
                <div className="caixa_informativa">
                  <div><img src={usuarioPng} alt="usuario" className="img_informativa" /></div>
                  <div className="frase_informativa"><p> Cadastrar</p></div>
                </div>
              </div>


              <div className="global_informativa">
                <div className="caixa_informativa">
                  <div><img src={shopPng} alt="Imagem de shopping" className="img_informativa" /></div>
                  <div className="frase_informativa"><p> Visite nossa página produtos de produtos.</p></div>
                </div>
              </div>

              <div className="global_informativa">
                <div className="caixa_informativa">
                  <div><img src={negociarPng} alt="Imagem de mão negociando" className="img_informativa" /></div>
                  <div className="frase_informativa"><p>Negocie da melhor forma suas compras.</p></div>
                </div>
              </div>
            </div>


            <div className="dica_informativa">
              <p className="informativo2">Quero vender meus produtos</p>

              <div className="global_informativa">
                <div className="caixa_informativa">
                  <div><img src={usuarioPng} alt="usuario" className="img_informativa" /></div>
                  <div className="frase_informativa"><p> Cadastrar</p></div>
                </div>
              </div>

              <div className="global_informativa">
                <div className="caixa_informativa">
                  <div><img src={documentoPng} alt="Imagem de shopping" className="img_informativa" /></div>
                  <div className="frase_informativa"><p> Ofereça seus produtos em nossa plataforma.</p></div>
                </div>
              </div>

              <div className="global_informativa">
                <div className="caixa_informativa">
                  <div><img src={ClientePng} alt="Imagem de mão negociando" className="img_informativa" /></div>
                  <div className="frase_informativa"><p>Aguarde um novo comprador.</p></div>
                </div>
              </div>
            </div>
          </div>

          <div >
            <div><p className="frase_destaque">Sua melhor plataforma de venda!!!</p></div>
          </div>

        </main>
        <Rodape></Rodape>
      </div >
    );
  }
}

export default App;