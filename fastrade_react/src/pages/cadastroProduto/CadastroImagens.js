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
    //Alteramos o estado de um elemento através do construtor 
    constructor() {
        //Passamos o props para o componente com o super
        super();
        this.state = {

            listaOfertas: [],
            listaCategorias: [],
           
          
            buscaImagem: {
                fotoUrlOferta: React.createRef()
            },

            erroMsg: "",
            sucessMsg: "",
        
        }
        //this.postOferta = this.postOferta.bind(this);
    }
    
    //#region GET
  
    // componentDidMount() {
    //     this.getOfertas();
    //     this.getCategorias();
        
    // }

    // getOferta = () => {
    //     api.get('/oferta/' + parseJwt().id)

    //     .then(response => {
    //         if (response.status === 200) {
    //             this.setState({ listaOfertas: response.data })
    //         }
    //     })
    // }

  
    //#endregion



//     //#region buscar imagens
// postOferta = (event) => {

//     event.preventDefault();

//     let informacao_produto = this.state.oferta;

//     let ofertaFormData = new FormData();
//     ofertaFormData.set("id_Produto", this.state.oferta.id_Produto);
//     ofertaFormData.set("id_Usuario", this.state.oferta.id_Usuario);
//     ofertaFormData.set("id_Cat_Produto", this.state.oferta.id_Cat_Produto);
//     ofertaFormData.set("preco", this.state.oferta.preco);
//     ofertaFormData.set("validade", this.state.oferta.validade);

//     ofertaFormData.set('fotoUrlOferta', this.state.postOferta.fotoUrlOferta.current.files[0] , this.state.postOferta.fotoUrlOferta.value);


// //#endregion
// }              

    render() {

        return (

            <div>
                <Header></Header>
                <main>

                    <div className="container_cadastro">
                        <div className="card_produto">
                            <h1 className="titulo_cadastro">Cadastro de Produto</h1>

                            
                            {/* <img src={this.state.postOferta.fotoUrlOferta} alt="Imagem do produto" />
                            {console.log("SUA FOTO É" + this.state.postOferta.fotoUrlOferta)}

                            <input
                                accept="image/*"
                                type="file"
                                name="fotoUrlOferta"
                                // onChange={this.postSetState}
                                ref={this.state.postOferta.fotoUrlOferta} /> */}

                               


                            <form>
                                <div className="botao_ficha_perfil">
                                    <button type="submit" className="botao_perfil">CADASTRAR</button>
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