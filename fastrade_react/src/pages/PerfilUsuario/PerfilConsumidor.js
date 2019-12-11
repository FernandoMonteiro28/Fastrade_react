import React, { Component } from 'react';
import { render } from 'react-dom';
//importar a imagens
import usuario from '../../assets/img/usuario.png';
import api from './../../services/api';
import { parseJwt, usuarioAutenticado } from '../../services/auth';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Header from '../../components/cabecalho/cabecalho';
import Rodape from '../../components/rodape/Rodape.js';

//impotar link 
import { Link } from 'react-router-dom';

//importar o css
import perfil from '../../assets/css/perfil.css';



export default class PerfilConsumidor extends Component {

    //props é usado para passar dados para elementos JSX
    constructor(props) {
        super(props);

        //cada elemento de input que você terá em seu component formulário assumirá o valor de state como seu valor.
        this.state = {

            listaUsuario: [],
            listaEndereco: [],

            usuarioLogado: {
                idUsuario: "",
                idEndereco: "",
                nomeRazaoSocial: "",
                cpfCnpj: "",
                email: "",
                senha: "",
                celularTelefone: "",
                fotoUrlUsuario: "",
                idEnderecoNavigation: {
                    idEndereco: "",
                    ruaAv: "",
                    numero: "",
                    complemento: "",
                    cep: "",
                    bairro: "",
                    estado: "",
                    usuario: []
                },
                erroMsg: "",
                sucessMsg: "",
                modal: false
            }
        }

    }


    // componentDidMount() {
    //     this.getUsuario();
    //     console.log('Did');
    // }

    getUsuario = () => {
        api.get('/usuario/' + parseJwt().id)
            .then(response => {
                if (response.status === 200) {
                    this.setState({ usuarioLogado: response.data })
                }
            })
    }

    alterarStateUsuario = event => {
        this.setState({
            postUsuario: {
                ...this.state.usuario, [event.target.name]: event.target.value
            }
        });
    }

    maisInformacoes = (getUsuario) => {
        this.toggle()

        this.setState({
            listaUsuario: {
                nomeRazaoSocial: getUsuario.nomeRazaoSocial,
                email: getUsuario.email,
                cpfCnpj: getUsuario.cpfCnpj,
                celularTelefone: getUsuario.celularTelefone,

                listaEndereco: {
                    ruaAv: getUsuario.ruaAv,
                    numero: getUsuario.numero,
                    complemento: getUsuario.complemento,
                    cep: getUsuario.cep,
                    bairro: getUsuario.bairro,
                    estado: getUsuario.estado,
                }
            }
        })
    }

