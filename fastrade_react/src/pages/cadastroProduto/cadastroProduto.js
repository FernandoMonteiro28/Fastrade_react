// import React, { Component } from 'react';
// import '../../assets/css/CadastroProduto.css';
// import Header from '../../components/cabecalho/cabecalho.js';
// import Rodape from '../../components/rodape/Rodape.js';
// import api from '../../services/api.js';
// import apiFormData from '../../services/apiFormData.js';
// import { parseJwt } from '../../services/auth';
// import ModalCadastro from '../../components/modals.js/ModalCadastro.js';


// //impotar link 
// import { Link } from 'react-router-dom';

// import {
//     MDBTable,
//     MDBTableBody,
//     MDBTableHead
// } from 'mdbreact';

// //MODAL
// import Button from '@material-ui/core/Button';
// import Dialog from '@material-ui/core/Dialog';
// import DialogActions from '@material-ui/core/DialogActions';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
// import DialogTitle from '@material-ui/core/DialogTitle';
// import Slide from '@material-ui/core/Slide';



// const Transition = React.forwardRef(function Transition(props, ref) {
//     return <Slide direction="up" ref={ref} {...props} />;
// });


// class cadastroProduto extends Component {


//     constructor(props) {
//         super(props);
//         this.state = {

//             listaOfertas: [],
//             listaCategorias: [],


//             postOferta: {
//                 quantidade: "",
//                 preco: "",
//                 validade: "",
//                 nomeProduto: "",
//                 descricaoDoProduto: "",
//                 idCatProduto: "",

//                 erroMsg: "",
//                 sucessMsg: "",

//                 //modal
//                 open: false,
//                 openOferta: false
//             }
//         }
//     }

//     //Ciclo de vida 
//     componentDidMount() {
//         this.getOfertas();
//         this.getCategorias();

//     }

//     componentDidUpdate() {
//         console.log("Atualizado")
//     }


//     //MODAL POST
//     handleClickOpen = (o) => {
//         this.setState({ open: true });

//         console.log("POST", this.state.postSetState)

//     };

//     handleClose = () => {
//         this.setState({ open: false });
//     };

//     //Cadastrar 
//     //MODAL CADASTRO
//     handleClickOpenOferta = () => {
//         this.setState({ openOferta: true });
//     }

//     handleCloseOferta = (fechar_modal) => {
//         this.setState({ openOferta: false });
//         this.setState({ fechar_modal: fechar_modal });
//     };

//     //#region GET
//     getOfertas = () => {
//         api.get('/oferta')
//             .then(response => {
//                 if (response.status === 200) {
//                     this.setState({ listaOfertas: response.data })
//                 }
//             })
//     }

//     getCategorias = () => {
//         api.get('/catproduto')
//             .then(response => {
//                 if (response.status === 200) {
//                     this.setState({ listaCategorias: response.data })
//                 }
//             })
//     }
//     //#endregion


//     //#region atualizar 
//     alterarStateOferta = event => {
//         this.setState({
//             listaOfertas: {
//                 ...this.state.listaOfertas, [event.target.name]: event.target.value
//             }
//         });
//     }

//     alterarStatecadastro = event => {
//         this.setState({
//             listaCategorias: {
//                 ...this.state.listaCategorias, [event.target.name]: event.target.value
//             }
//         });
//     }
//     //#endregion

//     //#region alterar 
//     // Adicionamos um setState específico
//     alterarSetStateFile = (input) => {
//         this.setState({
//             postOferta: {
//                 ...this.state.postOferta, [input.target.name]: input.target.files[0]
//             }
//         })
//     }
//     //#endregion



//     //#region POST
//     postSetState = (input) => {
//         this.setState({
//             postOferta: {
//                 ...this.state.postOferta,
//                 [input.target.name]: input.target.value
//             }
//             //adicinamos um metodo callback para mostramos o objeto da oferta, apos o set state
//         }, () => console.log("Objeto da oferta: ", this.state.postOferta))
//     }

