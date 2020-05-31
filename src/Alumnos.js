import React from "react";
import "./Alumnos.css";

class Alumnos extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nombre: "",
      apellidos: "",
      calificacion: 1,
      stars: [],
    };
    this.oneliminar = this.oneliminar.bind(this);
  }

  componentDidMount() {
    this.setState({
      id: this.props.id,
      nombre: this.props.nombre,
      apellidos: this.props.apellidos,
      calificacion: parseInt(this.props.calificacion),
    });
  }

  oneliminar(e) {
    console.log(this.props.id);
    this.props.oneliminar(this.props.id);
  }
  render() {
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <td>{this.props.id}</td>
              <td>{this.props.nombre}</td>
              <td>{this.props.apellidos}</td>
              <td >{this.props.calificacion}
              {(this.props.calificacion<5)?
                <img src="suspenso.png"/>
              :
              <img src="aprobado.jpg"/>}
              </td>
              <td>
                <button onClick={this.oneliminar} className="btn-eliminar">Eliminar</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Alumnos;
