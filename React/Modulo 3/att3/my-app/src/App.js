import Header from './componentes/header/header';
import './App.css';
import Footer from './componentes/footer/footer';
import Card from './componentes/cards/card';


function App() {
  return (
    <div className="App">
      <header>
        <Header/>
      </header>
      <div className='wrapper'>
        <Card/>
      </div>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
