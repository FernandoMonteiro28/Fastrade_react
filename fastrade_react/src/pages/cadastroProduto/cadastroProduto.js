import React, { Component } from 'react';
import '../../assets/css/CadastroProduto.css';
import Header from '../../components/cabecalho/cabecalho.js';
import Rodape from '../../components/rodape/Rodape.js';
import api from './../../services/api.js';


import {
    MDBTable,
    MDBTableBody,
    MDBTableHead
} from 'mdbreact';

class cadastroProduto extends Component {

    constructor() {
        super();
        this.state = {

            listaOfertas: [],
            listaCategorias: [],


            postOferta: {
                quantidade: "",
                preco: "",
                validade: "",
                nomeProduto: "",
                descricaoDoProduto: "",
                idCatProduto: "",
                catProduto: "",
            isEdit: true,
            erroMsg: "",
            sucessMsg: "",
        }
    }
    this.postOferta = this.postOferta.bind(this);
     
    }

//Ciclo de vida 
componentDidMount() {
    this.getOfertas();
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
//#endregion


//#region atualizar 
alterarStateOferta = event => {
    this.setState({
        listaOfertas: {
            ...this.state.listaOfertas, [event.target.name]: event.target.value
        }
    });
}

alterarStatecadastro = event => {
    this.setState({
        listaCategorias: {
            ...this.state.listaCategorias, [event.target.name]: event.target.value
        }
    });
}
//#endregion

//#region alterar 
// Adicionamos um setState específico
alterarSetStateFile = (input) => {
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

postOferta = (p) => {

    p.preventDefault();
    console.log("Cadastrando");

    api.post('/Oferta', this.state.postOferta)
        .then(response => {
            console.log(response);
            this.setState({ sucessMsg: "Cadastro realizado com sucesso!" });
        })
        .catch(error => {
            console.log(error);
            this.setState({ erroMsg: "Favor preencher todos os campos necessarios para cadastrar!" });
        })

    setTimeout(() => {
        this.getOfertas();
    }, 1500);

}
//#endregion



postOferta = (event) => {

    event.preventDefault();

    console.log(this.state.postOferta)

    // let infoproduto = this.state.oferta;

    let ofertaFormData = new FormData();
    ofertaFormData.set("preco", this.state.oferta.preco);
    ofertaFormData.set("quantidade", this.state.oferta.quantidade);
    ofertaFormData.set("nomeProduto", this.state.oferta.nomeProduto);
    ofertaFormData.set("descricaoDoProduto", this.state.oferta.descricaoDoProduto);
    ofertaFormData.set("validade", this.state.oferta.validade);
    ofertaFormData.set("idCatProduto", this.state.oferta.idCatProduto);


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
                                        name="idCatProduto"
                                        type="file"
                                        onChange={this.postSetState}
                                    >
                                        <option value="">Selecione</option>
                                        {
                                            this.state.listaCategorias.map(function (c) {
                                                return (
                                                    <option key={c.idCatProduto} value={c.catProduto}>
                                                        {c.tipo}
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