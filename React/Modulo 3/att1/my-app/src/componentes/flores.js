import flower from './imagens/flower.png';
import './flores.css';

function ContainerLeft (){
    return(
        <>
        <div>
            <img src={flower} className="img" alt="floriza"/>
        </div>
        <div className="Container-flor">
            <img src={flower} className="img2" alt="floriza"/>
            <img src={flower} className="img3" alt="floriza"/>
        </div>
    </>
    )
}
export default ContainerLeft

