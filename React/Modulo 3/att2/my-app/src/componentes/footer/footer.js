import './footer.css'
function Footer (){
    return(
      <div>
        <div class="container-footer">
            <div class="row-footer">
                <div class="footer-col">
                    <h4>Marco Zero</h4>
                    <ul>
                        <li><a href="#">Sobre</a></li>
                        <li><a href="#">Dúvidas frequentes</a></li>
                        <li><a href="#">Equipe</a></li>
                        <li><a href="https://goo.gl/maps/2s6vMwhyEPDjucbe7">Localização</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <ul>
                        <li><a href="#header">Home</a></li>
                        <li><a href="#cilios">Extensão de Cílios</a></li>
                        <li><a href="#henna" >Design com Henna</a></li>
                        <li><a href="#laser">Depilação a Laser</a></li>
                        <li><a href="#micro">Micropigmentação</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4>Contato</h4>
                    <div id="contato" class="form-sub">
                        <form action="">
                            <input type="text" placeholder="Digite seu Email" required/>
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