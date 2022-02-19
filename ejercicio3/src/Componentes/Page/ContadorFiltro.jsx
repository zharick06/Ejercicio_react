import {Header} from '../Layout/Header';
import { Footer } from '../Layout/Footer';
import { MainContadorFiltro} from '../Layout/MainContadorFiltro';
import '../../index.css';


export const ContadorFiltro =() =>{
    return(
        <div className="home">
            <Header/>
            <MainContadorFiltro/>
            
            <Footer/>
        </div>
    )
}