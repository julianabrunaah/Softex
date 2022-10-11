import './pessoa.css';
import PropTypes from 'prop-types';

function Pessoa(props){
    return(
        <div className="pessoa">
            <h1>{props.nome}</h1>
            <p>{props.txt}</p>
        </div>
    )
}
Pessoa.protoTypes = {
    nome: PropTypes.string.isRequired,
    txt: PropTypes.string.isRequired
}
Pessoa.defaultProps={
    nome:"Dado inválido ou inexistente",
    txt:"Dado inválido ou inexistente"
}
export default Pessoa