import { useState } from 'react'
import './footer.css'

function Footer (){
    function cadastrarContato(e){
        e.preventDefault()
        console.log('Contato cadastrado!')
        alert(' Email cadastrado com sucesso! Em breve entraremos em contato.')
    }
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    return(
      <div>
        <div class="container-footer">
            <div class="row-footer">
                <div class="footer-col">
                    <h4>Studio</h4>
                    <ul>
                        <li><Link to="/sobre">Sobre</Link></li>
                        <li><a href="#">Dúvidas frequentes</a></li>
                        <li><a href="#">Equipe</a></li>
                        <li><a href="https://goo.gl/maps/2s6vMwhyEPDjucbe7">Localização</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><a href="/#cilios">Extensão de Cílios</a></li>
                        <li><a href="/#henna" >Design com Henna</a></li>
                        <li><a href="/#laser">Depilação a Laser</a></li>
                        <li><a href="/#micro">Micropigmentação</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4>Contato</h4>
                    <div id="contato" class="form-sub">
                        <form onSubmit={cadastrarContato}>
                            <input id="name" name="name" placeholder="Digite seu nome" onChange={(e) => setName(e.target.value)}/>
                            <input classNaame="email" id="email" name="email" placeholder="Digite seu Email" onChange={(e) => setEmail(e.target.value)}/>
                            <button>Enviar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
}
export default Footer;