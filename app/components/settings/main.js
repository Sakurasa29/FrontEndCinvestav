import React from 'react';
import SubHeader from '../general/subheader';

class Settings extends React.Component {
    renderInfoContainer(){
        return(
            <div className="divConsumo">
                <div>
                    <span className="icon-consumtion2"></span>
                    <span>2500kW</span>                            
                </div>
                <div>
                    <span>Consumo</span>
                </div>
            </div>
        );
    }
    renderRelation(){
        return(
            <div className="relationDiv">
                <div className="title">Ajuste de la Relación de Transformación</div>
                <div className="leftContainer">
                    <span>Relación de Tranformación Actual</span>
                    {this.renderInfoContainer()}                    
                </div>
                <div className="rightContainer">
                    <span>Nueva Relación de Transformación</span>
                    <input></input>
                    <div className="buttonChange">Guardar cambios</div>
                </div>
            </div>
        );
    }
    renderReset(){
        return(
            <div className="resetDiv">
                <div>Resetear valor de consumo</div>
                <div className="left">
                    <span className="title">Consumo actual</span>
                    {this.renderInfoContainer()}
                </div>
                <div className="right">
                    <span>Reset a 0</span>
                    <div className="buttonReset">Reset</div>
                </div>
            </div>
        );
    }
    render() {
        return (
            <div className="settings">
                <SubHeader titulo="Ajustes"/>
                {this.renderRelation()}
                {this.renderReset()}
            </div>
        );
    }
}

export default Settings;