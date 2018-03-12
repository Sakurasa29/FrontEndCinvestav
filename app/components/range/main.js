import React from 'react';
import SubHeader from '../general/subheader';

class ParameterRange extends React.Component {
    componentDidMount(){
        this.props.actions.getParametersRange();
    }
    handleChangeNotification(){

    }
    renderTableofParameters(){
        var parameters = this.props.store.parameters;
            return (
                <div className="contentTable">
                    <div id="titlePrincipal">Ajustes el rango de los sensores</div>
                    <table>
                        <tbody>
                        <tr>
                            <th>Sensor</th>
                            <th>Rango</th>
                            <th>Notificación</th>
                        </tr>
                        {
                            parameters.map((item, index) => (
                                <tr key={index}>
                                    <td className="typeWrap">
                                        <span className="textWrap" style={{background: item.color, border: item.color}}>{item.text}</span>
                                    </td>
                                    <td className="rangeWrap">
                                        <input id="rangeBar" type="range" name="start" min="0" max="1000" step="1" value="0"></input>
                                        <input id="rangeBar" type="range" name="end" min="0" max="1000" step="1" value="50"></input>
                                    </td>
                                    <td className="notificationButtons">
                                        <div className={item.notification === true ? "divCircle active" : "divCircle"}>
                                            <div className={item.notification === true ? "circle active" : "circle"}></div>
                                        </div>
                                    </td>
                                </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            );

    }
    render() {
        return (
            <div className="range">            
                <SubHeader titulo="Rango de parámetros"/>
                {this.props.store.parameters != null ? this.renderTableofParameters() : null}
                <div className="buttonChangeR">
                    Guardar Cambios
                </div>
            </div>
        );
    }
}

export default ParameterRange;