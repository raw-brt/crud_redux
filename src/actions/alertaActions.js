import { MOSTRAR_ALERTA, OCULTAR_ALERTA } from '../types';

export const mostrarAlerta = alerta => {
  return(dispatch) => {
    dispatch(crearAlerta())
  }
}

const crearAlerta = alerta => ({
  type: MOSTRAR_ALERTA,
  payload: alerta
})