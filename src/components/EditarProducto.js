import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editarProductoAction } from "../actions/productoActions";

const EditarProducto = () => {
  const [producto, guardarProducto] = useState({
    nombre: "",
    precio: "",
  });

  const productoEditar = useSelector((state) => state.productos.productoEditar);
  // if (!producto) return null;
  const { nombre, precio, id } = producto;

  const submitEditarProducto = (e) => {
    e.preventDefault();
    editarProductoAction();
  };

  useEffect(() => {
    guardarProducto(productoEditar);
  }, [productoEditar]);

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              Editar producto
            </h2>
            <form onSubmit={submitEditarProducto}>
              <div className="form-group">
                <label>Producto</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre del producto"
                  name="nombre"
                  value={nombre}
                />
              </div>
              <div className="form-group">
                <label>Precio</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Precio del producto"
                  name="precio"
                  value={precio}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
              >
                Guardar cambios
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditarProducto;
