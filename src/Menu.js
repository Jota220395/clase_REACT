import React, { Fragment } from "react";
import "./Menu.css";
import Buscar from "./Buscar";
import PanelAdd from './PanelAdd';

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = { newItemPanel: false };

     this.add = this.add.bind(this);
      this.onCancel= this.onCancel.bind(this);
  }

 add(){
  this.setState({newAlumnoPanel: true});   
 }
 onCancel(){
   this.setState({newAlumnoPanel: false})
 }

  render() {
    return (
      <div className="contenedor">
        <div className="menu">
          {this.props.title}
          <div>
            <Buscar onsearch={this.props.onbuscar} />
          </div>
          <div>
            <button className="boton" onClick={this.add}>Añadir alumno</button>
          </div>
        </div>
        {(this.state.newAlumnoPanel)?
                 <PanelAdd onadd={this.props.onadd} ocultar={this.onCancel} />
                 : 
                 ''
                 }
      </div>
    );
  }
}

export default Menu;
