import React, { Component } from 'react';
import '../../assets/css/CadastroProduto.css';
import Header from '../../components/cabecalho/cabecalho';
import Rodape from '../../components/rodape/Rodape.js';
import api from './../../services/api';


import {    
    MDBTable,
    MDBTableBody,
    MDBTableHead   
} from 'mdbreact';

class cadastroProduto extends Component {
    //Alteramos o estado de um elemento através do construtor 
    constructor(props) {
        //Passamos o props para o componente com o super
        super(props);
        this.state = {

            listaProdutos: [],
            listaOfertas: [],
            listaCategorias: [],

            postOferta: {
                quantidade: "",
                preco: "",
                validade: "",
                id_Produto: "",
                id_Usuario: "",
                id_Cat_Produto: ""
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
        this.getOfertas();
        this.getProdutos();
        this.getCategorias();
    }

    componentDidUpdate() {
        console.log("Atualizado")
    }

    //#region GET
    getOfertas = () => {
        api.get('/oferta')
            .then(response => {
                if (response.status === 200) {
                    this.setState({ listaOfertas: response.data })
                }
            })
    }

    getCategorias = () => {
        api.get('/catproduto')
            .then(response => {
                if (response.status === 200) {
                    this.setState({ listaCategorias: response.data })
                }
            })
    }

    getProdutos = () => {
        api.get('/produto')
            .then(response => {
                if (response.status === 200) {
                    this.setState({ listaProdutos: response.data })
                }
            })
    }

    //#endregion

    //#region POST
    postSetState = (input) => {
        this.setState({
            postOferta: {
                ...this.state.postOferta, [input.target.name]: input.target.value
            }

        })
    }

    postOferta = (p) => {

        p.preventDefault();
        console.log("Cadastrando");

        api.post ('/Oferta', this.state.postOferta)
           
            .then(response => {
                console.log(response);
                this.setState({ sucessMsg: "Produto cadastrado com sucesso!" });
            })
            .catch(error => {
                console.log(error);
                this.setState({ erroMsg: "Não foi possível cadastrar produto!" });
            })

        setTimeout(() => {
            this.listaOfertas();
        }, 1500);
    }

    //#endregion

    render() {

        return (

            <div>
                <Header></Header>
                <main>

                    <div className="container_cadastro">
                        <div className="card_produto">
                            <h1 className="titulo_cadastro">Cadastro de Produto</h1>

                            <form onSubmit={this.postOferta}>
                                <div className="conjunto_cadastro">
                                    <div className="form-group">
                                        <label htmlFor="nomeProd">Nome do Produto</label>
                                        <div className="input-button">
                                            <input
                                                id="nomeProduto"
                                                type="text"
                                                name="nomeProduto"
                                                value={this.state.listaOfertas.nomeProduto}
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
                                                value={this.state.listaOfertas.quantidade}
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
                                                value={this.state.listaOfertas.preco}
                                                onChange={this.postSetState}
                                            />
                                        </div>
                                    </div>


                                    <div className="form-group">
                                        <label htmlFor="catProd">Categoria do Produto</label>
                                        <div className="input-button">
                                            <select id="descProd"
                                                name="categoriaId"
                                                value={this.state.listaOfertas.idCatProduto}
                                                onChange={this.postSetState}>
                                                {
                                                    this.state.listaCategorias.map(function (c) {
                                                        return (
                                                            <option key={c.idCatProduto} value={c.idCatProduto}>
                                                                {c.tipo}
                                                            </option>

                                                        )
                                                    })
                                                }
                                            </select>
                                        </div>
                                    </div>


                                    <div className="form-group">
                                        <label htmlFor="descProd">Descrição do Produto</label>
                                        <div className="input-button">
                                            <input id="descricaoDoProduto"
                                                type="text"
                                                name="descricaoDoProduto"
                                                value={this.state.listaOfertas.descricaoDoProduto}
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
                                                value={this.state.listaOfertas.validade}
                                                onChange={this.postSetState}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="botao_ficha_perfil">
                                        <button type="submit" className="botao_perfil">CADASTRAR</button>
                                    </div>
                           </form>
                        </div>
                        <MDBTable>
                        <MDBTableHead>
                            <tr>
                                <th>#</th>
                                <th>Nome Produto</th>
                                <th>Descrição</th>
                                <th>Preço</th>
                                <th>Quantidade</th>
                                <th>Validade</th>
                            </tr>
                        </MDBTableHead>
                        <MDBTableBody>
                            {
                                this.state.listaOfertas.map(function (o) {
                                    return (
                                        <tr key={o.idOferta}>
                                            <td>{o.idOferta}</td>
                                            <td>{o.idProdutoNavigation.nomeProduto}</td>
                                            <td>{o.idProdutoNavigation.descricaoDoProduto}</td>
                                            <td>{o.preco}</td>
                                            <td>{o.quantidade}</td>
                                            <td>{o.validade}</td>
                                        </tr>
                                    )
                                }.bind(this))
                            }
                        </MDBTableBody>
                    </MDBTable>
                        
                    </div>
                </main>
                <Rodape></Rodape>
            </div>

        );
    }
}
export default cadastroProduto;