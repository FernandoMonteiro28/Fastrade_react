import React, { Component } from 'react';
import Menu from '../../assets/img/menu.png';
import '../../assets/css/cabecalho.css';
import Logotipo from '../../assets/img/FONTE-1.png';
import User from '../../assets/img/usuario.png';
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
                                <img src={Lupa} alt="Buscar" className="btn_busca" /></div>


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
                        </div>
                        {/* menu */}
                        <nav class="menu">
                                                           <label for="id-show-menu" class="show-menu">
                                    <div class="nav-icon">
                                        <img src={Menu} alt="Menu" className="menu_iconi" aria-hidden="true" /><span></span>
                                    </div>
                                </label>
                        
                            <input
                                type="checkbox"
                                id="id-show-menu"
                                class="checkbox-menu"
                                role="button" />

                            <div class="menu-block">
                                <ul class="navUL">
                                    <li><Link to="/Home" className="frase_menu">Home</Link></li>
                                    <li><Link to="/produtos" className="frase_menu">Produtos</Link></li>
                                    <li><Link to="/Dicas" className="frase_menu">Dicas</Link></li>
                                    <li><Link to="/quemSomos" className="frase_menu">Quem Somos</Link></li>
                                
                                </ul>
                            </div>
                        </nav>
                        
                    
                </header>
            </div>






        );
    }
}

export default text;