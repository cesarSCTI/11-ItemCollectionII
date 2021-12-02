import React, {useState, useContext} from 'react'
import { Alert } from 'react-bootstrap';
import { cartContext } from '../../context/cartContext';
import { getFirestore } from '../../service/getFirestore';
import './form.css';

const FormCheckout = () => {
    const {cartList, clear, itemPriceCounter} = useContext(cartContext)
    const [formData, setformData] = useState({
        name:'',
        phone:'',
        email: ''
    })
    const [orderId, setorderId] = useState(undefined)

    const createOrder = (e) =>{ // generamos la orden 
        e.preventDefault() 
        const orden = {}
        orden.buyer = {nombre: formData.name, email: formData.email, tel:formData.phone}
        orden.total = itemPriceCounter()
        orden.items = cartList.map(item =>{
            const id = item.id
            const nombre = item.title
            const precio = item.price * item.cantidad
            return{id, nombre, precio} 
        })

        const dbQuery = getFirestore();
        dbQuery.collection('orders').add(orden)
        .then(resp => setorderId(resp.id))
        .catch(err=> console.log(err))
        //console.log(orden)
    }
    const handleChange=(e)=>{ //obtenemos los datos del formulario
        setformData({
            ...formData, 
            [e.target.name]: e.target.value
        })
        //console.log(formData.name)
    }

    return (
        <div className="container-form">
            <h2>Terminar la compra</h2>
            <form onSubmit={createOrder} onChange={handleChange}>
                <input type='text' name='name' placeholder='Nombre: Juan' required className="input-form"/>
                <input type='email' name='email' placeholder='juan@juanito.com' required className="input-form"/>
                <input type='text' name='phone' placeholder='101 001 1010' required className="input-form"/>
                <button class="btn addOn ">Comprar</button>
            </form>

            {orderId === undefined 
            ? <p></p> 
            :
            <Alert  variant='succes'>
                Felicidades tu orden fue creada con exito <b>orden de seguimiento: </b> {orderId}
                <button onClick={clear} className="thanks">Gracias</button>
            </Alert>}
        </div>

    )
}

export default FormCheckout


