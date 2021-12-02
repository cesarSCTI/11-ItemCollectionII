import {useState, useEffect} from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import './itemlistcontainer.css';
import ItemCount from "../IItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getFirestore } from "../../service/getFirestore";




/*const items = [
    {id:1, title:'chamarra', category:'invierno', price:50, productUrl:'https://m.media-amazon.com/images/I/61H7TGjtyAL._AC_SX569_.jpg', tags: 'hombre, rebajas, invierno', colors: 'Negra, Blanca, Azul',details:'La sensación más acogedora. Nuestra chamarra de denim con lavado suave se renueva para el frío con un acogedor forro de tela de rizo para abrigarte toda la temporada.'},
    {id:2, title:'chamarra 2', category:'verano', price:52, productUrl:'https://m.media-amazon.com/images/I/61H7TGjtyAL._AC_SX569_.jpg', tags: 'hombre, rebajas, invierno', colors: 'Negra, Blanca, Azul',details:'La sensación más acogedora. Nuestra chamarra de denim con lavado suave se renueva para el frío con un acogedor forro de tela de rizo para abrigarte toda la temporada.'},
    {id:3, title:'chamarra 3', category:'primavera', price:53, productUrl:'https://m.media-amazon.com/images/I/61H7TGjtyAL._AC_SX569_.jpg', tags: 'hombre, rebajas, invierno', colors: 'Negra, Blanca, Azul',details:'La sensación más acogedora. Nuestra chamarra de denim con lavado suave se renueva para el frío con un acogedor forro de tela de rizo para abrigarte toda la temporada.'},
    {id:4, title:'chamarra 4', category:'otoño', price:54, productUrl:'https://m.media-amazon.com/images/I/61H7TGjtyAL._AC_SX569_.jpg', tags: 'hombre, rebajas, invierno', colors: 'Negra, Blanca, Azul',details:'La sensación más acogedora. Nuestra chamarra de denim con lavado suave se renueva para el frío con un acogedor forro de tela de rizo para abrigarte toda la temporada.'},
    {id:5, title:'chamarra 5', category:'invierno', price:54, productUrl:'https://m.media-amazon.com/images/I/61H7TGjtyAL._AC_SX569_.jpg', tags: 'hombre, rebajas, invierno', colors: 'Negra, Blanca, Azul',details:'La sensación más acogedora. Nuestra chamarra de denim con lavado suave se renueva para el frío con un acogedor forro de tela de rizo para abrigarte toda la temporada.'},
    {id:6, title:'chamarra 6', category:'invierno', price:56, productUrl:'https://m.media-amazon.com/images/I/61H7TGjtyAL._AC_SX569_.jpg', tags: 'hombre, rebajas, invierno', colors: 'Negra, Blanca, Azul',details:'La sensación más acogedora. Nuestra chamarra de denim con lavado suave se renueva para el frío con un acogedor forro de tela de rizo para abrigarte toda la temporada.'},
    {id:7, title:'chamarra 2', category:'verano', price:52, productUrl:'https://m.media-amazon.com/images/I/61H7TGjtyAL._AC_SX569_.jpg', tags: 'hombre, rebajas, invierno', colors: 'Negra, Blanca, Azul',details:'La sensación más acogedora. Nuestra chamarra de denim con lavado suave se renueva para el frío con un acogedor forro de tela de rizo para abrigarte toda la temporada.'},
    {id:8, title:'chamarra 3', category:'primavera', price:53, productUrl:'https://m.media-amazon.com/images/I/61H7TGjtyAL._AC_SX569_.jpg', tags: 'hombre, rebajas, invierno', colors: 'Negra, Blanca, Azul',details:'La sensación más acogedora. Nuestra chamarra de denim con lavado suave se renueva para el frío con un acogedor forro de tela de rizo para abrigarte toda la temporada.'},
    {id:9, title:'chamarra 4', category:'otoño', price:54, productUrl:'https://m.media-amazon.com/images/I/61H7TGjtyAL._AC_SX569_.jpg', tags: 'hombre, rebajas, invierno', colors: 'Negra, Blanca, Azul',details:'La sensación más acogedora. Nuestra chamarra de denim con lavado suave se renueva para el frío con un acogedor forro de tela de rizo para abrigarte toda la temporada.'}
  ];*/
  

const ItemListContainer = ({getting}) =>{
    const{categoryID} = useParams();
    const [catego, setcatego] = useState([]);
    const [isloading, setisloading] = useState(false)
    
    /*const getFetch = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(items)
        }, 2000)
        
    });*/
    const load = () =>{
        if(isloading){
            return(
                <Row>
                    <Col>
                        <ItemList items={catego}/>
                    </Col>
                </Row>
            )
        }
        else{
            return(
                <Row style={{minHeight: '45vh', justifyContent:'center', alignItems:'center'}}>
                    <Col>
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                    </Col>
                </Row>
            )
        }
    }
    


    useEffect(() => {
        /*getFetch
        .then(res => {
            if(categoryID){
                setcatego(res.filter(ress => ress.category === categoryID))
                setisloading(true)
            }
            else{
                setcatego(res)
                setisloading(true)
            }
        },[categoryID])
        .catch(err => console.log(err))
        .finally()*/

        /* Firestore*/
        const dbQuery = getFirestore() // conexion con firestore
        if(categoryID){
            dbQuery.collection('items').where('category', '==', categoryID).get()
            .then(resp => setcatego(resp.docs.map( 
                ele =>( { id: ele.id, ...ele.data() } ) 
                ) ))
                .catch()
                .finally(()=> setisloading(true))
        }
        else{
        dbQuery.collection('items').get() // traemos todos los documentos
        .then(resp => setcatego(resp.docs.map( 
            ele =>( { id: ele.id, ...ele.data() } ) 
            ) ))
            .catch()
            .finally(()=> setisloading(true))
        }
        
        /* End Firestore*/
    })

    
    return(
        <>
        <Container fluid className="listContainer">
            <Row>
                <Col>
                    <h3>{getting}</h3>
                </Col>
            </Row>
            
        </Container>
        <Container>
        
            {load()}
            
        </Container>
        </>
    );
}

export default ItemListContainer;