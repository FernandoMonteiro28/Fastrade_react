// import React, { Component } from 'react';
// import Laranja from '../../assets/img/laranja.jpg';
// import Card from '../../assets/img/Agrupar 14.png';
// import Cabecalho from '../../components/cabecalho/cabecalho';
// import Rodape from '../../components/rodape/Rodape';

// class Produtos extends Component {
//     constructor() {
//         super();

//         this.state = {

//             listaGetProduto: []
//         }
//     }


//         listaAtualizada = () => {
//             fetch("https://localhost:5001/api/oferta/")
//                 .then(response => response.json())
//                 .then(data => this.setState({ listaGetProduto : data }));
//         }
    

//     render() {
//         return (
//             <div>
//                 <Cabecalho {...this.props} />
//                 <div class="container_lista">
//                     <div class="busca">
//                         <h3 class="ordenar">Ordenar por:</h3>
//                         <select name="" id="">
//                             <option value="">Selecione</option>
//                             <option value="">Menor Preço</option>
//                             <option value="">Maior preço</option>
//                             <option value="">Mais Vendidos</option>
//                             <option value="">Data de Vencimento</option>
//                             <option value="">Melhor Desconto</option>
//                         </select>
//                     </div>
//                 </div>

//                 <div id="abrirModal" class="modal">
//                     <a href="#fechar" title="Fechar" class="fechar">x</a>
//                     <h2>Janela Modal</h2>
//                     <p>Esta é uma simples janela de modal.</p>
//                     <p>Você pode fazer qualquer coisa aqui, página de Login, pop-ups, ou formulários</p>
//                 </div>

//                 <div class="container_cards">
//                     {
//                         this.state.listaGetProduto.map(produto => {
                            
//                             <div class="card">
//                                 <div class="sub_card">
//                                     <img src={"https://localhost:5001/api/oferta/" + produto.fotoUrlOferta} alt="" />
//                                     <p class="produtor">{produto.nomeProduto}</p>
//                                     <p>{produto.descricaoDoProduto}</p>
//                                     <p class="dinheiro">R$ {produto.preco}</p>
//                                 </div>
//                                 <a href="#" class="btn_1">ADICIONAR</a>
//                             </div>
//                         })
//                     }
//                 </div>
//                 <p class="vermais"><a href="" class="btn_1">Ver Mais</a></p>

//                 <div align="center">

//                     <img src={Card} alt="" class="card2" />
//                 </div>
//                 <Rodape />
//             </div>
//         );
//     }
// }

// export default Produtos;