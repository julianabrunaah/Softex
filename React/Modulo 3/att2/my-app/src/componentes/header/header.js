import './header.css'
import img from './imagens/flower.png'
//import menuShow from './main'

function Header(){


    return(
        <div id='header'className="header">
        <nav>
            <div class="logo">
                <img src={img} className="img" alt="logo" />
            </div>
            
            <ul>
                <li><a href="#header">Home</a></li>
                <li><a href="#">Sobre</a></li>
                <li><a href="#contato">Contato</a></li>
            </ul>
        </nav>
        </div>
    )
}
export default Header
