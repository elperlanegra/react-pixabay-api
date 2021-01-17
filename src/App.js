import { Component } from "react";
import Bucador from "./components/Buscador";
import Resultado from "./components/Resultado";


class App extends Component {

  state = {
    termino : '',
    imagenes : []
  }


  consultarApi = () => {
    
    const termino = this.state.termino;

    const url = `https://pixabay.com/api/?key=19911299-ebc621347a15a9756aca773fa&q=${termino}&per_page=30`;

    // console.log(url)

    fetch(url)
      .then( respuesta => respuesta.json() )
      .then( resultado => this.setState({ imagenes : resultado.hits }) )


  }

  datosBusqueda = (termino) => {
   this.setState({
        termino
     }, () => {
       this.consultarApi();
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

        <Resultado 
          imagenes={this.state.imagenes}
        />  


      </div>
    );
  }
}

export default App;
