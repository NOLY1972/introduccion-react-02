import TituloEjercicio from '../TituloEjercicio'
import PadreComponente from './PadreComponente'

export default function Ejercicio1() {
  return (
    <section className="caja-ejercicio">
      <TituloEjercicio>Este es el ejercicio 1</TituloEjercicio>
      {/* Añade el resto del ejercicio aqui */}
      <PadreComponente/>
    </section>
  )
}

