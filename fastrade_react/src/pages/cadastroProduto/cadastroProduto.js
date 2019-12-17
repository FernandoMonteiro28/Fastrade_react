// Se o documento for = a 14 o usuario é vendedor
import React, { Component } from 'react';
import '../../assets/css/CadastroProduto.css';
import Header from '../../components/cabecalho/cabecalho.js';
import Rodape from '../../components/rodape/Rodape.js';
import api from '../../services/api.js';
import apiFormData from '../../services/apiFormData.js';
import { parseJwt } from '../../services/auth';



//impotar link 
import { Link } from 'react-router-dom';

import {
    MDBTable,
    MDBTableBody,
    MDBTableHead
} from 'mdbreact';





class cadastroProduto extends Component {


    constructor(props) {
        super(props);
        this.state = {
            top: [],
            listaOfertas: [],
            ListaProduto: [],

            postOferta: {
                IdUsuario: parseJwt().IdUsuario,
                quantidade: "",
                preco: "",
                validade: "",
                nomeProduto: "",
                descricaoDoProduto: "",
                idCatProduto: "",
                idProduto: "",
                fotoUrlOferta: React.createRef(),

                erroMsg: "",
                sucessMsg: "",

                //modal
                // open: false,
                // openOferta: false
            }
        }
    }

    //#region GET
    componentDidMount() {
        this.getProduto();
        this.getOferta();
    }

    getProduto = () => {

        fetch('http://localhost:5000/api/produto')
            .then(x => x.json())
            .then(x => this.setState({ ListaProduto: x }))
    }

    getOferta = () => {

        fetch('http://localhost:5001/api/oferta')
            .then(x => x.json())
            .then(x => this.setState({ listaOfertas: x }))
    }
    //#endregion

    componentDidUpdate() {
        console.log("Atualizado")
    }


    //#region atualizar 
    alterarStateOferta = event => {
        this.setState({
            top: {
                ...this.state.top, [event.target.name]: event.target.value
            }
        });
    }

    alterarStatecadastro = event => {
        this.setState({
            listaOfertas: {
                ...this.state.listaOfertas, [event.target.name]: event.target.value
            }
        });
    }
    //#endregion

    //#region alterar 
    // Adicionamos um setState específico
    ImagemSetStateFile = (input) => {
        this.setState({
            postOferta: {
                ...this.state.postOferta, [input.target.name]: input.target.files[0]
            }
        })
    }
    //#endregion


    //#region POST

    postSetState = (input) => {
        this.setState({
            postOferta: {
                ...this.state.postOferta,
                [input.target.name]: input.target.value
            }
            //adicinamos um metodo callback para mostramos o objeto da oferta, apos o set state
        }, () => console.log("Objeto da oferta: ", this.state.postOferta))
    }

    postOferta = (event) => {

        event.preventDefault();

        console.log(this.state.postOferta)

        let oferta = new FormData();

        oferta.set("idProduto", this.state.postOferta.idProduto);
        oferta.set("preco", this.state.postOferta.preco);
        oferta.set("quantidade", this.state.postOferta.quantidade);
        oferta.set("nomeProduto", this.state.postOferta.nomeProduto);
        oferta.set("descricaoDoProduto", this.state.postOferta.descricaoDoProduto);
        oferta.set("validade", this.state.postOferta.validade);
        oferta.set("idCatProduto", this.state.postOferta.idCatProduto);
        oferta.set('fotoUrlOfertaghfghfgh', this.state.postOferta.fotoUrlOferta.current.files[0]);
        oferta.set('fotoUrlOferta', this.state.postOferta.fotoUrlOferta.current.Value);


        console.log("Cadastrando");

        fetch('http://localhost:5000/api/oferta', {
            method: "POST",
            body: oferta,
        })
            .then(x => x.json())
            .then(x => {
                console.log(x);
                this.getOferta();
            })
            .catch(error => console.log("Falha no cadastro" + error));
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
                                        <select id="categorias"
                                            name="idProduto"
                                            type="file"
                                            onChange={this.postSetState}
                                        >
                                            <option value="" >Selecione</option>
                                            {
                                                this.state.ListaProduto.map(function (o) {
                                                    return (
                                                        <option key={o.idProduto} value={o.idProduto}>
                                                            {o.idCatProdutoNavigation.tipo}
                                                        </option>

                                                    )
                                                }.bind(this))

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

                                <div>
                                    <input
                                        type="file"
                                        accept="image/png, image/jpeg"
                                        placeholder="Coloque uma foto sua"
                                        aria-label="Coloque uma foto sua"
                                        name="fotoUrlOferta"
                                        ref={this.state.postOferta.fotoUrlOferta}
                                    />
                                </div>
                                <div>
                                    <button
                                        type="submit"
                                        className="">Salvar</button>
                                </div>
                            </form>
                        </div>
                    </div>

                </main>
                <Rodape></Rodape>


            </div>

        );
    }
}
export default cadastroProduto;
