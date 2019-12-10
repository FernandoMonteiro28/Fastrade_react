import React, { Component } from 'react';
import { render } from 'react-dom';
//importar a imagens
import usuario from '../../assets/img/usuario.png';
//importamos pagina de perfil do usuario 
import PerfilComerciante from '../PerfilUsuario/PerfilComerciante';
import PerfilProduto from './PerfilProduto';

//impotar link 
import { Link } from 'react-router-dom';

//importar o css
import perfil from '../../assets/css/perfil.css';

// importamos as dependencias de Route
import { Route, BrowserRouter as Router } from 'react-router-dom';
import api from '../../services/api';
import { parseJwt, usuarioAutenticado } from '../../services/auth';



export default class PerfilConsumidor extends Component {


    UNSAFE_componentWillMount() {
        console.log('Carregando');
    }

    buscarUsuario() {
        api.get('/usuario/' + this.state.id)
            .then(response => {
                if (response.status === 200) {
                    this.setState({ usuarioLogado: response.data });
                };
            })
    }
    // É executado quando a página carrega
    componentDidMount() {
        console.log('Did');

        localStorage.setItem("usuario-fastrade", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiJBZG0gRG8gQ2hpcXVpbmhvIiwiZW1haWwiOiJBZG1ATGl2ZS5jb20iLCJqdGkiOiI4Yzg1ZjZmOS04NDJmLTRhMjAtYWYzNC02MTlhOTZmNmU3MzgiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiIzIiwiUm9sZSI6IjMiLCJJZFVzdWFyaW8iOiIzIiwiSWRFbmRlcmVjbyI6IjEiLCJleHAiOjE1NzYwMTEwMTksImlzcyI6ImZhc3RyYWRlLmNvbSIsImF1ZCI6ImZhc3RyYWRlLmNvbSJ9.GgSUwhK_j_oM_p1IbG9OV46haZ18CcFpCYNhcMlUJzA")
        this.buscarUsuario();

        this.setState({id : parseJwt().idUsuario});
    }

    maisInformacoes = (usuario) => {
        this.toggle()

        this.setState({
            InformacoesUsuario: {
                nomeRazaoSocial: usuario.nomeRazaoSocial,
                email: usuario.email,
                cpfCnpj: usuario.cpfCnpj,
                celularTelefone: usuario.celularTelefone,
            }
        })
    }

    //Adicionar o get, para receber os dados do banco

    // Faz a chamada para a API usando fetch
    //     fetch("https://localhost:5001/api/Usuario/",
    //         {
    //             // Define o método da requisição ( GET )
    //             method: 'GET',
    //             headers: {
    //                 "Content-Type": "application/json"
    //             }
    //         })
    //         .then(resposta => resposta.json())
    //         .then(resposta => {
    //             // Caso a requisição retorne um status code 200,
    //             if (resposta.status === 200) {
    //                 // exibe no console do navegador a mensagem 'Usuario cadastrada!'
    //                 console.log('Usuario cadastrada!');
    //             };
    //         })

    //         // Caso ocorra algum erro,
    //         // exibe este erro no console do navegador
    //         .catch(erro => console.log(erro))

    //         // Então, atualiza a lista de categorias
    //         // sem o usuário precisar executar outra ação
    //         .then(this.buscarUsuario)


    componentDidUpdate() {
        console.log("Update");
    }


    componentWillUnmount() {
        console.log("Unmount")
    }

    //props é usado para passar dados para elementos JSX
    constructor(props) {
        super(props);

        //cada elemento de input que você terá em seu component formulário assumirá o valor de state como seu valor.
        this.state = {

            listaPerfilConsumidor: [],
            listaUsuario: [],
            listaEndereco: [],

            idUsuario: "",
            idEndereco: "",

            erroDeDados: "",

            usuarioLogado: {
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
            }
        }

    }

    render() {
        return (

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
                                        value={this.state.fotoUrlUsuario} />
                                </div>
                            </form>

                            {/* O estado fornece um valor à entrada e a entrada solicita uma atualização 
                            de estado quando o evento onChange é acionado – o evento onChange será 
                            acionado em cada pressionamento de tecla. */}

                            <div className="usuario_perfil">
                                <form onSubmit={this.cadastrarPerfilConsumidor}>
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
                        <form onSubmit={this.cadastrarPerfilConsumidor} >
                            <div className="dados_principais">

                                <div className="item_perfil2">
                                    <input
                                        className="estilo_input_perfil"
                                        placeholder="CPF"
                                        type="text"
                                        name="cpfCNPJ"
                                        // value={this.state.usuarioLogado.cpfCnpj}
                                         />
                                </div>
                                <div className="item_perfil2">
                                    <input
                                        className="estilo_input_perfil"
                                        placeholder="Telefone para contato"
                                        type="text"
                                        name="celular_telefone"
                                        // value={this.state.usuarioLogado.celularTelefone} 
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
                                        // value={this.state.usuarioLogado.ruaAv} 
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
                                <div >
                                    <button
                                        type="submit"
                                        className="botao_perfil">ALTERAR</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div >
            </div >
        );
    }
}