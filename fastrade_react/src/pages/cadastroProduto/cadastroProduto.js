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
                idProduto: "",
                idUsuario: "",
                idCatProduto: "",
                fotoUrlOferta: React.createRef()
            },

            erroMsg: "",
            sucessMsg: "",
            modal: false
        }
        this.postOferta = this.postOferta.bind(this);
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

    getProdutos = () => {
        api.get('/produto')
            .then(response => {
                if (response.status === 200) {
                    this.setState({ listaProdutos: response.data })
                }
            })
    }

    getCategorias = () => {
        api.get('/catproduto')
            .then(response => {
                if (response.status === 200) {
                    this.setState({ listaCategorias: response.data }, () => console.log("Categorias: ", response.data))
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
            //adicinamos um metodo callback para mostramos o objeto da oferta, apos o set state
        }, () => console.log("Objeto da oferta: ", this.state.postOferta))
    }

    postOferta = (p) => {

        p.preventDefault();
        console.log("Cadastrando");

        api.post('/Oferta', this.state.postOferta)
            .then(response => {
                console.log(response);
                this.setState({ sucessMsg: "Produto cadastrado com sucesso!" });
            })
            .catch(error => {
                console.log(error);
                this.setState({ erroMsg: "Não foi possível cadastrar produto!" });
            })

        setTimeout(() => {
            this.getOfertas();
        }, 1500);
    }
    //#endregion

    postOferta = (event) => {

    event.preventDefault();

    let infoproduto = this.state.oferta;

    let ofertaFormData = new FormData();

    ofertaFormData.set("idProduto", this.state.oferta.idProduto);
    ofertaFormData.set("idUsuario", this.state.oferta.idUsuario);
    ofertaFormData.set("idCatProduto", this.state.oferta.idCatProduto);
    ofertaFormData.set("preco", this.state.oferta.preco);
    ofertaFormData.set("validade", this.state.oferta.validade);

    }

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
                                                value={this.state.postOferta.nomeProduto}
                                                onChange={this.postSetState}
                                            />
                                        </div>
                                    </div>
                                </div>

                                
                                <div className="form-group">
                                    <label htmlFor="quant">Quantidade</label>
                                    <div className="input-button">
                                        <input id="quantidade"
                                            type="number"
                                            name="quantidade"
                                            value={this.state.postOferta.quantidade}
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
                                            value={this.state.postOferta.preco}
                                            onChange={this.postSetState}
                                        />
                                    </div>
                                </div>


                                <div className="form-group">
                                    <label htmlFor="catProd">Categoria do Produto</label>
                                    <div className="input-button">
                                        <select id="descProd"
                                            name="tipo"
                                            value={this.state.postOferta.idCatProduto}
                                            onChange={this.postSetState}
                                        >
                                            {
                                                this.state.listaCategorias.map(function (c) {
                                                    return (
                                                        <option key={c.idCatProduto} 
                                                                value={c.idCatProduto}>
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
                                            value={this.state.postOferta.descricaoDoProduto}
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
                                            value={this.state.postOferta.validade}
                                            onChange={this.postSetState}
                                        />
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
                                    <th>Imagem do Produto</th>
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
                                                <td>{o.fotoUrlOferta}</td>
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