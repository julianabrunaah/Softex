import {useRef} from 'react'
import './header.css'
import img from './imagens/rec.png'
//import menuShow from './main'

function Header(){
    const navRef = useRef()
  
    const showNavbar = () => {
	    navRef.current.classList.toggle("menu-btn");
        console.log('oiiiiiiiiiiiiiiiiiiiiiiii')
	};

    return(
        <div className="header">
        <nav>
            <div class="logo">
            <img src={img} className="img" alt="logo" />
            </div>
            <div class="menu-btn">
            <button class="menu-btn" onClick={showNavbar}>
                Menu
            </button>
            </div>
            
            <ul>
                <li><a href="./index.html">Home</a></li>
                <li><a href="./restaurantes/index.html">Restaurantes</a></li>
                <li><a href="https://visit.recife.br/onde-ficar/hoteis/">Hoteis</a></li>
                <li><a href="./recife/index.html">Recife Antigo</a></li>
                <li><a href="https://visit.recife.br/agenda-recife/">Programação</a></li>
                <li><a href="#contato">Contato</a></li>
            </ul>
        </nav>
        </div>
    )
}
export default Header