//     // postOferta = (p) => {

//     //     p.preventDefault();
//     //     console.log("Cadastrando");


//     //     api.post('/Oferta', this.state.postOferta)
//     //         .then(response => {
//     //             console.log(response);
//     //             this.setState({ sucessMsg: "Cadastro realizado com sucesso!" });
//     //         })
//     //         .catch(error => {
//     //             console.log(error);
//     //             this.setState({ erroMsg: "Favor preencher todos os campos necessarios para cadastrar!" });
//     //         })

//     //     setTimeout(() => {
//     //         this.getOfertas();
//     //     }, 1500);

//     // }
//     //#endregion



//     postOferta = (event) => {

//         event.preventDefault();

//         console.log(this.state.postOferta)

//         let infoproduto = this.state.postOferta.idOferta;

//         let ofertaFormData = new FormData();
//         ofertaFormData.set("preco", this.state.postOferta.preco);
//         ofertaFormData.set("quantidade", this.state.postOferta.quantidade);
//         ofertaFormData.set("nomeProduto", this.state.postOferta.nomeProduto);
//         ofertaFormData.set("descricaoDoProduto", this.state.postOferta.descricaoDoProduto);
//         ofertaFormData.set("validade", this.state.postOferta.validade);
//         ofertaFormData.set("idCatProduto", this.state.postOferta.idCatProduto);
//         ofertaFormData.set("idOferta", this.state.postOferta.idOferta);


//     }

//     render() {

//         return (

//             <div>
//                 <Header></Header>
//                 <main>

//                     <div className="container_cadastro">
//                         <div className="card_produto">
//                             <h1 className="titulo_cadastro">Cadastro de Produto</h1>

//                             <form onSubmit={this.postOferta}>

//                                 <div className="conjunto_cadastro">
//                                     <div className="form-group">
//                                         <label htmlFor="nomeProd">Nome do Produto</label>
//                                         <div className="input-button">
//                                             <input
//                                                 id="nomeProduto"
//                                                 type="text"
//                                                 name="nomeProduto"
//                                                 value={this.state.postOferta.nomeProduto}
//                                                 onChange={this.postSetState}
//                                             />
//                                         </div>
//                                     </div>
//                                 </div>


//                                 <div className="form-group">
//                                     <label htmlFor="quant">Quantidade</label>
//                                     <div className="input-button">
//                                         <input id="quantidade"
//                                             type="number"
//                                             name="quantidade"
//                                             value={this.state.postOferta.quantidade}
//                                             onChange={this.postSetState}
//                                         />
//                                     </div>
//                                 </div>

//                                 <div className="form-group">
//                                     <label htmlFor="PrecoProd">Preço do Produto</label>
//                                     <div className="input-button">
//                                         <input id="preco"
//                                             type="valor"
//                                             name="preco"
//                                             value={this.state.postOferta.preco}
//                                             onChange={this.postSetState}
//                                         />
//                                     </div>
//                                 </div>


//                                 <div className="form-group">
//                                     <label htmlFor="catProd">Categoria do Produto</label>
//                                     <div className="input-button">
//                                         <select id="categorias"
//                                             name="idCatProduto"
//                                             type="file"
//                                             onChange={this.postSetState}
//                                         >
//                                             <option value="">Selecione</option>
//                                             {
//                                                 this.state.listaCategorias.map(function (o) {
//                                                     return (
//                                                         <option key={o.idCatProduto} value={o.idCatProduto}>
//                                                             {o.tipo}
//                                                         </option>

//                                                     )
//                                                 }.bind(this))

//                                             }
//                                         </select>
//                                     </div>
//                                 </div>

//                                 <div className="form-group">
//                                     <label htmlFor="descProd">Descrição do Produto</label>
//                                     <div className="input-button">
//                                         <input id="descricaoDoProduto"
//                                             type="text"
//                                             name="descricaoDoProduto"
//                                             value={this.state.postOferta.descricaoDoProduto}
//                                             onChange={this.postSetState}
//                                         />
//                                     </div>

