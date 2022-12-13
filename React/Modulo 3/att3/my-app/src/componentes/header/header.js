import './header.css'
import img from './imagens/flower.png'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import App from '../../App'

function Header(){


    return(
        <Router>
        <nav>
            <div class="logo">
                <img src={img} className="img" alt="logo" />
            </div>
            
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/sobre">Sobre</Link>
                </li>
                <li><a href="#contato">Contato</a></li>
            </ul>
        </nav>
        <Switch>
            <Route exact path='/'>
                <App/>
            </Route>
            <Route path='/sobre'>
                <Sobre/>
            </Route>
        </Switch>
        </Router>
    )
}
export default Header
