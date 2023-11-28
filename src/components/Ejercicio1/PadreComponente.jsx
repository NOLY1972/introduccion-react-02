import { useState } from 'react'
import HijoComponente from './HijoComponente'



export default function PadreComponente() {
    const [mensaje, setMensaje] = useState('Hola Mundo')

    const cambiarMensaje = () => {
        setMensaje('Hola Mundo desde el padre')
    }
    return (
        <div>
            <h2>Este es el componente padre</h2>

            <button onClick={cambiarMensaje}>Cambiar mensaje</button>
            <HijoComponente propMensajeHijo={mensaje} />

            
        </div>
    )
}

