import React from 'react';
import {CardImg, Button, Container, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import './FichaProducto.css';
import {ListaCarrito} from '../ListaCarrito.json';

class FichaProducto extends React.Component{
    constructor(props){
     super();
        this.state = {
            modal:false,
            ListaCarrito,
            stock: props.props.stock
        };

     this.toggle = this.toggle.bind(this);
     this.agregarCarrito = this.agregarCarrito.bind(this);
     console.log(props.props);
    };

    toggle(){
        this.setState(prevState => ({
            modal: !prevState.modal})
        );
    }

    agregarCarrito(){
        ListaCarrito.push({
            "titulo": this.props.props.title,
            "precio": this.props.props.price
        }
        );
    
     this.setState(prevState => ({
        modal: !prevState.modal,
        
     }));

     if(this.state.stock != 0){
         this.setState(prevState => ({
             stock: prevState.stock -1
         }));
        } else {alert("Stock Agotado")}

        const badge = document.getElementById("Badge1");
        badge.innerText = ListaCarrito.length;

    }
    

    render(){
        return(
         <Container>
            <Button onClick={this.toggle}>ver ficha</Button>
            <Modal isOpen={this.state.modal}>
               <ModalHeader>{this.props.props.titulo}</ModalHeader>
               <ModalBody>
                   <CardImg src={this.props.props.image}/>
                   <p>El detalle del producto seleccionado es el siguiente: </p>
                   {this.props.props.description}
                   <p>Este producto tiene un valor de <b>{this.props.props.price}</b> pesos.</p>
                   <p>Stock de <b>{this.state.stock}</b> unidades</p>
               </ModalBody>
               <ModalFooter className="ModalFooter">
                   <Button color= "primary" onClick={this.agregarCarrito}>Agregar al carrito</Button>
                   <Button color= "secondary" onClick={this.toggle}>Volver atras</Button>
               </ModalFooter>
            </Modal>
         </Container>
        );
    }
};

export default FichaProducto;