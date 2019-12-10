import React, { Component } from 'react';

class CadastroCliente extends Component {

    constructor() {
        super();

        this.state = {

        }
    }
    render() {
        return {
            < div className = "container" >
            <div className="card">
                <form method="POST" id="form_cadastro">
                    <div className="formulario_cadastro">

                        <div className="direito">
                            <h1 className="criarconta">Criar uma conta</h1>
                            <label for="" />

                            <span>Tipo de usuario </span>
                            <div
                                className="tipodeusuario">

                                <div>
                                    className="botao" for=""/>
                                        <input
                                         type="radio"
                                        name="usuario"
                                        value="Cliente" 
                                        className="radio"/>
                                </div>

                                <div>
                                    className="botao"
                                    for="">
                                        <input
                                        type="radio"
                                        name="usuario"
                                        value="Fornecedor"
                                        className="radio"/>
                                </div>

                                <div>
                                    <input
                                        type="text"
                                        placeholder="Digite o seu email "
                                        name="Email" 
                                        />
                                </div>

                                <div>
                                    <input
                                        type="text"
                                        placeholder="Digite sua senha "
                                        name="Senha" 
                                        />
                                </div>


                                <div>
                                    <input
                                        type="text"
                                        placeholder="Digite o nome completo "
                                        name="Nome" aria-label="Digitar o nome copleto"/>
                                </div>


                                <div>
                                    <input
                                        type="text"
                                        placeholder="Digite seu telefone..."
                                        name="telefone" aria-label="Digitar seu telefone"/>
                                </div>

                                <div>
                                    <input
                                        type="text"
                                        placeholder="Digite o CNPJ..."
                                        name="CNPJ" aria-label="Digitar o CNPJ"/>
                                </div>
                                <div>
                                    <input
                                        type="date"
                                        name="data" aria-label="Digitar a data do Nascimento"/>
                                </div>


                            </div>

                            <div className="esquerdo">

                                <div>
                                    <input
                                        type="text"
                                        placeholder="Digite o Endereço"
                                        name="Endereço" aria-label="Digitar o endereço" />
                                </div>
                                <div>
                                    <input
                                        type="number"
                                        placeholder="000..."
                                        name="Numero" aria-label="numero" />
                                </div>

                                <div>
                                    <input
                                        type="text"
                                        placeholder="Bairro"
                                        name="Bairro" aria-label="Digitar o Bairro" />
                                </div>

                                <div>
                                    <input
                                        type="text"
                                        placeholder="00000-000"
                                        name="Cadastro" aria-label="Digitar o CEP" />
                                </div>


                                <div>
                                    <input
                                        type="text"
                                        placeholder="Estado"
                                        name="Cadastro" aria-label="Digitar o Estado" />
                                </div>


                                <diiv>
                                    <input
                                        type="text"
                                        placeholder="Complemento"
                                        name="Cadastro" aria-label="Digitar o complemento" />
                                    </div>

                                <div>
                                    <button
                                        type="submit"
                                        onClick=""
                                        value=""
                                        className="">Salvar</button>
                                </div>

                </form>
                        </div>
                    </div>

                    };
                }
                        }
                
export default CadastroCliente;