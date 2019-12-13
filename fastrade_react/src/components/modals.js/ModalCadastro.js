// import React, { Component } from 'react';
// import '../../assets/css/CadastroProduto.css';
// import api from '../../services/api.js';


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


// class ModalCadastro extends Component {

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
//             },

//             erroMsg: "",
//             successMsg: "",
//             openCadastro: this.props.open_modal
//         }
//     }

//     postSetState = (input) => {
//         this.setState({
//             postOferta: {
//                 ...this.state.postOferta, [input.target.name]: input.target.value
//             }
//         })
//     }
//     postOferta = (c) => {

//         c.preventDefault();

//         api.post('/Oferta', this.state.postOferta)
//             .then(response => {
//                 this.setState({ response })
//                 console.log("Cadastrado concluido: ", response.data);
//             }
//             )
//         setTimeout(() => {
//             this.props.fechar_modal();
//             { this.setState({ erroMsg: "" }) }
//         }, 2000);
//     }


//     render() {
//         return (
//             <>

//                 <Dialog
//                     open={this.state.open}
//                     TransitionComponent={Transition}
//                     keepMounted
//                     onClose={this.handleClose}
//                     aria-labelledby="alert-dialog-slide-title"
//                     aria-describedby="alert-dialog-slide-description"
//                     class="modal_caixa"
//                 >
//                     <DialogTitle id="modalProduto" tabindex="-1" role="dialog">{"Editar categoria"}</DialogTitle>
//                     <DialogContent>

//                         <DialogContentText class="modal-dialog" role="document">
//                             <h6 class="modal-title" id="ModalLabel">Cadastro realizado com sucesso!</h6>
//                         </DialogContentText>

//                         <DialogContentText>
//                             -------------------------------------------
//                         </DialogContentText>

//                         <p>
//                             <Button onClick={this.props.fechar_modal} color="#BC3908">Fechar</Button>
//                         </p>
//                     </DialogContent>
//                     <DialogActions>
//                     </DialogActions>
//                 </Dialog>
//             </>

//         );
//     }
// }
// export default cadastroProduto;