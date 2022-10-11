import './pessoa.css'

function Pessoa(props){
    return(
        <div className="pessoa">
            <h1>{props.nome}</h1>
            <p>{props.txt}</p>
        </div>
    )
}
export default Pessoa