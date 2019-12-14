import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
//Importamos as dependencias necessarias:
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

//importamos ccs
// import './assets/css/cadastroProduto.css';
import './assets/css/dicas.css';
import './assets/css/receita.css';
import './assets/css/produtos.css';
import './assets/css/login.css';
import 'mdbreact/dist/css/mdb.css'; 	


//importamos as paginas
import Produtos from'./pages/produtos/produtos';
import App from './pages/Home/App';
import Dicas from './pages/Dicas/Dicas';
import quemSomos from './pages/quemSomos/quemSomos';
import Receitas from './pages/Receitas/receita';
import Pudim from './pages/Receitas/Pudim';
import Arroz from './pages/Receitas/Arroz';
import Doce from './pages/Receitas/Doce';
import Brigadeiro from './pages/Receitas/Brigadeiro';
import Bolo from './pages/Receitas/Bolo';
import Farofa from './pages/Receitas/Farofa';
import Creme from './pages/Receitas/Creme';
import Pate from './pages/Receitas/Pate';
import cadastroProduto from './pages/cadastroProduto/cadastroProduto';
import PerfilComerciante from './pages/PerfilUsuario/PerfilComerciante';
import PerfilConsumidor from './pages/PerfilUsuario/PerfilConsumidor';
import PerfilProduto from './pages/PerfilUsuario/PerfilProduto';
import CadastroCliente from './pages/CadastroCliente/CadastroCliente';
import Erro from './pages/paginaErro/Erro';
import Login from'./pages/Login/Login';
import CadastroImagens from './pages/cadastroProduto/CadastroImagens';
import ModalCadastro from './components/modals.js/ModalCadastro.js';

import './assets/css/login.css';

//Criamos uma variavel que Realiza a criação das rotas:
const Rotas = (
	<Router>
		<div>
			<Switch>
				{/* Definimos a rota para as pagina */}
				<Route exact path="/" component={App} />
				<Route path="/pudim" component={Pudim} />
				<Route path="/arroz" component={Arroz} />
				<Route path="/Doce de Casca de Maracujá" component={Doce} />
				<Route path="/Bolo de casca de abóbora" component={Bolo} />
				<Route path="/Farofa de Casca de Melão" component={Farofa} />
				<Route path="/Brigadeiro de Casca de Banana" component={Brigadeiro} />
				<Route path="/Creme de Couve-Flor" component={Creme} />
				<Route path="/Patê de Alho Poró" component={Pate} />
				<Route path="/Home" component={App} />
				<Route path="/Dicas" component={Dicas} />
				<Route path="/Dica" component={Dicas} />
				<Route path="/produtos" component={Produtos} />
				<Route path="/quemSomos" component={quemSomos} />
				<Route path="/receitas" component={Receitas} />
				<Route path="/cadastroProduto" component={cadastroProduto} />
				<Route path="/CadastroCliente" component={CadastroCliente} />
				<Route path="/PerfilComerciante" component={PerfilComerciante} />
            	<Route path="/PerfilConsumidor" component={PerfilConsumidor} />
            	<Route path="/PerfilProduto" component={PerfilProduto} />
				<Route path="/cadastroProdutos" component={cadastroProduto} />
				<Route path="/Login" component={Login}/>
				<Route path="/CadastroImagens" component={CadastroImagens}/>
				<Route path="/ModalCadastro" component={ModalCadastro}/>

				<Route component={Erro} />
			</Switch>
		</div>
	</Router>
)

//Trocamos ao App padrão pelas nossas rotas
ReactDOM.render(Rotas, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

