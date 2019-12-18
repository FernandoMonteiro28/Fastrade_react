import React, { Component } from 'react';
// import Laranja from '../../assets/img/laranja.jpg';
import Maca from '../../assets/img/maca.jpg';
import Card from '../../assets/img/Agrupar 14.png';
import Header from '../../components/cabecalho/cabecalho';
import Rodape from '../../components/rodape/Rodape';
import { MDBBtn, MDBInput, MDBAlert, MDBContainer, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from "mdbreact";


class Produtos extends Component {

    constructor() {
        super();
        this.state = {
            listaCategoria: [],
            listaOferta: [],

            ativo: false,

            setStateFiltro: "",
            filtro: ""

        }
    }
    componentDidMount() {
        this.getCategoria();
        this.getOferta();
    }

    getCategoria = () => {

        fetch('http://localhost:5000/api/catproduto')
          .then(response => {
            if (response.status === 200) {
              this.setState({ listaCategoria: response.data });
            }
          })
      }
      getFiltro = () => {

        fetch('http://localhost:5000/api/oferta/filtrarcategoria/' + this.state.setStateFiltro)
          .then(response => {
            if (response.status === 200) {
              this.setState({ listaOferta: response.data });
            }
          })
      }

      getOferta = () => {

        fetch('http://localhost:5000/api/oferta')
          .then(response => {
            if (response.status === 200) {
              this.setState({ listaOferta: response.data });
            }
          })
      }

      atualizaSelect = (value) => {
        this.setState({ setStateFiltro: value })
        setTimeout(() => {
          this.getOferta(this.state.filtro)
        }, 500);
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
                <div>
                    <Header/>
                    <div className="container_lista">
                        <div className="busca">
                            <h3 className="ordenar">Ordenar por:</h3>
                            <select className="filtroproduto" name="" className="select">
                                <option value="">Selecione</option>
                                <option value="">Menor Preço</option>
                                <option value="">Maior preço</option>
                                <option value="">Mais Vendidos</option>
                                <option value="">Data de Vencimento</option>
                                <option value="">Melhor Desconto</option>
                            </select>
                        </div>
                    </div>
                    <div className={this.state.ativo ? 'modal_container' : ''} id="modal-produto">
                            <div className={this.state.ativo ? 'modal ativo' : 'modal'}>
                                <div className="modal_content">
                                    <div>
                                        <button onClick={event => this.setState({ ativo: false })} className="fechar">x</button>
                                    </div>
                                    <div className="produto">
                                        <div>
                                            <img src={Maca} className="fotoProduto" />
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
                        <div className="container_cards">
                            <div onClick={event => this.setState({ ativo: true })} class="card">
                                <div class="card_conteudo">
                                    <img src={Maca} alt=""/>
                                    <p class="produtor">Direto do produtor</p>
                                    <p class="descricao">Maça Fuji Nacional 1 Unidade 220g</p>
                                    <p class="preco">R$ 45,00</p>
                                </div>
                                <a href="#" class="btn_1Produto">ADICIONAR</a>
                            </div>
                            <div onClick={event => this.setState({ ativo: true })} class="card">
                                <div class="card_conteudo">
                                    <img src={Maca} alt=""/>
                                    <p class="produtor">Direto do produtor</p>
                                    <p class="descricao">Maça Fuji Nacional 1 Unidade 220g</p>
                                    <p class="preco">R$ 45,00</p>
                                </div>
                                <a href="#" class="btn_1Produto">ADICIONAR</a>
                            </div>
                            <div onClick={event => this.setState({ ativo: true })} class="card">
                                <div class="card_conteudo">
                                    <img src={Maca} alt=""/>
                                    <p class="produtor">Direto do produtor</p>
                                    <p class="descricao">Maça Fuji Nacional 1 Unidade 220g</p>
                                    <p class="preco">R$ 45,00</p>
                                </div>
                                <a href="#" class="btn_1Produto">ADICIONAR</a>
                            </div>
                            <div onClick={event => this.setState({ ativo: true })} class="card">
                                <div class="card_conteudo">
                                    <img src={Maca} alt=""/>
                                    <p class="produtor">Direto do produtor</p>
                                    <p class="descricao">Maça Fuji Nacional 1 Unidade 220g</p>
                                    <p class="preco">R$ 45,00</p>
                                </div>
                                <a href="#" class="btn_1Produto">ADICIONAR</a>
                            </div>
                            <div onClick={event => this.setState({ ativo: true })} class="card">
                                <div class="card_conteudo">
                                    <img src={Maca} alt=""/>
                                    <p class="produtor">Direto do produtor</p>
                                    <p class="descricao">Maça Fuji Nacional 1 Unidade 220g</p>
                                    <p class="preco">R$ 45,00</p>
                                </div>
                                <a href="#" class="btn_1Produto">ADICIONAR</a>
                            </div>
                            <div onClick={event => this.setState({ ativo: true })} class="card">
                                <div class="card_conteudo">
                                    <img src={Maca} alt=""/>
                                    <p class="produtor">Direto do produtor</p>
                                    <p class="descricao">Maça Fuji Nacional 1 Unidade 220g</p>
                                    <p class="preco">R$ 45,00</p>
                                </div>
                                <a href="#" class="btn_1Produto">ADICIONAR</a>
                            </div>
                            <div onClick={event => this.setState({ ativo: true })} class="card">
                                <div class="card_conteudo">
                                    <img src={Maca} alt=""/>
                                    <p class="produtor">Direto do produtor</p>
                                    <p class="descricao">Maça Fuji Nacional 1 Unidade 220g</p>
                                    <p class="preco">R$ 45,00</p>
                                </div>
                                <a href="#" class="btn_1Produto">ADICIONAR</a>
                            </div>
                            <div onClick={event => this.setState({ ativo: true })} class="card">
                                <div class="card_conteudo">
                                    <img src={Maca} alt=""/>
                                    <p class="produtor">Direto do produtor</p>
                                    <p class="descricao">Maça Fuji Nacional 1 Unidade 220g</p>
                                    <p class="preco">R$ 45,00</p>
                                </div>
                                <a href="#" class="btn_1Produto">ADICIONAR</a>
                            </div>

                        <p className="vermais"><a href="" className="btn_1">Ver Mais</a></p>

                        <div className="englobaCard">
                            <img src={Card} alt="" className="card2" />
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
            </div>
            </div>
        );
    }
}

export default Produtos;

