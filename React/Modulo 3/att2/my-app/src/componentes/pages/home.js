import Card from "../cards/card";
import Header from "../header/header";
import Footer from "../footer/footer";

function Home(){
    return(
    <div>
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
    )
}
export default Home