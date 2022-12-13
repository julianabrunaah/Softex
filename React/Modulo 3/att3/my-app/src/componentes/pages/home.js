import Card from '../cards/card';
import Header from '../header/header';
import '../css/global.css';
import Footer from '../footer/footer';

function Home() {
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
  
  export default Home;