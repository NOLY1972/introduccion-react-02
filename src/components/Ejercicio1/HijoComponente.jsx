export default function HijoComponente(props) {
    return (
        <div>
            <h3>Este es el componente hijo</h3>
            <p>{props.propMensajeHijo}</p>
        </div>
    )
}