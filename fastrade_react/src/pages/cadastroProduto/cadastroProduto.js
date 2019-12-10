import React, { Component } from 'react';
import '../../assets/css/CadastroProduto.css';
import api from './../../services/api';


class cadastroProduto extends Component {
    //Alteramos o estado de um elemento através do construtor 
    constructor(props) {
        //Passamos o props para o componente com o super
        super(props);
        this.state = {

            listarProd: [],

            postProduto: {
                nomeProd: "",
                precoProd: "",
                categoriaId: "",
                quantProd: "",
                descProd: "",
                valProd: ""
            },
        }

    }
    //Ciclo de vida 

    componentDidMount() {
        console.log('Carregado');
        console.log(this.listarProd);
        this.listaProdutos();
    }

    componentDidUpdate() {
        console.log("Atualizado")
    }

    // listarProdutos = () => {
    //     fetch('https://localhost:5001/api/Catproduto')
    //         .then(response => response.json())
    //         .then(data => this.setState({ listarProd: data }))
    //         .catch(error => {
    //             console.log(error)
    //         })
    // }

    // get
    listaProdutos = () => {
        api.get('/Produto')
            .then(response => {
                if (response.status === 200) {
                    this.setState({ listarProd: response.data })
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

    // postcadasroProduto = (event) => {
    //     event.preventDeafult()
    //     console.log("cadastrando")
    //     fetch("http://localhost:5000/api/Catproduto", {
    //         method: "POST",
    //         body: JSON.stringify({ listProd: this.state.nome }),
    //         headers: {
    //             "Content-Type": "application/json"
    //         }
    //     })
    //         .then(response => response.json())
    //         .then(response => {
    //             this.listaProdutos()
    //             console.log("Cadastrou")
    //         })
    //         .catch(error => console.log(error))
    // }




    render() {

        //  const{nomeProd,PrecoProd,descProd,valProd} = this.state;
        return (
            <div className="container">
                <div className="card_produto">

                    <h1 className="titulo_cadastro">Cadastro de Produto</h1>
                    <form onSubmit={this.postProduto}>
                        <div className="conjunto_cadastro">
                            <div className="form-group">
                                <label htmlFor="nomeProd">Nome do Produto</label>
                                <div className="input-button">
                                    <input
                                        id="nomeProd"
                                        type="text"
                                        name="nomeProd"
                                       // value={this.state.listaProdutos.nomeProd}
                                       // onChange={this.postSetState}
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="quantProd">Quantidade</label>
                                <div className="input-button">
                                    <input id="quantProd"
                                        type="number"
                                        name="quantProd"
                                       // value={this.state.listaProdutos.quantProd}
                                       // onChange={this.postSetState} 
                                        />
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="PrecoProd">Preço do Produto</label>
                                <div className="input-button">
                                    <input id="PrecoProd"
                                        type="valor"
                                        name="PrecoProd"
                                        value={this.state.listaProdutos.PrecoProd}
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
                                       // onChange={this.postSetState}
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
                                    <input id="descProd"
                                        type="text"
                                        name="DescProd"
                                        //value={this.state.listaProdutos.DescProd}
                                        //onChange={this.postSetState} 
                                        />
                                </div>

                            </div>

                            <div className="form-group">
                                <label htmlFor="valProd">Validade do Produto</label>
                                <div className="input-button">
                                    <input id="valProd"
                                        type="date"
                                        name="valProd"
                                        //value={this.state.listaProdutos.ValProd}
                                       // onChange={this.postSetState} 
                                        />
                                </div>
                            </div>
                        </div>
                        <div className="buttons-area">

                            <button
                                type="submit"
                                className="botao">ADICIONAR</button>

                            <button
                                type="submit"
                                className="botao">SAIR</button>
                        </div>
                    </form>

                </div>
            </div>


        );
    }
}
export default cadastroProduto;