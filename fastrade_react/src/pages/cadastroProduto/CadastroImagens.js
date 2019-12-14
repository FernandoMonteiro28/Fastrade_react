import React, { Component } from 'react';
import '../../assets/css/CadastroProduto.css';
import Header from '../../components/cabecalho/cabecalho';
import Rodape from '../../components/rodape/Rodape.js';
import api from './../../services/api';
import { parseJwt, usuarioAutenticado } from '../../services/auth';
import {
    MDBTable,
    MDBTableBody,
    MDBTableHead
} from 'mdbreact';

class CadastroImagens extends Component {

    constructor(props) {
        super(props);
        this.state = {

            listaOfertas: [],

            buscaImagem: {
                idOferta: "",
                fotoUrlOferta: React.createRef()
            },

            erroMsg: "",
            sucessMsg: "",

        }
    }

    //#region GET
    componentDidMount() {
        this.getOferta();
    }

    getOferta = () => {

        fetch('https://localhost:5001/api/oferta')
            .then(response => response.json())
            .then(response => this.setState({ listaOfertas: response }))

    }

    // putSetState = (input) => {
    //     this.setState({
    //         listaUsuarios: {
    //             ...this.state.listaUsuarios, [input.target.name]: input.target.value
    //         }
    //     })
    // }

    // putSetStateFile = (input) => {
    //     this.setState({
    //         putOferta: {
    //             ...this.state.putOferta, [input.target.name]: input.target.files[0]
    //         }
    //     })
    // }

    // putOferta = (event) => {

    //     event.preventDefault();

    //     console.log(this.state.postOferta)

    //     // let infoproduto = this.state.postOferta.idOferta;

    //     let oferta = new FormData();

    //     listaOfertas.set('fotoUrlOferta', this.state.putOferta.fotoUrlOferta.current.files[0], this.state.putOferta.fotoUrlOferta.value);

    //     // 05 - Não esqueçam de passar o formData
    //     apiFormData.put('/oferta/')

    //         .then(() => {

    //             this.setState({ successMsg: "Perfil alterado com sucesso!" });
    //             this.setState({ isEdit: true });
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         })

    //     setTimeout(() => {
    //         this.getUsuarios();
    //     }, 1500);
    // }
    //#endregion

    render() {

        return (

            <div>
                <Header></Header>
                <main>

                    <div className="container_cadastro">
                        <div className="card_produto">
                            <h1 className="titulo_cadastro">Cadastro de Produto</h1>



                            <form onSubmit={this.getOferta}>
                                <div className="conjj_img">
                                  
                                        {
                                            this.state.listaOferta.map(
                                                function (oferta) {
                                                    return (
                                                        <div key={oferta.idOferta} className="alimentoss">
                                                            <img src={"http://localhost:5000/"  + this.state.top.fotoUrlUsuario} alt="Imagem de perfil do usuário" />
                                                            <p>{oferta.idProdutoNavigation.fotoUrlOferta}</p>
                                                            {/* <p className="vermelho">30% Desconto</p> */}
                                                        </div>
                                                    );
                                                }
                                            )
                                        }

{/*                                     
                                    <img src={"http://localhost:5001/ReseourceImage" + this.state.top.fotoUrlUsuario} alt="Imagem de perfil do usuário" />

                                    <input
                                        accept="image/*"
                                        type="file"
                                        // src={usuario}
                                        alt="Insire uma imagem"
                                        name="fotoUrlUsuario"
                                        onChange={this.putSetState}
                                    // onChange={this.alterarSetStateFile}
                                    /> */}
                                </div>
                            </form>
                            <form>
                                <div className="botao_ficha_perfil">
                                    <button type="submit" className="botao_perfil">Finalizar</button>
                                </div>
                            </form>
                        </div>
                        <MDBTable>
                            <MDBTableHead>
                                <tr>
                                    <th>#</th>
                                    <th>Imagem do Produto</th>
                                </tr>
                            </MDBTableHead>
                            <MDBTableBody>
                                {
                                    this.state.listaOfertas.map(function (i) {
                                        return (
                                            <tr key={i.idOferta}>
                                                <td>{i.idOferta}</td>
                                                <td>{i.fotoUrlOferta}</td>
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
export default CadastroImagens;