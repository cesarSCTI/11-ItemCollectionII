import {useState, useContext} from 'react'
import { Col, Row, Container } from 'react-bootstrap';
import ItemCount from '../IItemCount/ItemCount';
import { Link } from 'react-router-dom';
import './ItemDetail.css'
import { cartContext } from '../../context/cartContext';

const ItemDetail = ({item}) => {
    const [agregado, setagregado] = useState(0);
    const {cartList, addCart} = useContext(cartContext)

    const onAdd = (count) => {
        setagregado(count);
        addCart({...item, cantidad:count})
    }
 


    return (
         <Container style={{minHeight: '50vh', backgroundColor: '#fff'}} fluid>
            <Row>
                <Col sm='auto' md={6} > 
                    <div className="img-conent">
                        <img src={item.productUrl} alt={item.title} className="img-item"/>
                    </div>
                </Col>
                <Col sm='auto' md={6}>
                <div className="contenido">
                    <div className="title">
                        <h2>{item.title}</h2>
                    </div>
                    <div className="description">
                        <p><b>ID: </b>{item.id}</p>
                        <p>{item.details}</p>
                    </div>
                    <div className="tags">
                            {/*etiquetas.map((tag) => <li>{tag}</li>)*/}
                            <p><b>Etiquetas</b></p>
                            <p>{item.tags}</p>
                    </div>
                    <div className="category">
                        <p><b>Categoria</b></p>
                        <p>{item.category}</p>
                    </div>
                    <div className="colors">
                        <p><b>Colores</b></p>
                        <p>
                            {/*colores.map((color) => <li>{color}</li>)*/}
                            {item.colors}
                        </p>
                    </div>
                    <div className="price">
                        <p>
                            <p><b>Precio</b></p>
                            ${item.price}
                        </p>
                        {/*<button className="btn addOn">Comprar</button>*/}
                        {agregado === 0 ?
                            <ItemCount stock={10} initial={1} onClick={onAdd}/>
                            :
                            <Link to="/cart">
                                <div className="group-add">
                                    <button className="btn addOnCart" style={{width:'500px', textDecoration:'none'}}>Terminar Compra</button>
                                </div>
                            </Link>
                        }
                        
                    </div>
                </div>
                </Col>
            </Row>
        </Container>
    )
}

export default ItemDetail;