import { Component } from "react";
import Bucador from "./components/Buscador";

class App extends Component {
  datosBusqueda = (termino) => {
    console.log(termino)
  };

  rende() {
    return (
      <div className="app container">
        <div className="jumbotron">
          <p className="lead text-center">Buscador de Imágenes</p>
          <Bucador mensaje={this.datosBusqueda} />
        </div>
      </div>
    );
  }
}

export default App;
