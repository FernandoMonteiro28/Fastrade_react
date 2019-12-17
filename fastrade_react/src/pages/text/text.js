import React, { Component } from 'react';
import '../../assets/css/text.css';
import ProdutoVenda from '../../assets/img/comida.png';
import Header from '../../components/cabecalho/cabecalho';
import Rodape from '../../components/rodape/Rodape';
import { MDBBtn, MDBInput, MDBAlert, MDBContainer, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from "mdbreact";




class text extends Component {

  constructor() {
    super();
    this.state = {
      ativo: false,
    }
  }
  toggleGetoferta = (oferta) => {
    this.setState({
      ModalGetoferta: !this.state.ModalGetoferta,
      listaProdutoModal: oferta
    });
    console.log(oferta);
  }

  render() {

    return (
      <div>

        <figure class="snip1401">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample67.jpg" alt="sample67" />
          <figcaption>
            <h3></h3>
            <p>Which is worse, that everyone has his price, or that the price is always so low.</p>
          </figcaption>
          <a href="#"></a>
        </figure>
    
        <figure class="snip1401"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg" alt="sample87" />
          <figcaption>
            <h3>Will Barrow</h3>
            <p>The only skills I have the patience to learn are those that have no real application in life. </p>
          </figcaption>
          <a href="#"></a>
        </figure>

      </div>
    );
  }
}

export default text;