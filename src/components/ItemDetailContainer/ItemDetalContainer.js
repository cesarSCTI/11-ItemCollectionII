import React from 'react';
import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { getFirestore } from '../../service/getFirestore';
import ItemDetail from '../ItemDetails/ItemDetail'

   /* const items = [
        {id:1, title:'chamarra', category:'invierno', price:50, productUrl:'https://m.media-amazon.com/images/I/61H7TGjtyAL._AC_SX569_.jpg', tags: 'hombre, rebajas, invierno', colors: 'Negra, Blanca, Azul',details:'La sensación más acogedora. Nuestra chamarra de denim con lavado suave se renueva para el frío con un acogedor forro de tela de rizo para abrigarte toda la temporada.'},
        {id:2, title:'chamarra 2', category:'verano', price:52, productUrl:'https://m.media-amazon.com/images/I/61H7TGjtyAL._AC_SX569_.jpg', tags: 'hombre, rebajas, invierno', colors: 'Negra, Blanca, Azul',details:'La sensación más acogedora. Nuestra chamarra de denim con lavado suave se renueva para el frío con un acogedor forro de tela de rizo para abrigarte toda la temporada.'},
        {id:3, title:'chamarra 3', category:'primavera', price:53, productUrl:'https://m.media-amazon.com/images/I/61H7TGjtyAL._AC_SX569_.jpg', tags: 'hombre, rebajas, invierno', colors: 'Negra, Blanca, Azul',details:'La sensación más acogedora. Nuestra chamarra de denim con lavado suave se renueva para el frío con un acogedor forro de tela de rizo para abrigarte toda la temporada.'},
        {id:4, title:'chamarra 4', category:'otoño', price:54, productUrl:'https://m.media-amazon.com/images/I/61H7TGjtyAL._AC_SX569_.jpg', tags: 'hombre, rebajas, invierno', colors: 'Negra, Blanca, Azul',details:'La sensación más acogedora. Nuestra chamarra de denim con lavado suave se renueva para el frío con un acogedor forro de tela de rizo para abrigarte toda la temporada.'},
        {id:5, title:'chamarra 5', category:'invierno', price:54, productUrl:'https://m.media-amazon.com/images/I/61H7TGjtyAL._AC_SX569_.jpg', tags: 'hombre, rebajas, invierno', colors: 'Negra, Blanca, Azul',details:'La sensación más acogedora. Nuestra chamarra de denim con lavado suave se renueva para el frío con un acogedor forro de tela de rizo para abrigarte toda la temporada.'},
        {id:6, title:'chamarra 6', category:'invierno', price:56, productUrl:'https://m.media-amazon.com/images/I/61H7TGjtyAL._AC_SX569_.jpg', tags: 'hombre, rebajas, invierno', colors: 'Negra, Blanca, Azul',details:'La sensación más acogedora. Nuestra chamarra de denim con lavado suave se renueva para el frío con un acogedor forro de tela de rizo para abrigarte toda la temporada.'},
        {id:7, title:'chamarra 2', category:'verano', price:52, productUrl:'https://m.media-amazon.com/images/I/61H7TGjtyAL._AC_SX569_.jpg', tags: 'hombre, rebajas, invierno', colors: 'Negra, Blanca, Azul',details:'La sensación más acogedora. Nuestra chamarra de denim con lavado suave se renueva para el frío con un acogedor forro de tela de rizo para abrigarte toda la temporada.'},
        {id:8, title:'chamarra 3', category:'primavera', price:53, productUrl:'https://m.media-amazon.com/images/I/61H7TGjtyAL._AC_SX569_.jpg', tags: 'hombre, rebajas, invierno', colors: 'Negra, Blanca, Azul',details:'La sensación más acogedora. Nuestra chamarra de denim con lavado suave se renueva para el frío con un acogedor forro de tela de rizo para abrigarte toda la temporada.'},
        {id:9, title:'chamarra 4', category:'otoño', price:54, productUrl:'https://m.media-amazon.com/images/I/61H7TGjtyAL._AC_SX569_.jpg', tags: 'hombre, rebajas, invierno', colors: 'Negra, Blanca, Azul',details:'La sensación más acogedora. Nuestra chamarra de denim con lavado suave se renueva para el frío con un acogedor forro de tela de rizo para abrigarte toda la temporada.'}
      ];
*/

const ItemDetailContainer = () => {
    const {id} = useParams();
    const [product, setproduct] = useState([]);

    
    /*const getItem = new Promise((resolve, reject) =>{
        if (true) {
            setTimeout(() => {
                resolve(items)
            }, 1000)
        }
        else {
            reject('Error')
        }
    });*/

    useEffect(() => {
       /* getItem
        .then((resp)=> {
            const pr = resp.find((ele) => {
                return(ele.id == id)
            });
            return setproduct(pr)
        })
        .catch(err => console.log(err))
        .finally('Tarea finalizada');
        */
        const dbQuery = getFirestore();

        dbQuery.collection('items').doc(id).get()
        .then(resp => setproduct({id:resp.id, ...resp.data() }))
    },[id]);
    

    return (
        <>
            <ItemDetail item={product}/>
        </>
    )
}
export default ItemDetailContainer;