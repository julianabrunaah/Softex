import flower from './imagens/flower.png';
import './flores.css';

function ContainerLeft (){
    return(
        <>
        <div>
            <img src={flower} className="img"/>
        </div>
        <div>
            <img src={flower} className="img2"/>
            <img src={flower} className="img3"/>
        </div>
    </>
    )
}
export default ContainerLeft

