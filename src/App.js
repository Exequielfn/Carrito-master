import React from 'react';
import Producto from './Componentes/Productos';
import './App.css';
import {Container, Row} from 'reactstrap';
import Navegacion from './Componentes/Navegacion';
import {ListaProductos} from './ListaProductos.json';

console.log(ListaProductos);
class App extends React.Component {
  constructor(props){
      super();
   
      this.state = {ListaProductos};
    }
    
    render() {
        const arregloComponentes = this.state.ListaProductos.map(
            (ListaProductos, i) => {
                return(
                    <Producto
                    key={i}
                    title={ListaProductos.title}
                    image={ListaProductos.image}
                    description={ListaProductos.description}
                    price={ListaProductos.price}   
                    stock={ListaProductos.stock}                 
                    />
                )
            }
        );
     return (
           <Container>
               <Navegacion titulo="Sitio de compras en React"/> 
               <Row>
                 {arregloComponentes}
               </Row>
           </Container>
        );
    }   
}

export default App;
