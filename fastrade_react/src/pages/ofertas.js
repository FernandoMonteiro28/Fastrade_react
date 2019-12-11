import React, { Component } from 'react';
import '../assets/css/estilo.css';
import '../assets/css/estilo.css';
import Header from '../components/cabecalho/cabecalho';
import Rodape from '../components/rodape/Rodape.js';
import api from './../services/api';

import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';

class Ofertas extends Component {
    //Alteramos o estado de um elemento através do construtor 
    constructor() {
        //Passamos o props para o componente com o super
        super();
        this.state = {

            listaProdutos: [],
            listaOfertas: [],

            postProduto: {
                nomeProduto: "",
                preco: "",
                categoriaId: "",
                quantidade: "",
                descricaoDoProduto: "",
                validade: ""
            },

            erroMsg: "",
            sucessMsg: ""
        }
        this.postProduto = this.postProduto.bind(this);
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
                    console.log("topzeira")
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
                </main>
                <Rodape></Rodape>
            </div>

        );
    }
}
export default Ofertas;