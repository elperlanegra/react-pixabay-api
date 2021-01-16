import { Component } from "react";
import Bucador from "./components/Buscador";

class App extends Component {

  state = {
    termino : 'Café'
  }

  datosBusqueda = (termino) => {
   this.state({
        termino
     })
  }

  render() {
    return (
      <div className="app container">
        <div className="jumbotron">
          <p className="lead text-center">Buscador de Imágenes</p>
          <Bucador

           datosBusqueda={this.datosBusqueda} 

           />
        </div>
        {this.state.termino}
      </div>
    );
  }
}

export default App;
