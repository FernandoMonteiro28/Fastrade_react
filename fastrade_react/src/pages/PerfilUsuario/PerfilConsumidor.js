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

            listaUsuario: [],
            listaEndereco: [],

            perfilUsuario: {    
                idUsuario: parseJwt().idUsuario,
                nomeRazaoSocial: "",
                cpfCnpj: "",
                email: "",
                senha: "",
                celularTelefone: "",
                fotoUrlUsuario: React.createRef(),
                idEnderecoNavigation: {
                    idEndereco: parseJwt().idEndereco ,
                    nomeEndereco: "",
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

        this.postUsuario = this.postUsuario.bind(this);
    }

//#region GET
componentDidMount() {
    this.getUsuario();
    this.getEndereco();
}

getUsuario = () => {
    //pegando id do usuario
    api.get('/usuario/' + parseJwt().id)

    .then(response => {
        if (response.status === 200) {
            this.setState({ listaUsuario: response.data })
        }
    })
}

getEndereco = () => {
    //pegando id do usuario
    api.get('/endereco/' + parseJwt().id)

    .then(response => {
        if (response.status === 200) {
            this.setState({ listaEndereco: response.data })
        }
    })
}

//#endregion



//#region POST

// Cadastrar informação do usuario
postSetState = (input) => {
    this.setState({
        postUsuario: {
            ...this.state.postUsuario,
            [input.target.name]: input.target.value
        }
        //adicinamos um metodo callback para mostramos o objeto da oferta, apos o set state
    }, () => console.log("Objeto da oferta: ", this.state.postUsuario))
}

postUsuario = (p) => {

    p.preventDefault();
    console.log("Cadastrando");

    api.post('/usuario', this.state.postUsuario)
        .then(response => {
            console.log(response);
            this.setState({ sucessMsg: "Cadastro realizado com sucesso!" });
        })
        .catch(error => {
            console.log(error);
            this.setState({erroMsg: "O campo precisa ser preenchido corretamente"});
        })

    setTimeout(() => {
        this.postUsuario();
    }, 1500);

}

//#endregion

alterarStateUsuario = event => {
    this.setState({
        listaUsuario: {
            ...this.state.listaUsuario, [event.target.name]: event.target.value
        }
    });
}

 alterarSetStateFile = (input) =>{
    this.setState({
        perfilUsuario : {
            ...this.state. perfilUsuario, [input.target.name] : input.target.files[0]
        }   
    })
}

perfilUsuario = (event) =>{

    event.preventDefault();

    // let usuario_alterado = this.state.usuario;

    let usuarioFormData = new FormData();
    usuarioFormData.set("idUsuario", this.state.usuario.idUsuario);
    usuarioFormData.set("nomeRazaoSocial", this.state.usuario.nomeRazaoSocial);
    usuarioFormData.set("cpfCnpj", this.state.usuario.cpfCnpj);
    usuarioFormData.set("email", this.state.usuario.email);
    usuarioFormData.set("celularTelefone", this.state.usuario.celularTelefone);
    usuarioFormData.set("senha", this.state.usuario.senha);
    usuarioFormData.set("idEndereco", this.state.usuario.idEndereco);
    usuarioFormData.set("nomeEndereco", this.state.usuario.nomeEndereco);
    usuarioFormData.set("numero", this.state.usuario.numero);
    usuarioFormData.set("complemento", this.state.usuario.complemento);
    usuarioFormData.set("bairro", this.state.usuario.bairro);
    usuarioFormData.set("cep", this.state.usuario.senha);
    usuarioFormData.set("estado", this.state.usuario.estado);
    
    usuarioFormData.set('fotoUrlUsuario', this.state.perfilUsuario.fotoUrlUsuario.current.files[0] , this.state.perfilUsuario.fotoUrlUsuario.value);

        apiFormData.put('/usuario/'+ parseJwt().id, usuarioFormData)
        
        .then(() => {
            
            this.setState({successMsg : "Perfil alterado com sucesso!"});
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
                                                // value={this.state.perfilUsuario.nomeRazaoSocial}
                                                />
                                            </div>

                                            <div className="item_perfil">
                                                <input
                                                    className="estilo_input_perfil"
                                                    placeholder="Email"
                                                    type="text"
                                                    name="email"
                                                // value={this.state.perfilUsuario.email}
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
                                            //value={this.state.perfilUsuario.cpfCnpj}
                                            />
                                        </div>
                                        <div className="item_perfil2">
                                            <input
                                                className="estilo_input_perfil"
                                                placeholder="Telefone para contato"
                                                type="text"
                                                name="celular_telefone"
                                            //value={this.state.perfilUsuario.celularTelefone} 
                                            />
                                        </div>
                                    </div>
                                    <div className="dados_principais">
                                        <div className="item_perfil2">
                                            <input
                                                className="estilo_dados_perfil"
                                                placeholder="Endereço:"
                                                type="text"
                                                name="nomeEndereco"
                                            //value={this.state.perfilUsuario.nomeEndereco} 
                                            />
                                        </div>

                                        <div className="item_perfil2">
                                            <input
                                                className="estilo_dados_perfil"
                                                placeholder="Complemento"
                                                type="text"
                                                name="complemento"
                                            // value={this.state.perfilUsuario.complemento} 
                                            />
                                        </div>
                                        <div className="item_perfil2">
                                            <input
                                                className="estilo_dados_perfil"
                                                placeholder="Numero"
                                                type="text"
                                                name="numero"
                                            // value={this.state.perfilUsuario.numero} 
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
                                            // value={this.state.perfilUsuario.bairro} 
                                            />
                                        </div>
                                        <div className="item_perfil2">
                                            <input
                                                className="estilo_dados_perfil"
                                                placeholder="Estado"
                                                type="text"
                                                name="estado"
                                            // value={this.state.perfilUsuario.estado} 
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