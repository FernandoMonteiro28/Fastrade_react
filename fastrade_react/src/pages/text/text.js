import React, { Component } from 'react';
import '../../assets/css/text.css';
import ProdutoVenda from '../../assets/img/comida.png';
import Header from '../../components/cabecalho/cabecalho';
import Rodape from '../../components/rodape/Rodape';
import { MDBBtn, MDBInput, MDBAlert, MDBContainer, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from "mdbreact";




class text extends Component {

  constructor() {
    super();
    this.state = {
      ativo: false,
    }
  }
  toggleGetoferta = (oferta) => {
    this.setState({
      ModalGetoferta: !this.state.ModalGetoferta,
      listaProdutoModal: oferta
    });
    console.log(oferta);
  }

  render() {

    return (
      <div>
        <main class="main">
          <article class="content">
            <h3 class="content__title">Lista de Oferta</h3>

            <ul class="product">

              <li class="product__item">
                <div class="product__img">
                  <img src={ProdutoVenda} alt="Imagem do Produto" className="venda_produto" />
                </div>
                <div class="product-info">
                  <h4 class="product-info__name">Nome do Produto</h4>
                  <p class="product-info__description">Descrição do Produto</p>
                </div>
                <strong class="product-info__price">R$ 500,00</strong>
                <button
                  type="submit"
                  onClick={event => this.setState({ ativo: false })}
                  className="botao_cadastrar">Ver Detalhes</button>
              </li>

              <li class="product__item">
                <div class="product__img">
                  <img src={ProdutoVenda} alt="Imagem do Produto" className="venda_produto" />
                </div>
                <div class="product-info">
                  <h4 class="product-info__name">Nome do Produto</h4>
                  <p class="product-info__description">Descrição do Produto</p>
                </div>
                <strong class="product-info__price">R$ 500,00</strong>
                <button
                  type="submit"
                  onClick={event => this.setState({ ativo: false })}
                  className="botao_cadastrar">Ver Detalhes</button>
              </li>

              <li class="product__item">
                <div class="product__img">
                  <img src={ProdutoVenda} alt="Imagem do Produto" className="venda_produto" />
                </div>
                <div class="product-info">
                  <h4 class="product-info__name">Nome do Produto</h4>
                  <p class="product-info__description">Descrição do Produto</p>
                </div>
                <strong class="product-info__price">R$ 500,00</strong>
                <button
                  type="submit"
                  onClick={event => this.setState({ ativo: false })}
                  className="botao_cadastrar">Ver Detalhes</button>
                
              </li>

            </ul>

          </article>
        </main>

        {/* Secao do modal */}
        <div className={this.state.ativo ? 'modal_container' : ''} id="modal-produto">
          <div className={this.state.ativo ? 'modal ativo' : 'modal'}>
            <div className="modal_content">
              <div>
                <button onClick={event => this.setState({ ativo: false })} className="fechar">x</button>
              </div>
              <div className="produto">
                <div>
                <img src={ProdutoVenda} alt="Imagem do Produto" className="venda_produto" />
                  <p>Imagens meramente ilustrativa</p>
                </div>
                <div className="conteudoModal">
                  <div className="conteudoModal2">
                    <p className="produtor">Direto do produtor</p>
                    <p>Maça Fuji Nacional 1 Unidade 220g</p><br />
                    <p>R$ 45,00</p>
                  </div>
                  <div className="buttomModal">
                    <a href="#" class="btn_1 ">ADICIONAR</a>
                  </div>
                </div>
              </div>
              <div className="descricaoModal">
                <h1 className="descricaoProdutoModal btn_2">Descrição do produto</h1>
                <p>As propriedades benéficas da maçã Red Chilena vão desde a casca, onde se encontra a pectina, que reduz o colesterol ruim do sangue e, além disso, também tem vitaminas essenciais à saúde. Essa fruta possui propriedades antioxidantes, que combatem os radicais livres Aproximadamente 200g.</p>
              </div>
            </div>
          </div>
        </div>

        <MDBContainer>
                        <MDBModal isOpen={this.state.ModalGetoferta} toggle={this.toggleGetoferta}>
                            <MDBModalHeader toggle={this.toggleGetoferta}> Produtos </MDBModalHeader>
                            <MDBModalBody>
                                (.....)
        
                        </MDBModalBody>
                            <MDBModalFooter>
                                <MDBBtn color="secondary" onClick={this.toggle}>Close</MDBBtn>
                                <MDBBtn color="primary">Save changes</MDBBtn>
                            </MDBModalFooter>
                        </MDBModal>
                    </MDBContainer>

                    <Rodape></Rodape>
      </div>
    );
  }
}

export default text;