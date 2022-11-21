import {useRef} from 'react'
import './header.css'
import img from './imagens/flower.png'
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
            
            <ul>
                <li><a href="./index.html">Home</a></li>
                <li><a href="./">Sobre</a></li>
                <li><a href="#contato">Contato</a></li>
            </ul>
        </nav>
        </div>
    )
}
export default Header
