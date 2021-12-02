import React, {useContext, useEffect, useState} from 'react';
import { Row, Col, Container, Table } from 'react-bootstrap';
import { cartContext } from '../../context/cartContext';
import FormCheckout from '../FormCheckout/FormCheckout';


const CartWithContent = () => {
    const {cartList, clear, itemCounter, removeItem, itemPriceCounter} = useContext(cartContext)
    const [cartQty, setcartQty] = useState(0)
    const [cartPrice, setcartPrice] = useState(0)


    useEffect(() => {
        setcartQty(itemCounter)
        setcartPrice(itemPriceCounter)
    }, cartPrice)

    return (
        <Container>
            <Row style={{minHeight:'50vh', display:'flex', alignItems:'center'}}>
                <Col>
                <h2>Carrito de compras</h2>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Cantidad</th>
                            <th>Costo</th>
                            <th>Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                    {cartList.map(prod =>
                        <tr>
                            <td>{prod.id}</td>
                            <td>{prod.title}</td>
                            <td>{prod.cantidad}</td>
                            <td>${prod.price}.00</td>
                            <td><button className="btnRmv" onClick={() => removeItem(prod.id)}>x</button></td>
                        </tr>
                    )}
                        <tr>
                            <td colSpan="3" className="totalText">Total</td>
                            <td colSpan="2" className="total">${cartPrice} </td>
                        </tr>
                    </tbody>
                    </Table>
                    <button className="btn addOn" onClick={clear}>Limpiar carrito</button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <FormCheckout />
                </Col>
            </Row>
            </Container>
    )
}

export default CartWithContent
