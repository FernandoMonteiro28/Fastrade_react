import React, { Component } from 'react';
import { render } from 'react-dom';
import usuario from '../../assets/img/usuario.png';
import api from '../../services/api.js';
import apiFormData from '../../services/apiFormData.js';
import { parseJwt } from '../../services/auth';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Header from '../../components/cabecalho/cabecalho.js';
import Rodape from '../../components/rodape/Rodape.js';

//impotar link 
import { Link } from 'react-router-dom';

//importar o css
import perfil from '../../assets/css/perfil.css';



export default class PerfilConsumidor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            top: [],

            listaUsuario: {

                idUsuario: parseJwt().IdUsuario,
                nomeRazaoSocial: "",
                cpfCnpj: "",
                email: "",
                senha: "",
                celularTelefone: "",
                fotoUrlUsuario: React.createRef(),



                perfilUsuario: {
                    idUsuario: parseJwt().IdUsuario,
                    nomeRazaoSocial: "",
                    cpfCnpj: "",
                    email: "",
                    senha: "",
                    celularTelefone: "",
                    fotoUrlUsuario: React.createRef(),
                    Rua_Av: "",
                    numero: "",
                    complemento: "",
                    cep: "",
                    bairro: "",
                    estado: "",
                },
                isEdit: true,
                erroMsg: "",
                sucessMsg: "",
            }
        }

        // this.postUsuario = this.postUsuario.bind(this);
    }

    //#region GET  Fetch
    componentDidMount() {
        this.getUsuario();
        this.getEndereco();
    }

    //GET com Fetch
    getUsuario = async () => {

        await fetch("https://localhost:5001/api/usuario/" + parseJwt().IdUsuario)
            .then(response => response.json())
            .then(data => this.setState({ top: data }))
            .then(data => console.log(this.state.top))


    }

    getEndereco = async () => {

        await fetch("https://localhost:5001/api/endereco/" + parseJwt().IdEndereco)
            .then(response => response.json())
            .then(data => this.setState({ top: data }))
            .then(data => console.log(this.state.top))


    }


    alterarStateUsuario = event => {
        this.setState({
            top: {
                ...this.state.top, [event.target.name]: event.target.value
            }
        });
    }

    alterarSetStateFile = (input) => {
        this.setState({
            perfilUsuario: {
                ...this.state.perfilUsuario, [input.target.name]: input.target.files[0]
            }
        })
    }

    perfilUsuario = (event) => {

        event.preventDefault();

        // let usuario_alterado = this.state.usuario;

        let usuarioFormData = new FormData();
        usuarioFormData.set("idUsuario", this.state.usuario.idUsuario);
        usuarioFormData.set("nomeRazaoSocial", this.state.usuario.nomeRazaoSocial);
        usuarioFormData.set("cpfCnpj", this.state.usuario.cpfCnpj);
        usuarioFormData.set("email", this.state.usuario.email);
        usuarioFormData.set("celularTelefone", this.state.usuario.celularTelefone);
        usuarioFormData.set("senha", this.state.usuario.senha);
        usuarioFormData.set("Rua_Av", this.state.usuario.Rua_Av);
        usuarioFormData.set("numero", this.state.usuario.numero);
        usuarioFormData.set("complemento", this.state.usuario.complemento);
        usuarioFormData.set("bairro", this.state.usuario.bairro);
        usuarioFormData.set("cep", this.state.usuario.senha);
        usuarioFormData.set("estado", this.state.usuario.estado);

        usuarioFormData.set('fotoUrlUsuario', this.state.perfilUsuario.fotoUrlUsuario.current.files[0], this.state.perfilUsuario.fotoUrlUsuario.value);

        apiFormData.put('/usuario/' + parseJwt().id, usuarioFormData)

            .then(() => {

                this.setState({ successMsg: "Perfil alterado com sucesso!" });
                this.setState({ isEdit: true });
            })
            .catch(error => {
                console.log(error);
            })

        setTimeout(() => {
            this.getUsuario();
        }, 1500);
    }

    habilitaInput = () => {
        this.setState({
            isEdit: false,
        })
    }


    render() {
        return (
            <div>
                <Header></Header>

                <main>
                    <div className="cabeca_perfil">
                        <div className="barra_lateral_perfil">
                            <Link to="/PerfilConsumidor" className="opcoes_perfil">Perfil</Link>
                            <Link to="/PerfilProduto" className="opcoes_perfil">Minha lista de oferta</Link>
                            <Link to="/cadastroProduto" className="opcoes_perfil">Cadastrar nova oferta</Link>

                        </div>
                        <div className="conj_barra">
                            <div className="pri_barra_perfil">
                                <div className="titulo_usuario">
                                    <p>PERFIL DO USUÁRIO</p>
                                </div>

                                <div id="PerfilUsuario-lista">

                                </div>

                                <div className="dados_perf">

                                    <form onSubmit={this.perfilUsuario}>
                                        <div className="conj_img">

                                            {/* <img src={"http://localhost:5001/ReseourceImage" + this.state.top.fotoUrlUsuario} alt="Imagem de perfil do usuário" />

                                            <input
                                                accept="image/*"
                                                type="file"
                                                src={usuario}
                                                alt="Insire uma imagem"
                                                name="fotoUrlUsuario"
                                                onChange={this.alterarSetStateFile}
                                            /> */}
                                        </div>
                                    </form>

                                    <div className="usuario_perfil">

                                        <form onSubmit={this.perfilUsuario}>

                                            <div className="item_input">
                                                <input
                                                    className="estilo_input"
                                                    type="text"
                                                    placeholder="RazaoSocial"
                                                    name="nomeRazaoSocial"
                                                    value={this.state.top.nomeRazaoSocial}
                                                    onChange={this.alterarStateUsuario}
                                                    disabled='true'
                                                />
                                            </div>

                                            <div className="item_input">
                                                <input
                                                    className="estilo_input"
                                                    placeholder="Email"
                                                    type="text"
                                                    name="email"
                                                    value={this.state.top.email}
                                                    onChange={this.alterarStateUsuario}
                                                    disabled={this.state.isEdit}
                                                />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <form onSubmit={this.getUsuario} >
                                    <div className="dados_principais">

                                        <div className="item_input2">
                                            <input
                                                className="estilo_input"
                                                placeholder="CNPJ"
                                                type="text"
                                                name="cpfCnpj"
                                                value={this.state.top.cpfCnpj}
                                                onChange={this.alterarStateUsuario}
                                                disabled={this.state.isEdit}
                                            />

                                        </div>
                                        <div className="item_input2">
                                            <input
                                                className="estilo_input"
                                                placeholder="Telefone para contato"
                                                type="text"
                                                name="celular_telefone"
                                                value={this.state.top.celularTelefone}
                                                onChange={this.alterarStateUsuario}
                                                disabled={this.state.isEdit}
                                            />
                                        </div>
                                    </div>

                                    <div className="dados_principais">
                                        <div className="item_input2">
                                            <input
                                                className="estilo_input2"
                                                placeholder="Endereço:"
                                                type="text"
                                                name="Rua_Av"
                                                value={this.state.top.Rua_Av} 
                                                onChange={this.alterarStateUsuario}
                                                disabled={this.state.isEdit}
                                            />
                                        </div>

                                        <div className="item_input2">
                                            <input
                                                className="estilo_input2"
                                                placeholder="Complemento"
                                                type="text"
                                                name="complemento"
                                                value={this.state.top.complemento}                                                 onChange={this.alterarStateUsuario}
                                                disabled={this.state.isEdit}
                                            />
                                        </div>

                                        <div className="item_input2">
                                            <input
                                                className="estilo_input2"
                                                placeholder="Numero"
                                                type="text"
                                                name="numero"
                                                value={this.state.top.numero}                                                 onChange={this.alterarStateUsuario}
                                                onChange={this.alterarStateUsuario}
                                                disabled={this.state.isEdit}
                                            />
                                        </div>
                                    </div>

                                    <div className="dados_principais">

                                        <div className="item_input2">
                                            <input
                                                className="estilo_input2"
                                                placeholder="CEP"
                                                type="text"
                                                name="cep"
                                                value={this.state.top.cep}                                                 onChange={this.alterarStateUsuario}
                                                onChange={this.alterarStateUsuario}
                                                disabled={this.state.isEdit}
                                            />
                                        </div>

                                        <div className="item_input2">
                                            <input
                                                className="estilo_input2"
                                                placeholder="Bairro"
                                                type="text"
                                                name="bairro"
                                                value={this.state.top.bairro}                                                 onChange={this.alterarStateUsuario}
                                                onChange={this.alterarStateUsuario}
                                                disabled={this.state.isEdit}
                                            />
                                        </div>

                                        <div className="item_input2">
                                            <input
                                                className="estilo_input2"
                                                placeholder="Estado"
                                                type="text"
                                                name="estado"
                                                value={this.state.top.estado}                                                 onChange={this.alterarStateUsuario}
                                                onChange={this.alterarStateUsuario}
                                                disabled={this.state.isEdit}
                                            />
                                        </div>
                                    </div>

                                    <div className="">
                                        <button
                                            type="button"
                                            onClick={this.habilitaInput}
                                            className="botao_cadastrar">Alterar</button>
                                    </div>

                                    <div className="">
                                        <button
                                            type="submit"
                                            className="botao_cadastrar">Salvar</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </main>
                <Rodape></Rodape>
            </div>
        );
    }
}