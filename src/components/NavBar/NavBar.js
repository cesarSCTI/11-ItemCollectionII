import React, {useContext, useEffect, useState} from "react";
import Navbar from 'react-bootstrap/Navbar'
import { Nav } from "react-bootstrap";
import logo from '../../../src/logo-guzmar-sport.png'
import CartWidget from "../CartWidget/CartWidget";
import './navbar.css';
import { Link } from "react-router-dom";
import { cartContext } from "../../context/cartContext";



const NavBar = () =>{
    const {itemCounter} = useContext(cartContext)

    const [cant, setcant] = useState(0)

    const emergentCount = () =>{
        if(cant != 0){
            return <div className="qty">{cant}</div>
        }
        else{
            return <></>
        }
    }

    useEffect(() => {
        setcant(itemCounter)
        //emergentCount()
    })
    return(
        <Navbar  expand="lg" style={{padding: '10px',backgroundColor:'#ececec', boxShadow:'0px 0px 10px #cecece'}}>
            <Navbar.Brand >
                <Link to="/">
                    <img src={logo} alt="logo" hight="60px" width="60px"/>
                </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav
                className="justify-content-md-center margenleft"
                navbarScroll
                >
                    <Link to="/" className="menu-item">Home</Link>
                    <Link to="/category/primavera" className="menu-item">Primavera</Link>
                    <Link to="/category/verano" className="menu-item">Verano</Link>
                    <Link to="/category/otoño" className="menu-item">Otoño</Link>
                    <Link to="/category/invierno" className="menu-item">Invierno</Link>
                    <Link to="/cart" className='margenleft'>
                        <CartWidget /> {emergentCount()}
                    </Link>
                    
                    
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBar;