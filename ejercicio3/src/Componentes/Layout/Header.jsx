import { Botones } from "../UI/Botones";
import '../../index.css';
import { NavLink } from "react-router-dom";


export function Header(){
    return(
        <div className="header"> 
         <NavLink to="/">
         <Botones clase="btn1" name='Home' / ></NavLink>
         <NavLink to="/AboutUs">
         <Botones clase="btn1" name='AboutUs'/ ></NavLink>
         <NavLink to="/Contacto">
         <Botones clase="btn1" name='Contacto'/ ></NavLink>
         <NavLink to="/Contador">
         <Botones clase="btn1" name='Contador'/ ></NavLink>
         <NavLink to="/ContadorFiltro">
         <Botones clase="btn1" name='Filtro'/ ></NavLink>
         <NavLink to="/Entregar">
         <Botones clase="btn1" name='Entregar'/ ></NavLink>
         
         
             <hr />
        </div>
    )
}
