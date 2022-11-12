import './footer.css'
function Footer (){
    return(
      <div>
        <div class="container-footer">
            <div class="row-footer">
                <div class="footer-col">
                    <h4>Marco Zero</h4>
                    <ul>
                        <li><a href="https://visit.recife.br/eventos/">Prefeitura do Recife</a></li>
                        <li><a href="https://www.caixacultural.com.br/Paginas/Recife.aspx">Caixa Cultural</a></li>
                        <li><a href="https://www.instagram.com/caisdosertao/">Museu Cais do Sertão</a></li>
                        <li><a href="https://goo.gl/maps/2s6vMwhyEPDjucbe7">Localização</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <ul>
                        <li><a href="./index.html">Home</a></li>
                        <li><a href="../restautamtes/index.html">Restaurantes</a></li>
                        <li><a href="https://visit.recife.br/onde-ficar/hoteis/" >Hoteis</a></li>
                        <li><a href="../recife/index.html">Recife Antigo</a></li>
                        <li><a href="https://visit.recife.br/agenda-recife/">Programação</a></li>
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