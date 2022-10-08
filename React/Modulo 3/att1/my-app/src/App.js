import Header from './componentes/header';
import ContainerLeft from './componentes/flores';
import Pessoa from './componentes/pessoa';
import foto from './componentes/imagens/foto.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <Header/>
      </header>
      <section>
        <div className="container-right">
          <img src={foto} className="foto"/>
        </div>
        <div className="container-center">
          <Pessoa nome="JU"
          txt="Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, 
          nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          />
        </div>
        <div className="container-left">
          <ContainerLeft/>
        </div>
      </section>
    </div>
  );
}

export default App;
