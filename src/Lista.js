import React, { Fragment } from "react";
import "./Lista.css";
import Alumnos from './Alumnos.js';

class Lista extends React.Component {
    render(){
    return (
      <div className="contenedor">
        <div><table>
            <thead>
            <tr className="tabla_cabeza">
                <td>
                    Nº Lista
                </td>
                <td>
                    Nombre
                </td>
                <td>
                    Apellidos
                </td>
                <td>
                    Calificación
                </td>
                <td>
                    
                </td>
            </tr>
            </thead>
        </table>
        </div>
          <div>{this.props.alumnos.map(alumno =>
            <Alumnos 
            id = {alumno.id}
            nombre = {alumno.nombre}
            apellidos = {alumno.apellidos}
            calificacion = {alumno.calificacion}
            oneliminar = {this.props.oneliminar}
            />
            )}
            </div>
          
      </div>
    );
    }
  }
  
  export default Lista;