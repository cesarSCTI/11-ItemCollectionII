import React from 'react'
import { Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CartVacio = () => {
    return (
        <Container>
            <Row className="justify-content-md-center" style={{minHeight:'30vh', display:'flex', alignItems:'center'}}>
                <Col >
                    <p><b>Bienvenido a tu carrito </b></p>
                        <hr/>
                    <p>Aqui podras ver el regisro de todos los articulos </p>
                </Col>
            </Row>
            <Row>
                <Col></Col>
                <Col>
                <Link to="/" className="btn addOn">Regresar al Home</Link>
                </Col>
            </Row>
        </Container>
    )
}

export default CartVacio;