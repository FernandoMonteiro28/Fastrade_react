import React, { Component } from 'react';
import { render } from 'react-dom';
//importar a imagens
import ProdutoVenda from '../../assets/img/comida.png';

//importamos pagina de perfil do usuario 

//impotar link 
import { Link } from 'react-router-dom';

//importar o css
import pproduto from '../../assets/css/pproduto.css';

//importamos as dependencias de Route


export default class PerfilProduto extends Component {
    constructor() {
        super();
        this.state = {

        }
    }


    render() {
        return (
            <div className="conjunto_perfilp">
                <main class="main">

                    <article class="content">

                        <div className="barra_produto">
                            <Link to="/PerfilComerciante" className="opcoes">Perfil</Link>
                            <Link to="/PerfilProduto" className="opcoes">Meu Produtos</Link>
                            <Link to="/" className="opcoes">Cadastrar Produtos</Link>
                        </div>
                        <div className="produt"> 
                            <h3 class="content__title">PERFIL DE OFERTA</h3>
                            <ul class="product">

                                <li class="product__item">
                                    <div class="product__img">
                                        <img src={ProdutoVenda} alt="Imagem do Produto" className="venda_produto" />
                                    </div>
                                    <div class="product-info">
                                        <h4 class="product-info__name">Nome do Produto</h4>
                                        <p class="product-info__description">Descrição do Produto</p>
                                    </div>
                                    <strong class="product-info__price">R$ 500,00</strong>
                                    <button
                                        type="submit"
                                        onClick={event => this.setState({ ativo: false })}
                                        className="botao_cadastrar">Detalhes</button>
                                </li>

                                <li class="product__item">
                                    <div class="product__img">
                                        <img src={ProdutoVenda} alt="Imagem do Produto" className="venda_produto" />
                                    </div>
                                    <div class="product-info">
                                        <h4 class="product-info__name">Nome do Produto</h4>
                                        <p class="product-info__description">Descrição do Produto</p>
                                    </div>
                                    <strong class="product-info__price">R$ 500,00</strong>
                                    <button
                                        type="submit"
                                        onClick={event => this.setState({ ativo: false })}
                                        className="botao_cadastrar">Detalhes</button>
                                </li>

                                <li class="product__item">
                                    <div class="product__img">
                                        <img src={ProdutoVenda} alt="Imagem do Produto" className="venda_produto" />
                                    </div>
                                    <div class="product-info">
                                        <h4 class="product-info__name">Nome do Produto</h4>
                                        <p class="product-info__description">Descrição do Produto</p>
                                    </div>
                                    <strong class="product-info__price">R$ 500,00</strong>
                                    <button
                                        type="submit"
                                        onClick={event => this.setState({ ativo: false })}
                                        className="botao_cadastrar">Detalhes</button>
                                </li>

                                <li class="product__item">
                                    <div class="product__img">
                                        <img src={ProdutoVenda} alt="Imagem do Produto" className="venda_produto" />
                                    </div>
                                    <div class="product-info">
                                        <h4 class="product-info__name">Nome do Produto</h4>
                                        <p class="product-info__description">Descrição do Produto</p>
                                    </div>
                                    <strong class="product-info__price">R$ 500,00</strong>
                                    <button
                                        type="submit"
                                        onClick={event => this.setState({ ativo: false })}
                                        className="botao_cadastrar">Detalhes</button>
                                </li>

                              </ul>              
                    </div>
                    </article>
                </main>
            </div>


        );
    }
}