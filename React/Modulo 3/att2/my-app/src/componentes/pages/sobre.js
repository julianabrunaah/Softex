import Card from "../cards/card";
import Header from "../header/header";
import Footer from "../footer/footer";

function Sobre(){
    return(
    <div>
        <header>
            <Header/>
        </header>
        <div className='wrapper'>
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
            </p>
        </div>
        <footer>
            <Footer/>
        </footer>
    </div>
    )
}
export default Sobre