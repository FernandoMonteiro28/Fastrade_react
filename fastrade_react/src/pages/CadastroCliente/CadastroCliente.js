import React, { Component } from 'react';
<<<<<<< HEAD
import csscadastro from '../../assets/css/CadastroCliente.css';


class CadastroCliente extends Component {
    constructor() {
        super()

        this.state = {
            listaUsuario: [],

            CadastroCliente: {

                idTipoUsuario: "",
                nomeRazaoSocial: "",
                cpfCnpj: "",
                email: "",
                senha: "",
                celularTelefone: "",
                fotoUrlUsuario: React.createRef(),
                ruaAv: "",
                numero: "",
                complemento: "",
                cep: "",
                bairro: "",
                estado: "",


            }


        }
    }
    componentDidMount(){

    }

    postSetStateUsuario = (input) => {
        
        this.setState({
            CadastroCliente: {
                ...this.state.CadastroCliente,
                [input.target.name] : input.target.value
            }
        })

        console.log(this.state.CadastroCliente)
    }

    AtualizaTipoUsuario = (input) => {
        this.setState({
            tipo : input.target.value
        })

        console.log(this.state.tipo)
    }

    putSetStateFile = (input) => {
        this.setState({
            CadastroCliente: {
                ...this.state.CadastroCliente,
                [input.target.name]: input.target.files[0]
            }
        })
    }
    CadastroCliente = (e) => { 
        e.preventDefault();

        // Declara um objeto do tipo FormData, já que o Backend recebe este tipo.
        let usuario = new FormData();

        // Setamos o idTipoUsuario e atribuimos 2 ou 3

        // // Se o documento for = a 14 o usuario é vendedor
        // if (this.state.postUsuario.documento.length === 14) {
        //     usuario.set("idTipoUsuario", "2")

        //     // Se o documento for = a 11 ele é cliente
        // } else if (this.state.postUsuario.documento.length === 11) {
        //     usuario.set("idTipoUsuario", "3")
        // }

        console.log("POSTE: ", this.state.CadastroCliente)


        usuario.set('nomeRazaoSocial', this.state.CadastroCliente.nomeRazaoSocial);
        usuario.set('cpfCnpj', this.state.CadastroCliente.cpfCnpj);
        usuario.set('email', this.state.CadastroCliente.email);
        usuario.set('senha', this.state.CadastroCliente.senha);
        usuario.set('celularTelefone', this.state.CadastroCliente.celularTelefone);
        usuario.set('fotoUrlUsuario', this.state.CadastroCliente.fotoUrlUsuario.current.files[0]);
        usuario.set('ruaAv', this.state.CadastroCliente.ruaAv);
        usuario.set('numero', this.state.CadastroCliente.numero);
        usuario.set('complemento', this.state.CadastroCliente.complemento);
        usuario.set('cep', this.state.CadastroCliente.cep);
        usuario.set('bairro', this.state.CadastroCliente.bairro);
        usuario.set('estado', this.state.CadastroCliente.estado);
        usuario.set('idTipoUsuario', this.state.CadastroCliente.idTipoUsuario);

        fetch('http://localhost:5000/api/Usuario', {
            method: "POST",
            body: usuario,
        })
            .then(response => response.json())
            .then(response => {
                console.log("CADASTRADO COM SUCESSO" ,response);
            })
            .catch(error => console.log('Não foi possível cadastrar:' + error))
    }

=======
import '../../assets/css/cadastroCliente.css';



class CadastroCliente extends Component {

