import React from 'react';
import {CardText, CardSubtitle, CardTitle, CardBody, CardImg, Col, Card} from 'reactstrap';
import './Productos.css';
import FichaProducto from './FichaProducto.js';

class Producto extends React.Component{
    render(){
        return(
         <Col sm="4">
             <Card className="Card" body outline color="primary">
                 <CardImg src={this.props.image}/>
                 <CardBody>
                     <CardTitle>{this.props.title}</CardTitle>
                     <CardSubtitle><b>Valor: </b>{this.props.price}</CardSubtitle>
                     <CardText> {this.props.description}</CardText>
                     <FichaProducto props={this.props}/>
                 </CardBody>
             </Card>
         </Col>
        );
    }
}

export default Producto;