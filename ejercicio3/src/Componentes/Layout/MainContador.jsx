import { useState } from "react";
import '../../index.css';


export const MainContador =() =>{
 
    const [counter, setcounter]= useState(0);

    const sumarContador=()=> setcounter(counter+1);

    const restarContador=()=>setcounter(counter-1);
    
    const setearContador=()=>setcounter(0);

    return(
        <div className="home">
            <h2>Contador</h2>
            <p>{counter}</p>
            <button className="btnContador" onClick={sumarContador}>+</button>
            <button className="btnContador" onClick={setearContador}>Reset</button>
            <button className="btnContador" onClick={restarContador}>-</button>
        </div>
    )
}