    constructor() {
        super()
        this.state = {
            email: "",
            senha: "",
            nomecompleto: "",
            celular: "",
            cpf: "",
            datanasc: "",
            endereco: "",
            numero: "",
            bairro: "",
            cep: "",
            estado: "",
            complemento: "",
            fotoCliente: React.createRef()

        }
    }
>>>>>>> 3b9f625c377f2ef51c2382de30f9210238106b7b
    render() {
        return (
            <div className="container_cadastro" >
                <div className="card">

<<<<<<< HEAD
                    <form method="POST" id="form_cadastro" onSubmit={this.CadastroCliente}>

=======
                    <form method="POST" id="form_cadastro">
>>>>>>> 3b9f625c377f2ef51c2382de30f9210238106b7b
                        <div className="formulario_cadastro">

                            <div className="direito">
                                <h1 className="criarconta">Criar uma conta</h1>
                                <label for="" />

                                <span>Tipo de usuario </span>

                                <div className="tipodeusuario">
                                    <div>
<<<<<<< HEAD
                                        Consumidor:                                      
                                        <input
                                            type="radio"
                                            name="idTipoUsuario"
                                            value={1}
                                            className="radio_casdastro"
                                            onChange={this.postSetStateUsuario}
                                        />
                                    </div>
                                   
                                    <div>
                                        Fornecedor:                                      
                                        <input
                                            type="radio"
                                            name="idTipoUsuario"
                                            value={2}
                                            className="radio_casdastro"
                                            onChange={this.postSetStateUsuario}
                                        />
                                    </div>
                                </div>



=======
                                        <input
                                            type="radio"
                                            name="usuario"
                                            value="Cliente"
                                            className="radio_casdastro" />
                                    </div>
                                    <div>
                                        <input
                                            type="radio"
                                            name="usuario"
                                            value="Fornecedor"
                                            className="radio_casdastro" />
                                    </div>
                                </div>

>>>>>>> 3b9f625c377f2ef51c2382de30f9210238106b7b
                                <div>
                                    <div>
                                        <input
                                            placeholder="Digite o seu email "
                                            type="text"
<<<<<<< HEAD
                                            name="email"
                                            value={this.state.CadastroCliente.email}
                                            onChange={this.postSetStateUsuario}
                                            className=""
                                        />
=======
                                            name="Email"
                                            className="" />
>>>>>>> 3b9f625c377f2ef51c2382de30f9210238106b7b
                                    </div>
                                    <div>
                                        <input
                                            placeholder="Digite sua senha "
                                            type="text"
<<<<<<< HEAD
                                            name="senha"
                                            value={this.state.CadastroCliente.senha}
                                            onChange={this.postSetStateUsuario}
                                            className=""
                                        />
=======
                                            name="Senha"
                                            value=""
                                            className="" />
>>>>>>> 3b9f625c377f2ef51c2382de30f9210238106b7b
                                    </div>
                                    <div>
                                        <input
                                            placeholder="Digite o nome completo "
                                            type="text"
<<<<<<< HEAD
                                            name="nomeRazaoSocial" aria-label="Digitar o nome completo"
                                            value={this.state.CadastroCliente.nomeRazaoSocial}
                                            onChange={this.postSetStateUsuario}
                                            className=""
                                        />
=======
                                            name="Nome" aria-label="Digitar o nome copleto"
                                            className="" />
>>>>>>> 3b9f625c377f2ef51c2382de30f9210238106b7b
                                    </div>
                                    <div>
                                        <input
                                            type="text"
                                            placeholder="Digite seu telefone..."
<<<<<<< HEAD
                                            name="celularTelefone" aria-label="Digitar seu telefone"
                                            value={this.state.CadastroCliente.celularTelefone}
                                            onChange={this.postSetStateUsuario}
                                            className=""
                                        />
=======
                                            name="telefone" aria-label="Digitar seu telefone"
                                            className="" />
>>>>>>> 3b9f625c377f2ef51c2382de30f9210238106b7b
                                    </div>
                                    <div>
                                        <input
                                            type="text"
                                            placeholder="Digite o CNPJ..."
<<<<<<< HEAD
                                            name="cpfCnpj" aria-label="Digitar o CNPJ"
                                            value={this.state.CadastroCliente.cpfCnpj}
                                            onChange={this.postSetStateUsuario}
                                            className=""
                                        />
=======
                                            name="CNPJ" aria-label="Digitar o CNPJ"
                                            className="" />
                                    </div>
                                    <div>
                                        <input
                                            type="date"
                                            name="data" aria-label="Digitar a data do Nascimento"
                                            className="" />
>>>>>>> 3b9f625c377f2ef51c2382de30f9210238106b7b
                                    </div>
                                </div>

                                <div className="esquerdo">
                                    <div>
                                        <input
                                            type="text"
                                            placeholder="Digite o Endereço"
<<<<<<< HEAD
                                            name="ruaAv" aria-label="Digitar o endereço"
                                            value={this.state.CadastroCliente.ruaAv}
                                            onChange={this.postSetStateUsuario}
                                            className=""
                                        />
=======
                                            name="Endereço" aria-label="Digitar o endereço"
                                            className="" />
>>>>>>> 3b9f625c377f2ef51c2382de30f9210238106b7b
                                    </div>
                                    <div>
                                        <input
                                            type="text"
                                            placeholder="000..."
<<<<<<< HEAD
                                            name="numero" aria-label="numero"
                                            value={this.state.CadastroCliente.numero}
                                            onChange={this.postSetStateUsuario}
                                            className=""
                                        />
=======
                                            name="Numero" aria-label="numero"
                                            className="" />
>>>>>>> 3b9f625c377f2ef51c2382de30f9210238106b7b
                                    </div>
                                    <div>
                                        <input
                                            type="text"
                                            placeholder="Bairro"
<<<<<<< HEAD
                                            name="bairro" aria-label="Digitar o Bairro"
                                            value={this.state.CadastroCliente.bairro}
                                            onChange={this.postSetStateUsuario}
                                            className=""
                                        />
=======
                                            name="Bairro" aria-label="Digitar o Bairro"
                                            className="" />
>>>>>>> 3b9f625c377f2ef51c2382de30f9210238106b7b
                                    </div>
                                    <div>
                                        <input
                                            type="text"
                                            placeholder="00000-000"
<<<<<<< HEAD
                                            name="cep" aria-label="Digitar o CEP"
                                            value={this.state.CadastroCliente.cep}
                                            onChange={this.postSetStateUsuario}
                                            className=""
                                        />
=======
                                            name="Cadastro" aria-label="Digitar o CEP"
                                            className="" />
>>>>>>> 3b9f625c377f2ef51c2382de30f9210238106b7b
                                    </div>
                                    <div>
                                        <input
                                            type="text"
                                            placeholder="Estado"
<<<<<<< HEAD
                                            name="estado" aria-label="Digitar o Estado"
                                            value={this.state.CadastroCliente.estado}
                                            onChange={this.postSetStateUsuario}
                                            className=""
                                        />
=======
                                            name="Cadastro" aria-label="Digitar o Estado"
                                            className="" />
>>>>>>> 3b9f625c377f2ef51c2382de30f9210238106b7b
                                    </div>
                                    <div>
                                        <input
                                            type="text"
                                            placeholder="Complemento"
<<<<<<< HEAD
                                            name="complemento" aria-label="Digitar o complemento"
                                            value={this.state.CadastroCliente.complemento}
                                            onChange={this.postSetStateUsuario}
                                            className=""
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="file"
                                            placeholder="Coloque uma foto sua"
                                            aria-label="Coloque uma foto sua"
                                            name="fotoUrlUsuario"
                                            ref={this.state.CadastroCliente.fotoUrlUsuario}
                                            onChange={this.putSetStateFile}

                                        />
=======
                                            name="Cadastro" aria-label="Digitar o complemento"
                                            className="" />
>>>>>>> 3b9f625c377f2ef51c2382de30f9210238106b7b
                                    </div>
                                    <div>
                                        <button
                                            type="submit"
<<<<<<< HEAD
                                            className="">Salvar</button>
                                    </div>

                                </div>


=======
                                            onClick=""
                                            value=""
                                            className="">Salvar</button>
                                    </div>
                                </div>
>>>>>>> 3b9f625c377f2ef51c2382de30f9210238106b7b
                            </div>
                        </div>
                    </form>

                </div>
            </div>

        );
    }
}

export default CadastroCliente;