import React, { Component } from 'react';
import Menu from '../../assets/img/menu.png';
import '../../assets/css/cabecalho.css';
import Logotipo from '../../assets/img/FONTE-1.png';
import User from '../../assets/img/usuario.png';
// import Home from '../../assets/img/home.png';
// import Apple from '../../assets/img/apple.png';
// import Dicas from '../../assets/img/dicas.png';
// import Somos from '../../assets/img/somos.png';
import Lupa from '../../assets/img/search.png';
import { Link } from 'react-router-dom';
import { usuarioAutenticado, parseJwt } from '../../services/auth';



class text extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }
    logout = () => {
        // Remove o token do localStorage
        localStorage.removeItem("usuario-fastrade");
        console.log(this.props)
        // Redireciona para o endereço '/'
        this.props.history.push("/home");
    }

    listaAtualizada = () => {
        fetch("https://localhost:5001/api/oferta/")
            .then(response => response.json())
            .then(data => this.setState({ listaNomeOferta: data }));
    }


    render() {

        const { classes } = this.props;
        const { auth, anchorEl } = this.state;
        const open = Boolean(anchorEl);

        return (
            <div>

                <header>
                    <div className="container">
                        <div className="sub_menu">
                            <img src={Logotipo} alt="Logo do site" className="logo" />
                            <div className="pesquisa">
                                <input type="text" placeholder="Busque aqui..." aria-label="Barra de busca" name="Barra_busca"
                                    className="txt_busca" />
                                <img src={Lupa} alt="Buscar" className="btn_busca" />
                            </div>

                            <div><Link to="/login"><img src={User} alt="login" className="btn_login" /></Link>
                                {usuarioAutenticado() ? (
                                    <>
                                        <a href="index_comprador.html"><img src={"http://localhost:5000/" + parseJwt().FotoUsuario} alt="" /></a>
                                    </>
                                ) : (
                                        this.props.headerprops
                                    )}

                            </div>
                        </div>
                        <nav className="menuHeader">
                            <ul>
                                <li><Link to="/Home">HOME</Link></li>
                                <li><Link to="/produtos">PRODUTOS</Link></li>
                                <li><Link to="/Dicas">DICAS</Link></li>
                                <li><Link to="/quemSomos">QUEM SOMOS</Link></li>
                            </ul>
                        </nav>
                    </div>

                    {/* menu amburguer */}
                    <input id="menu-hamburguer" type="checkbox" className="hamburguinho" />

                    <label for="menu-hamburguer">
                        <div class="menuHamburguer">
                            <span class="hamburguer"></span>
                        </div>
                    </label>

                    <ul className="ulHamburguer">
                        <div className="englobaHamburguer">
                            <div className="pesquisaHamburguer">
                                <input type="text" placeholder="Busque aqui..." aria-label="Barra de busca" name="Barra_busca"
                                    className="txt_buscaHamburguer" />
                                <img src={Lupa} alt="Buscar" className="btn_buscaHamburguer"/>
                            </div>
                            <div className="parteHamburguer">
                                <div className="subParteHamburguer">
                                    {/* <img src={Home} alt="" className="iconeHome" /> */}
                                    <li><Link to="/Home" className="frase_menuHamburguer">Home</Link></li>
                                </div>
                            </div>
                            <div className="parteHamburguer">
                                <div className="subParteHamburguer">
                                    {/* <img src={Apple} alt="" className="iconeProdutos" /> */}
                                    <li><Link to="/produtos" className="frase_menuHamburguer">Produtos</Link></li>
                                </div>
                            </div>
                            <div className="parteHamburguer">
                                <div className="subParteHamburguer">
                                    {/* <img src={Dicas} alt="" className="iconeDicas" /> */}
                                    <li><Link to="/Dicas" className="frase_menuHamburguer">Dicas</Link></li>
                                </div>
                            </div>
                            <div className="parteHamburguer">
                                <div className="subParteHamburguer">
                                    {/* <img src={Somos} alt="" className="iconeSomos" /> */}
                                    <li><Link to="/quemSomos" className="frase_menuHamburguer">Quem Somos</Link></li>
                                </div>
                            </div>
                        </div>
                    </ul>

                </header>
            </div>
        );
    }
}

export default text;