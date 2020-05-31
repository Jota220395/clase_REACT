import React, { Fragment } from "react";
import "./Buscar.css";

class Buscar extends React.Component {
  constructor(props){
    super(props);

    this.cambiarEvento = this.cambiarEvento.bind(this);
}

cambiarEvento(e){
    const query = e.target.value.toString().toLowerCase();
    this.props.onsearch(query);
}

render(){
    return(
        <input type="text" placeholder="Alumno a buscar" onChange={this.cambiarEvento} />
    );
}
  }
  
  export default Buscar;