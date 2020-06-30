import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { crearNuevoProductoAction } from '../actions/productoActions';
import { mostrarAlerta, ocultarAlertaAction } from '../actions/alertaActions';

const NuevoProducto = ({history}) => {

  // State del componente
  const [nombre, guardarNombre] = useState('');
  const [precio, guardarPrecio] = useState(0);

  const dispatch = useDispatch();

  // Acceder al state del store
  const cargando = useSelector(state => state.productos.loading);
  const error = useSelector(state => state.productos.error);
  const alerta = useSelector(state => state.alerta);

  const agregarProducto = producto => dispatch(crearNuevoProductoAction(producto));

  // Controlar el envío
  const submitNuevoProducto = e => {
    e.preventDefault();

    // Validación del formulario
    if (nombre.trim() === '' || precio <= 0) {
      const alerta = {
        msg: 'Ambos campos son obligatorios',
        classes: 'alert alert-danger text-center text-uppercase p3'
      }
      dispatch(mostrarAlerta(alerta));
      return;
    };
    // Control de errores
    dispatch(ocultarAlertaAction());

    // Crear producto
    agregarProducto({
      nombre,
      precio
    });

    // Redireccionar a home
    history.push('/');

  }

  return ( 
    <div className='row justify-content-center'>
      <div className='col-md-8'>
        <div className='card'>
          <div className='card-body'>
            <h2 className='text-center mb-4 font-weight-bold'>Agregar nuevo producto</h2>

            { alerta
                ? <p className={alerta.classes}>{alerta.msg}</p>
                : null
            } 

            <form
              onSubmit={submitNuevoProducto}
            >
              <div className='form-group'>
                <label>Producto</label>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Nombre del producto'
                  name='nombre'
                  value={nombre}
                  onChange={e => guardarNombre(e.target.value)}
                />
              </div>
              <div className='form-group'>
                <label>Precio</label>
                <input
                  type='number'
                  className='form-control'
                  placeholder='Precio del producto'
                  name='precio'
                  value={precio}
                  onChange={e => guardarPrecio(Number(e.target.value))}
                />
              </div>
              <button
                type='submit'
                className='btn btn-primary font-weight-bold text-uppercase d-block w-100'
              >
                Agregar
              </button>
            </form>
            {cargando ? <p>Cargando...</p> : null}
            {error ? <p className='alert alert-danger p2 mt-4 text-center'>Ha habido un error</p> : null}
          </div>
        </div>
      </div>
    </div>
   );
}
 
export default NuevoProducto;