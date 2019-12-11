import React, { Component } from 'react';
import '../../assets/css/CadastroProduto.css';
import Header from '../../components/cabecalho/cabecalho';
import Rodape from '../../components/rodape/Rodape.js';
import api from './../../services/api';


import {
    MDBBtn,
    MDBTable,
    MDBTableBody,
    MDBTableHead,
    MDBAlert,
    MDBModal,
    MDBModalBody,
    MDBModalHeader,
    MDBModalFooter,
    MDBInput
} from 'mdbreact';

class cadastroProduto extends Component {
    //Alteramos o estado de um elemento através do construtor 
    constructor(props) {
        //Passamos o props para o componente com o super
        super(props);
        this.state = {

            listarProd: [],
            listarOferta: [],


            postProduto: {
                nomeProduto: "",
                preco: "",
                categoriaId: "",
                quantidade: "",
                descricaoDoProduto: "",
                validade: ""
            },
            erroMsg: "",
            sucessMsg: "",
            modal: false
        }
        this.postProduto = this.postProduto.bind(this);
    }
    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }
    //Ciclo de vida 

    componentDidMount() {
        console.log('Carregado');
        console.log(this.listarProd);
        console.log(this.listarProd);
        console.log(this.listarOferta);
        this.listaProdutos();
    }

    componentDidUpdate() {
        console.log("Atualizado")
    }
    //lista de produtos
    listaProdutos = () => {
        api.get('/Produto')
        api.get('/Oferta')
            .then(response => {
                if (response.status === 200) {
                    this.setState({ listarProd: response.data })
                    this.setState({ listarOferta: response.data })
                }
            })
    }

    // post
    postSetState = (input) => {
        this.setState({
            postProduto: {
                ...this.state.postProduto, [input.target.name]: input.target.value
            }

        })
    }

    postProduto = (p) => {

        p.preventDefault();
        console.log("Cadastrando");

        api.post('/Produto', this.state.postProduto)
            ('/Oferta', this.state.postProduto)
            .then(response => {
                console.log(response);
                this.setState({ sucessMsg: "Produto cadastrado com sucesso!" });
            })
            .catch(error => {
                console.log(error);
                this.setState({ erroMsg: "Não foi possível cadastrar produto!" });
            })

        setTimeout(() => {
            this.listaProdutos();
        }, 1500);
    }

    render() {

        return (

            <div>
                <Header></Header>
                <main>

                    <div className="container">
                        <div className="card_produto">
                            <h1 className="titulo_cadastro">Cadastro de Produto</h1>
                            <MDBTable>
                                <MDBTableHead>
                                    <tr>
                                        <th>#</th>
                                        <th>Nome do produto</th>
                                        <th>Descrição</th>
                                        <th>Categoria</th>
                                        <th>Açõe</th>
                                    </tr>
                                </MDBTableHead >
                                <MDBTableBody >
                                    {
                                        this.state.listaProdutos.map(
                                            function (f) {
                                                return (
                                                    <tr key={f.idProduto, f.idOferta} >
                                                        <td>{f.idProduto}</td>
                                                        <td>{f.idOferta}</td>
                                                        <td>{f.nomeNomeProduto}</td>
                                                        <td>{f.nomedescricaoDoProduto}</td>
                                                        <td>{f.nomeQuantidade}</td>
                                                        <td>{f.nomePreco}</td>
                                                        <td>{f.nomevalidade}</td>
                                                        <td>{f.idCategoriaNavigation.nomeCategoria}</td>
                                                    </tr>
                                                )
                                            }.bind(this)
                                        )
                                    }
                                </MDBTableBody>
                            </MDBTable>

                            <form onSubmit={this.postProduto}>
                                <div className="conjunto_cadastro">
                                    <div className="form-group">
                                        <label htmlFor="nomeProd">Nome do Produto</label>
                                        <div className="input-button">
                                            <input
                                                id="nomeProduto"
                                                type="text"
                                                name="nomeProduto"
                                                value={this.state.props.listaProdutos.nomeProduto}
                                                onChange={this.postSetState}
                                            />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="quant">Quantidade</label>
                                        <div className="input-button">
                                            <input id="quantidade"
                                                type="number"
                                                name="quantidade"
                                                // value={this.state.listaProdutos.quantidade}
                                                onChange={this.postSetState}
                                            />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="PrecoProd">Preço do Produto</label>
                                        <div className="input-button">
                                            <input id="preco"
                                                type="valor"
                                                name="preco"
                                                // value={this.state.listaProdutos.preco}
                                                onChange={this.postSetState}
                                            />
                                        </div>
                                    </div>


                                    <div className="form-group">
                                        <label htmlFor="catProd">Categoria do Produto</label>
                                        <div className="input-button">
                                            <select id="descProd"
                                                name="categoriaId"
                                                // value={this.state.listaProdutos.categoriaId}
                                                onChange={this.postSetState}
                                            >
                                                {
                                                    this.state.listarProd.map(function (c) {
                                                        return (

                                                            <option key={c.idCatProduto} value={c.idCatProduto}>
                                                                {c.tipo}
                                                            </option>

                                                        )
                                                    })
                                                }
                                                {/* <option value="">Enlatado</option>
                        <option value="">Opel</option>
                        <option value="">Audi</option> */}

                                            </select>

                                        </div>
                                    </div>


                                    <div className="form-group">
                                        <label htmlFor="descProd">Descrição do Produto</label>
                                        <div className="input-button">
                                            <input id="descricaoDoProduto"
                                                type="text"
                                                name="descricaoDoProduto"
                                                // value={this.state.listaProdutos.descricaoDoProduto}
                                                onChange={this.postSetState}
                                            />
                                        </div>

                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="valProd">Validade do Produto</label>
                                        <div className="input-button">
                                            <input id="validade"
                                                type="date"
                                                name="validade"
                                            // value={this.state.listaProdutos.validade}
                                            // onChange={this.postSetState}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <MDBModalFooter>

                                    <div className="buttons-area">

                                        <MDBBtn
                                            type="submit"
                                            color="secondary"
                                            className="botao">ADICIONAR</MDBBtn >
                                    </div>
                                </MDBModalFooter>
                            </form>
                        </div>
                        <Rodape></Rodape>
                    </div>
                </main>
            </div>

        );
    }
}
export default cadastroProduto;