//                                 </div>

//                                 <div className="form-group">
//                                     <label htmlFor="valProd">Validade do Produto</label>
//                                     <div className="input-button">
//                                         <input id="validade"
//                                             type="date"
//                                             name="validade"
//                                             value={this.state.postOferta.validade}
//                                             onChange={this.postSetState}
//                                         />
//                                     </div>
//                                 </div>

//                                 {/* botão */}
//                                 <div className="btn_botao">
//                                     <button 
//                                     className="botao_modal"
//                                     type="button"
//                                     onClick={() => this.handleClickOpen(o)} >Cadastrar</button>
//                                     {this.state.openOferta && <ModalCadastro open_modal={this.state.openOferta} fechar_modal={this.handleCloseOferta} />}
//                                 </div>
//                             </form>
//                             <>
//                                 <Dialog
//                                     open={this.state.open}
//                                     TransitionComponent={Transition}
//                                     keepMounted
//                                     onClose={this.handleClose}
//                                     aria-labelledby="alert-dialog-slide-title"
//                                     aria-describedby="alert-dialog-slide-description"
//                                     class="modal_caixa"
//                                 >
//                                     <DialogTitle id="modalProduto" tabindex="-1" role="dialog">{"Editar categoria"}</DialogTitle>
//                                     <DialogContent>

//                                         <DialogContentText class="modal-dialog" role="document">
//                                             <h6 class="modal-title" id="ModalLabel">Cadastro realizado com sucesso!</h6>
//                                         </DialogContentText>

//                                         <DialogContentText>
//                                             -------------------------------------------
//                                         </DialogContentText>

//                                         <DialogContentText >
//                                             <Link to="/#" onClick={this.handleClose} color="primary" type="submit">
//                                                 Continuar cadastrando
//                                         </Link>

//                                         </DialogContentText>

//                                     </DialogContent>
//                                     <DialogActions>
//                                     </DialogActions>
//                                 </Dialog>
//                             </>
//                             {/* Modal */}
//                             {/* <div>
//                                 <div class="modal_caixa" id="modalProduto" tabindex="-1" role="dialog">
//                                     <div class="modal-dialog" role="document">
//                                         <div class="modal-content">

//                                             <div class="modal-header">
//                                                 <h6 class="modal-title" id="ModalLabel">Cadastro realizado com sucesso!</h6>
//                                             </div>

//                                             <div class="modal-footer">
//                                                 <Link to="/#" type="" class="botao_cadastrar">Continuar Cadastrando</Link>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div> */}

//                         </div>
//                         <MDBTable>
//                             <MDBTableHead>
//                                 <tr>
//                                     <th>#</th>
//                                     <th>Nome Produto</th>
//                                     <th>Descrição</th>
//                                     <th>Preço</th>
//                                     <th>Quantidade</th>
//                                     <th>Validade</th>
//                                     <th>Imagem do Produto</th>
//                                 </tr>
//                             </MDBTableHead>
//                             <MDBTableBody>
//                                 {
//                                     this.state.listaOfertas.map(function (o) {
//                                         return (
//                                             <tr key={o.idOferta}>
//                                                 <td>{o.idOferta}</td>
//                                                 <td>{o.idProdutoNavigation.nomeProduto}</td>
//                                                 <td>{o.idProdutoNavigation.descricaoDoProduto}</td>
//                                                 <td>{o.preco}</td>
//                                                 <td>{o.quantidade}</td>
//                                                 <td>{o.validade}</td>
//                                                 <td>{o.fotoUrlOferta}</td>
//                                             </tr>
//                                         )
//                                     }.bind(this))
//                                 }
//                             </MDBTableBody>
//                         </MDBTable>
//                     </div>
//                 </main>
//                 <Rodape></Rodape>


//             </div>

//         );
//     }
// }
// export default cadastroProduto;