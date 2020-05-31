import React from 'react';
import './App.css';
import Menu from './Menu';
import Lista from './Lista.js';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      alumnos:[
        {id:0, calificacion: 4, nombre: 'Marta', apellidos: 'Caballero del Valle'},
        {id:1, calificacion: 3, nombre: 'Juanjo', apellidos: 'Martínez Ruíz'},
        {id:2, calificacion: 7, nombre: 'Ali', apellidos: 'Bahmad'},
        {id:3, calificacion: 9, nombre: 'Araceli', apellidos: 'Laso de la Hermosa'},
        {id:4, calificacion: 5, nombre: 'Vladimir', apellidos: 'Andreevich'},
        {id:5, calificacion: 6, nombre: 'Carlos', apellidos: 'Núñez Blanco'},
        {id:6, calificacion: 5, nombre: 'Kevin', apellidos: 'Miranda Sanz'},
        {id:7, calificacion: 1, nombre: 'Paloma', apellidos: 'Domínguez Santofimia'}
      ],
      copyalumnos:[]
    };
    this.addItem = this.addItem.bind(this);
    this.buscar = this.buscar.bind(this);
    this.eliminar=this.eliminar.bind(this);

    }
    initalumnos(){
      //this.setState({copyfilms: [...this.state.films]});
      this.setState((state,props) => ({
        copyalumnos: [...state.alumnos]
      }));
    }

    componentDidMount(){
      this.initalumnos();
    }

    buscar(query){
      if(query === ''){
        this.setState({copyalumnos: [...this.state.alumnos]});
      }else{
  
        const temp = [...this.state.alumnos];
        var res = [];
        temp.forEach(item =>{
          if(item.nombre.toLowerCase().indexOf(query) > -1){
            res.push(item);
          }
        });
      
        this.setState({copyalumnos: [...res]});
      }
    }

    addItem(item){
      var temp = [...this.state.alumnos];
      const id = temp[temp.length-1].id + 1;
      item['id'] = id;
      temp.push(item);
      this.setState({alumnos: [...temp]});
       this.initalumnos();
     }

     eliminar(id){
      var temp = [...this.state.alumnos];
      const res = temp.filter(item => item.id != id);
      this.setState({alumnos: [...res]});
      this.initalumnos();
     }

  render(){
  return (
    <div className="contenedor_principal">
      <div><Menu title="4ºB" onbuscar={this.buscar} onadd={this.addItem}/></div>
      <div className="listar">
        <Lista alumnos={this.state.alumnos} items={this.state.copyalumnos} oneliminar={this.eliminar}/>
        </div>
    </div>
  );
  }
}

export default App;
