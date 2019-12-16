// Se o documento for = a 14 o usuario é vendedor
import React, { Component } from 'react';
import '../../assets/css/CadastroProduto.css';
import Header from '../../components/cabecalho/cabecalho.js';
import Rodape from '../../components/rodape/Rodape.js';
import api from '../../services/api.js';
import apiFormData from '../../services/apiFormData.js';
import { parseJwt } from '../../services/auth';
import ModalCadastro from '../cadastroProduto/CadastroImagens';


//impotar link 
import { Link } from 'react-router-dom';

import {
    MDBTable,
    MDBTableBody,
    MDBTableHead
} from 'mdbreact';

//MODAL
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';



const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


class cadastroProduto extends Component {


    constructor(props) {
        super(props);
        this.state = {
            top: [],
            listaOfertas: [],
            listaCategorias: [],

            postOferta: {
                quantidade: "",
                preco: "",
                validade: "",
                nomeProduto: "",
                descricaoDoProduto: "",
                idCatProduto: "",
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
        this.getCategorias();
        this.getOferta();
    }

    getCategorias = () => {
        //pegando id do usuario
        // api.get('catProduto')
        // .then(response => response.json())
        //     .then(response => {
        //         console.log(response.status)
        //         if (response.status === 200) {
        //             // this.setState({ listaCategorias: response.data })
        //             console.log(response.data)
        //         }
        //     })
        fetch('https://localhost:5001/api/catProduto')
            .then(x => x.json())
            .then(x => this.setState({ listaCategorias: x }))
    }

    getOferta = () => {

        fetch('https://localhost:5001/api/oferta')
            .then(x => x.json())
            .then(x => this.setState({ listaOfertas: x }))
    }
    //#endregion

    componentDidUpdate() {
        console.log("Atualizado")
    }


    //MODAL POST
    // handleClickOpen = (o) => {
    //     this.setState({ open: true });

    //     console.log("POST", this.state.postSetState)
    // };

    // handleClose = () => {
    //     this.setState({ open: false });
    // };

    //Cadastrar 
    //MODAL CADASTRO
    //(Se retirar os dois post la de baixo da erro  aqui! )
    // handleClickOpenOferta = () => {
    //     this.setState({ openOferta: true });
    // }

    // handleCloseOferta = (fechar_modal) => {
    //     this.setState({ openOferta: false });
    //     this.setState({ fechar_modal: fechar_modal });
    // };

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

        oferta.set("preco", this.state.postOferta.preco);
        oferta.set("quantidade", this.state.postOferta.quantidade);
        oferta.set("nomeProduto", this.state.postOferta.nomeProduto);
        oferta.set("descricaoDoProduto", this.state.postOferta.descricaoDoProduto);
        oferta.set("validade", this.state.postOferta.validade);
        oferta.set("idCatProduto", this.state.postOferta.idCatProduto);
        oferta.set('fotoUrlOferta', this.state.postOferta.fotoUrlOferta.current.files[0]);

        console.log("Cadastrando");

        fetch('https://localhost:5001/api/oferta', {
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
                                                value={this.state.top.nomeProduto}
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
                                            value={this.state.top.quantidade}
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
                                            value={this.state.top.preco}
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
                                            <option value="" >Selecione</option>
                                            {
                                                this.state.listaCategorias.map(function (o) {
                                                    return (
                                                        <option key={o.idCatProduto} value={o.idCatProduto}>
                                                            {o.tipo}
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
                                            value={this.state.top.descricaoDoProduto}
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
                                            value={this.state.top.validade}
                                            onChange={this.postSetState}
                                        />
                                    </div>
                                </div>

                                {/* botão */}
                                {/* <div className="btn_botao">
                                    <button
                                        className="botao_modal"
                                        type="submit"
                                        value={this.postSetState}
                                    //     onClick={() => this.handleClickOpen()}>Cadastrar</button>
                                    // {this.state.openOferta && <ModalCadastro open_modal={this.state.openOferta} fechar_modal={this.handleCloseOferta} />}
                                    />
                                </div> */}

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

                            {/* </div>
                        <>

                            <Dialog
                                open={this.state.open}
                                TransitionComponent={Transition}
                                keepMounted
                                onClose={this.handleClose}
                                aria-labelledby="alert-dialog-slide-title"
                                aria-describedby="alert-dialog-slide-description"
                                class="modal_caixa"
                            >
                                <DialogTitle id="modalProduto" tabindex="-1" role="dialog">{""}</DialogTitle>
                                <DialogContent>

                                    <DialogContentText class="modal-dialog" role="document">
                                        <h6 class="modal-title" id="ModalLabel">Click no botão para continuar</h6>
                                    </DialogContentText>

                                    <Link to="/CadastroImagens">
                                            <button className="botao_modal" type="submit"> Cotinuar </button></Link>
                                       
                                  

                                </DialogContent>
                                <DialogActions>
                                </DialogActions>
                            </Dialog>
                        </>

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
                        </MDBTable> */}
                        </div>
                    </div>

                </main>
                <Rodape></Rodape>


            </div>

        );
    }
}
export default cadastroProduto;
