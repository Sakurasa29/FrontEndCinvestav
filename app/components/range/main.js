import React from 'react';
import SubHeader from '../general/subheader';
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

class ParameterRange extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value: [20, 40]
        };
        this.onSliderChange = this.onSliderChange.bind(this);
    }
    componentDidMount(){
        this.props.actions.getParametersRange();
    }
    handleChangeNotification(){

    }
    onSliderChange(value){
        console.log(value);
        this.setState({
            value,
        });
    }
    renderTableofParameters(){
        var parameters = this.props.store.parameters;
            return (
                <div className="contentTable2">
                    <div id="titlePrincipal">Ajustes el rango de los sensores</div>
                    <table className="rangeTable">
                        <tbody>
                        <tr className="tableTitles">
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
                                        <Range allowCross={false} value={this.state.value} onChange={this.onSliderChange}  />
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
            <div className="rangeContainer">            
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