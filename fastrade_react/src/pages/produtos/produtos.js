import React, { Component } from 'react';
import Laranja from '../../assets/img/laranja.jpg';
import Card from '../../assets/img/Agrupar 14.png';
import Cabecalho from '../../components/cabecalho/cabecalho';
import Rodape from '../../components/rodape/Rodape';
import { MDBBtn, MDBInput, MDBAlert, MDBContainer, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from "mdbreact";


class Produtos extends Component {
    constructor() {
        super();


        this.state = {
            ModalGetoferta: false,

            listaGetProduto: [],
            listaProdutoModal: []
            
        }
    }
    toggleGetoferta = (oferta) => {
        this.setState({
            ModalGetoferta: !this.state.ModalGetoferta,
            listaProdutoModal: oferta
        });
        console.log(oferta);
    }


    listaAtualizada = () => {
        fetch("https://localhost:5001/api/oferta/")
            .then(response => response.json())
            .then(data => this.setState({ listaGetProduto: data }));
    }
    componentDidMount() {
        console.log('Carregado');
        this.listaAtualizada();
    }


    render() {
        return (
            <main>
                <div>
                    <Cabecalho {...this.props} />
                    <div className="container_lista">
                        <div className="busca">
                            <h3 className="ordenar">Ordenar por:</h3>
                            <select name="" id="">
                                <option value="">Selecione</option>
                                <option value="">Menor Preço</option>
                                <option value="">Maior preço</option>
                                <option value="">Mais Vendidos</option>
                                <option value="">Data de Vencimento</option>
                                <option value="">Melhor Desconto</option>
                            </select>
                        </div>
                    </div>


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