import React from 'react';
import {Badge, Button, Popover, PopoverHeader, PopoverBody, Table} from 'reactstrap';
import {ListaCarrito} from '../ListaCarrito.json'; 

class Carro extends React.Component{
    constructor(){
        super();
        this.state = {
            popoverOpen:false,
            ListaCarrito
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle(){
        this.setState(prevState =>({
            popoverOpen: !prevState.popoverOpen
        }));
    }

    SumaTotalCarrito(){
        let total = 0;
        let SumaTotalCarrito = this.state.ListaCarrito.map(
            (ListaCarrito) => {
                total += parseInt(ListaCarrito.price)* 1000
            }
        )
        return(total);
    }

    render(){
        const arregloCarrito = this.state.ListaCarrito.map(
            (ListaCarrito, i) => {
                return (
                    <tr>
                        <td>{(i += 1)}</td>
                        <td>{ListaCarrito.title}</td>
                        <td>{ListaCarrito.price}</td>
                    </tr>
                );
            }
        )
        return(
            <div>
                <Button id="Popover1" color="info">
                    <span className="material-icons">shopping_cart</span>
                    <Badge color="secundary" id="Badge1">{ListaCarrito.length}</Badge>
                </Button>

                <Popover placement="bottom" isOpen={this.state.popoverOpen} target="Popover1" toggle={this.toggle}>
                 <PopoverHeader>Listado de compras</PopoverHeader>
                    <PopoverBody>
                     <Table>
                         <thead>
                            <tr>
                                <th>#</th>
                                <th>Producto</th>
                                <th>Precio</th>
                            </tr>
                            </thead>
                            <tbody>
                             {arregloCarrito}
                            </tbody>
                            <tfoot>
                                <td>Total: </td>
                                <td></td>
                                <td>{Intl.NumberFormat("de-DE").format(this.SumaTotalCarrito())} CLP</td>
                            </tfoot>
                     </Table>
                    </PopoverBody>
                </Popover>
                    
                
            </div>         
        );
    }
}

export default Carro;