    usuarioLogado = (event) => {

        event.preventDefault();

        let usuario_alterado = this.state.usuario;

        let usuarioFormData = new FormData();
        usuarioFormData.set("idUsuario", this.state.usuario.idUsuario);
        usuarioFormData.set("nomeRazaoSocial", this.state.usuario.nomeRazaoSocial);
        usuarioFormData.set("cpfCnpj", this.state.usuario.cpfCnpj);
        usuarioFormData.set("email", this.state.usuario.email);
        usuarioFormData.set("senha", this.state.usuario.senha);
        usuarioFormData.set("celularTelefone", this.state.usuario.celularTelefone);

        let enderecoFormData = new FormData();

        enderecoFormData.set("idEndereco", this.state.usuario.idEndereco);
        enderecoFormData.set("idEndereco", this.state.usuario.idEndereco);
        enderecoFormData.set("ruaAv", this.state.usuario.ruaAv);
        enderecoFormData.set("numero", this.state.usuario.numero);
        enderecoFormData.set("complemento", this.state.usuario.complemento);
        enderecoFormData.set("cep", this.state.usuario.cep);
        enderecoFormData.set("bairro", this.state.usuario.bairro);
        enderecoFormData.set("estado", this.state.usuario.estado);

        usuarioFormData.set('imgusuario', this.state.updateUsuario.imgusuario.current.files[0], this.state.updateUsuario.imgusuario.value);

        api.put('/usuario/' + parseJwt().id, usuarioFormData)
        api.put('/endereco/' + parseJwt().id, enderecoFormData)

            .then(() => {

                this.setState({ successMsg: "Perfil alterado com sucesso!" });
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
                            <Link to="/PerfilConsumidor" className="opcoes_perfil">
                                Perfil
                        </Link>
                        </div>
                        <div className="conj_barra">
                            <div className="pri_barra_perfil">
                                <div className="titulo_usuario">
                                    <p>PERFIL DO USUÁRIO</p>
                                </div>

                                <div id="PerfilUsuario-lista">

                                </div>

                                <div className="dados_perf">
                                    <form onSubmit>
                                        <div className="conj_img">
                                            <input
                                                className="img_usuario"
                                                type="image"
                                                src={usuario}
                                                alt="Insire uma imagem"
                                                name="fotoUrlUsuario"
                                            //value={this.state.fotoUrlUsuario} 
                                            />
                                        </div>
                                    </form>


                                    <div className="usuario_perfil">
                                        <form onSubmit={this.getUsuario}>
                                            <div className="item_perfil">
                                                <input
                                                    className="estilo_input_perfil"
                                                    placeholder="Nome Completo"
                                                    type="text"
                                                    name="nomeRazaoSocial"
                                                // value={this.state.usuarioLogado.nomeRazaoSocial}
                                                />
                                            </div>
                                            <div className="item_perfil">
                                                <input
                                                    className="estilo_input_perfil"
                                                    placeholder="Email"
                                                    type="text"
                                                    name="email"
                                                // value={this.state.usuarioLogado.email}
                                                />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <form onSubmit={this.getUsuario} >
                                    <div className="dados_principais">

                                        <div className="item_perfil2">
                                            <input
                                                className="estilo_input_perfil"
                                                placeholder="CPF"
                                                type="text"
                                                name="cpfCNPJ"
                                            //value={this.state.usuarioLogado.cpfCnpj}
                                            />
                                        </div>
                                        <div className="item_perfil2">
                                            <input
                                                className="estilo_input_perfil"
                                                placeholder="Telefone para contato"
                                                type="text"
                                                name="celular_telefone"
                                            //value={this.state.usuarioLogado.celularTelefone} 
                                            />
                                        </div>
                                    </div>
                                    <div className="dados_principais">
                                        <div className="item_perfil2">
                                            <input
                                                className="estilo_dados_perfil"
                                                placeholder="Endereço:"
                                                type="text"
                                                name="ruaAv"
                                            //value={this.state.usuarioLogado.ruaAv} 
                                            />
                                        </div>

                                        <div className="item_perfil2">
                                            <input
                                                className="estilo_dados_perfil"
                                                placeholder="Complemento"
                                                type="text"
                                                name="complemento"
                                            // value={this.state.usuarioLogado.complemento} 
                                            />
                                        </div>
                                        <div className="item_perfil2">
                                            <input
                                                className="estilo_dados_perfil"
                                                placeholder="Numero"
                                                type="text"
                                                name="numero"
                                            // value={this.state.usuarioLogado.numero} 
                                            />
                                        </div>
                                    </div>
                                    <div className="dados_principais">

                                        <div className="item_perfil2">
                                            <input
                                                className="estilo_dados_perfil"
                                                placeholder="CEP"
                                                type="text"
                                                name="cep"
                                            // value={this.state.usuarioLogado.cep} 
                                            />
                                        </div>
                                        <div className="item_perfil2">
                                            <input
                                                className="estilo_dados_perfil"
                                                placeholder="Bairro"
                                                type="text"
                                                name="bairro"
                                            // value={this.state.usuarioLogado.bairro} 
                                            />
                                        </div>
                                        <div className="item_perfil2">
                                            <input
                                                className="estilo_dados_perfil"
                                                placeholder="Estado"
                                                type="text"
                                                name="estado"
                                            // value={this.state.usuarioLogado.estado} 
                                            />
                                        </div>
                                    </div>
                                    <div className="botao_ficha_perfil">
                                        <button
                                            type="submit"
                                            className="botao_perfil">ALTERAR</button>
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