import React, { Component } from 'react';
import Laranja from '../../assets/img/laranja.jpg';
import Maca from '../../assets/img/maca.jpg';
import Card from '../../assets/img/Agrupar 14.png';
import Cabecalho from '../../components/cabecalho/cabecalho';
import Rodape from '../../components/rodape/Rodape';
import { MDBBtn, MDBInput, MDBAlert, MDBContainer, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from "mdbreact";


class Produtos extends Component {

    constructor() {
        super();
<<<<<<< HEAD


        this.state = {
            ModalGetoferta: false,

            listaGetProduto: [],
            listaProdutoModal: []
            
=======
        this.state = {
            ativo: false,
>>>>>>> 3b9f625c377f2ef51c2382de30f9210238106b7b
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
<<<<<<< HEAD
            <main>
                <div>
                    <Cabecalho {...this.props} />
                    <div className="container_lista">
                        <div className="busca">
                            <h3 className="ordenar">Ordenar por:</h3>
                            <select name="" id="">
=======
            <div>
                <div>
                    <Cabecalho />
                    <div className="container_lista">
                        <div className="busca">
                            <h3 className="ordenar">Ordenar por:</h3>
                            <select className="filtroproduto" name="" id="">
>>>>>>> 3b9f625c377f2ef51c2382de30f9210238106b7b
                                <option value="">Selecione</option>
                                <option value="">Menor Preço</option>
                                <option value="">Maior preço</option>
                                <option value="">Mais Vendidos</option>
                                <option value="">Data de Vencimento</option>
                                <option value="">Melhor Desconto</option>
                            </select>
                        </div>
                    </div>
<<<<<<< HEAD


                    <div className="container_cards">
                        {
                            this.state.listaGetProduto.map(function (oferta) {
                                return (
                                    <div key={oferta.idoferta} div className="card">
                                        <div className="sub_card">
                                            <img src={"https://localhost:5001/api/oferta/" + oferta.fotoUrloferta} alt="" />
                                              <p className="produtor">{oferta.nomeProduto}</p>
                                            <p>{oferta.descricaoDoProduto}</p>
                                            <p className="dinheiro">R$ {oferta.preco}</p>
                                            {console.log(oferta.nomeProduto)}
                                        <a key={oferta.idoferta} onClick={() => this.toggleGetoferta(oferta)} href="#" className="btn_1">ADICIONAR</a>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <p className="vermais"><a href="" className="btn_1">Ver Mais</a></p>
=======
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
                        <div
                            onClick={event => this.setState({ ativo: true })}
                            className="card_produto"
                        >
                            <div className="sub_card">
                                <img src={Laranja} alt="" />
                                <p className="produtor">Qualyban</p>
                                <p>Laranja Lima Orgânica Qualyban
                        600g</p>
                                <p className="dinheiro">R$ 45,00</p>
                            </div>
                            <a href="#" className="btn_1">ADICIONAR</a>
                        </div>
                        <div className="card">
                            <img src={Laranja} alt="" />
                            <p className="produtor">Qualyban</p>
                            <p>Batata Baroa cozida
                    Orgânica Nativa 1kg</p>
                            <p className="dinheiro">R$ 45,00</p>
                            <a href="#" className="btn_1">ADICIONAR</a>
                        </div>
                        <div className="card">
                            <img src={Laranja} alt="" />
                            <p className="produtor">Qualyban</p>
                            <p>Batata Baroa cozida
                    Orgânica Nativa 1kg</p>
                            <p className="dinheiro">R$ 45,00</p>
                            <a href="#" className="btn_1">ADICIONAR</a>
                        </div>
                        <div className="card">
                            <img src={Laranja} alt="" />
                            <p className="produtor">Qualyban</p>
                            <p>Batata Baroa cozida
                    Orgânica Nativa 1kg</p>
                            <p className="dinheiro">R$ 45,00</p>
                            <a href="#" className="btn_1">ADICIONAR</a>
                        </div>
                        <div className="card">
                            <img src={Laranja} alt="" />
                            <p className="produtor">Qualyban</p>
                            <p>Batata Baroa cozida
                    Orgânica Nativa 1kg</p>
                            <p className="dinheiro">R$ 45,00</p>
                            <a href="#" className="btn_1">ADICIONAR</a>
                        </div>
                        <div className="card">
                            <img src={Laranja} alt="" />
                            <p className="produtor">Qualyban</p>
                            <p>Batata Baroa cozida
                    Orgânica Nativa 1kg</p>
                            <p className="dinheiro">R$ 45,00</p>
                            <a href="#" className="btn_1">ADICIONAR</a>
                        </div>
                        <div className="card">
                            <img src={Laranja} alt="" />
                            <p className="produtor">Qualyban</p>
                            <p>Batata Baroa cozida
                    Orgânica Nativa 1kg</p>
                            <p className="dinheiro">R$ 45,00</p>
                            <a href="#" className="btn_1">ADICIONAR</a>
                        </div>
                        <div className="card">
                            <img src={Laranja} alt="" />
                            <p className="produtor">Qualyban</p>
                            <p>Batata Baroa cozida
                    Orgânica Nativa 1kg</p>
                            <p className="dinheiro">R$ 45,00</p>
                            <a href="#" className="btn_1">ADICIONAR</a>
                        </div>
                    </div>
                    <p className="vermais"><a href="" className="btn_1">Ver Mais</a></p>

>>>>>>> 3b9f625c377f2ef51c2382de30f9210238106b7b

                    <div align="center">

                        <img src={Card} alt="" className="card2" />
                    </div>

                </div>
                <Rodape />

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


            </main>

        );
    }
}

export default Produtos;

