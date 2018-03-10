import React from 'react';
import SubHeader from '../general/subheader';
import UserBox from '../account/userbox.js';

class Account extends React.Component {
    render() {
        console.log(this.props)
        return (
            <div className="account">
            <SubHeader titulo="Mi Cuenta"/>  
                <div className="contentAccount"> 
                    <div className="contentUserBox">
                        <UserBox {...this.props}/> 
                    </div>
                    <div className="contentButtons">   
                        <div className="buttonSalir">
                            <span className="ico icon-logout"/>
                            <span className="exit">Salir</span>
                        </div>
                        <div className="buttonAdd">
                            <span className="ico icon-add-user-button"/>
                            <span className="add">Agregar Usuario</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Account;