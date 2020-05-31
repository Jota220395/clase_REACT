import "./PanelAdd.css";
import React from "react";

class PanelAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: "",
      apellidos: "",
      calificacion: 1,
    };

    this.cancelarAction = this.cancelarAction.bind(this);
    this.crearAlumno = this.crearAlumno.bind(this);
    this.cambiarNombre = this.cambiarNombre.bind(this);
    this.cambiarApellidos = this.cambiarApellidos.bind(this);
    this.cambiarCalificacion = this.cambiarCalificacion.bind(this);
  }

  cancelarAction() {
    this.props.ocultar();
  }
  cambiarNombre(e) {
    this.setState({ nombre: e.target.value });
  }
  cambiarApellidos(e) {
    this.setState({ apellidos: e.target.value });
  }
  cambiarCalificacion(e) {
    const calificacion = parseInt(e.target.value);
    this.setState({ calificacion: calificacion });
  }

  crearAlumno(e) {
    e.preventDefault();
    const nombre = this.state.nombre;
    const apellidos = this.state.apellidos;
    const calificacion = this.state.calificacion;
    this.props.onadd({
      nombre: nombre,
      apellidos: apellidos,
      calificacion: calificacion,
    });
    this.cancelarAction();
  }

  render() {
    return (
      <div className="contenedor">
        <div className="panel">
          <form onSubmit={this.crearAlumno}>
            <label>Nombre:</label>
            <input className="lab" type="text" onChange={this.cambiarNombre} />
            <br />
            <label>apellidos:</label>

            <input
              className="lab"
              type="text"
              onChange={this.cambiarApellidos}
            />
            <br />
            <label>calificación:</label>

            <select onChange={this.cambiarCalificacion}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
            <br />

            <input
              type="submit"
              className="boton_submit"
              value="Registrar alumno"
            />

            <button className="boton_cancelar" onClick={this.props.ocultar}>
              Cancelar
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default PanelAdd;
