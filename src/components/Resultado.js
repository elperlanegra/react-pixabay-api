import React, { Component, Fragment } from 'react';

class Resultado extends Component {

    showImagenes = () => {

        const imagenes = this.props.imagenes;

        if(imagenes.length === 0) return null;

        console.log(imagenes)
        
        return (
            <Fragment>
                <div className="col-12 p-5 row">


                </div>
            </Fragment>
        )

    }

    render() { 
        return (
            <Fragment>
                { this.showImagenes() }
            </Fragment>
          );
    }
}
 
export default Resultado;