import React from 'react';
import {Button, Container, Modal} from 'reactstrap';
import './FichaProducto.css';

class FichaProducto extends React.Component{
    constructor(props){
     super();

    this.state = {
        modal:false
    };

     this.toggle = this.toggle.bind(this); 
    
    }
    

    toggle(){
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }


    render(){
        return(
         <Container>
            <Button onClick={this.toggle}>ver ficha</Button>
            <Modal isOpen={this.state.modal}>
              React en Jovenes Programadores
            </Modal>
         </Container>
        );
    }
};

export default FichaProducto;