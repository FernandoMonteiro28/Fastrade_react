import React, { Component } from 'react';
import { parseJwt } from '../../services/auth';
import Header from '../../components/cabecalho/cabecalho.js';
import Rodape from '../../components/rodape/Rodape.js';
import email from '../../assets/img/usuario.png';
import cadeado from '../../assets/img/cadeado.png';
import '../../assets/css/inputs.css';
import '../../assets/css/botao.css';
import '../../assets/css/login.css';



class Login extends Component {

    constructor() {
        super();

        this.state = {
            email: "",
            senha: "",
            erroMensagem: "",
            isLoading: false
        }
    }

    atualizaEstado = (event) => {
        this.setSate({ [event.target.name]: event.target.value });
    }

    realizarLogin(event) {
        event.preventDefault();

        this.setState({ erroMensagem: '' })

        this.setState({ isLoading: true })

        fetch("https://localhost:5001/api/login", {
            method: "POST",
            body: JSON.stringify(
                {
                    email: this.state.email,
                    senha: this.state.senha,

                }),
            headers: {
                "Content-Type": "application/json"
            }
        })

            .then(response => response.json().then(data => ({ status: response.status, body: data })))
            .then(response => {
                console.log(response);

                if (response.status === 200) {
                    localStorage.setItem('usuario-fastrade', response.body.token)
                    this.setState({ isLoading: false })

                    // Exibe no console somente o token
                    console.log("Meu token é: " + response.body.token)

                    // Define base64 recebendo o payload do token
                    var base64 = localStorage.getItem('usuario-fastrade').split('.')[1]
                    // exibe no console o valor de base64
                    console.log(base64)

                    // Exibe no console o valor do payload convertido para string
                    console.log(window.atob(base64))

                    // Exibe no console o valor do payload convertido para JSON
                    console.log(JSON.parse(window.atob(base64)))

                    // Exibe no console o tipo de usuário logado

                    console.log(parseJwt().Role)

                    console.log("O seu tipo de id é ", parseJwt().Role)

                    //Caso o usuario seja um administrador ele vai para home
                    if (parseJwt().Role === '3') {
                        //console.log(this.props)
                        this.props.history.push('/PerfilComerciante');
                    }
                    else {
                        this.props.history.push('/PerfilComerciante');
                    }
                }

            })


            .catch(error => console.log(error))
    }

    atualizaEmail(input) {
        this.setState({ email: input.target.value })

    }
    atualizaSenha(input) {
        this.setState({ senha: input.target.value })

    }

    render() {
        return (
            <div>
                <Header></Header>
                <main>
                    <div className="logintudo">
                <div className="card_login">
                    

                        <h1 className="conta">Criar sua conta/Logar</h1>
                        <form onSubmit={this.realizarLogin.bind(this)}>
                            <div className="login">
                            <div className="conteudotodo">
                                <label className="item_input">

                                <img src={email} alt="email" className="acessar_email" />
                                    <input 
                                    className="estilo_input"
                                    name="email"
                                    type="text" 
                                    required 
                                    placeholder="exemplo@hotmail.com"
                                    arial-label="exemplo@hotmail.com"
                                     onChange={this.atualizaEmail.bind(this)} />
                                </label>
                            </div>
                            <div className="conteudotodo">
                                <label className="item_input">

                                <img src={cadeado} alt="senha" className="acessar_email" />
                                    <input 
                                    className="estilo_input"
                                    name="Senha" type="password" 
                                    required 
                                    placeholder="Digite sua senha..."
                                    arial-label="Digite sua senha"
                                    onChange={this.atualizaSenha.bind(this)} />
                                </label>
                                </div>
                                <div className="caixabotao">
                                    <button className="botao_cadastrar"type="submit">Entrar</button>
                                    <button className="botao_cadastrar"type="submit">Cadastrar</button>
                                </div>
                                </div>

                            </form>
                        </div>

                    </div>
                </main>
                <Rodape></Rodape>
            </div>
        );
    }
}



export default Login;