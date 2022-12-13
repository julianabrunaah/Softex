import './cards.css'

function Cards (props){
    return(
        <div className="card">
             <img src={props.img} className="card__img"/>
             <div className="card__body">
                <h3 className="card__title">{props.title}</h3>
                <p className="card__description">{props.description}</p>
                <h3 className="card__price">{props.price}</h3>
                <button className="card__btn">EU QUERO</button>
             </div>
        </div>
    )
}
export default Cards