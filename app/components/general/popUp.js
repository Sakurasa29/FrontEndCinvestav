import React from 'react';

class PopUp extends React.Component {
    render() {
        return (
            <div className="backContainer">
                <div className="popUpContainer">
                    <div className="msg">¿Estas seguro de hacer estos cambios?</div> 
                    <div className="buttonsContainer">
                        <div className="button accept" onClick={this.props.accept}>Aceptar</div> 
                        <div className="button cancel" onClick={this.props.cancel}>Cancelar</div> 
                    </div>
                </div>
            </div>
        );
    }
}

export default PopUp;