import React, { useEffect } from "react";
import {useState} from 'react';
import './ItemCount.css';

const ItemCount = ({stock = 30 , initial = 1, onClick= ()=>alert('intentaste agregar algo')}) =>{


    const [count, setCount] = useState(initial);
    const [addOn, setaddOn] = useState (<>Agregar</>);
    const [alert,setAlert] = useState(<></>);
    
 
    const plus = (count, stock) => {
        if(stock === 0){}
        else{
            if(stock <= count){}
            else{
                setCount(count+1);
            }
        }
    }
    const less = (count, initial) =>{
        if(stock === 0){}
        else{
            if(initial === count){}
            else{
                setCount(count-1)
            }
        }
    }
    const addItem = (addOn, count) =>{
        if(addOn === 'Agotado'){

        }
        else{
            if(count > 1){
                setAlert(
                    <>
                    <div className="alert">
                        se añadieron {count} articulos
                        </div>
                    </>
                );
                setTimeout(()=>{
                    setAlert(<></>)
                    onClick(count);
                },500);
                
            }
            else{
                setAlert(
                    <>
                    <div className="alert">
                        se añadio {count} articulo
                        </div>
                    </>
                );
                setTimeout(()=>{
                    setAlert(<></>)
                    onClick(count);
                },500);
                
            }
        }
    }
    useEffect(() => {
        if(stock === 0){
            setaddOn('Agotado');
            return addOn;
        }
        else{
            return addOn;
        }
    }, [stock])

    
    return(
        <>
            <div className="card">  
                {/*<div className="item"></div>*/}
                <div className="group">
                    <button className="btn" onClick={()=>less(count, initial)}>-1</button> 
                    <div className="count">{count}</div>
                    <button className="btn" onClick={() => plus(count, stock)}>+1</button> 
                </div>
                <div className="group-add">
                    <button className="btn addOn" onClick={()=>addItem(addOn, count, alert)}>{addOn}</button>
                </div>
                
            </div>
            {alert}
        </>
    );
}
export default ItemCount;