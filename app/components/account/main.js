import React from 'react';
import SubHeader from '../general/subheader';
import UserBox from '../account/userbox.js';
import EditMyAccount from '../general/editMyAccount';


class Account extends React.Component {
    constructor(props){
       super(props);
        this.activatePopUp =this.activatePopUp.bind(this);
    }
    componentDidMount() {
        this.props.actions.getMyAccount();
      }
    activatePopUp(name, email){
        this.props.actions.editMyAccountData(name,email);
    }

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
                            <span>Salir</span>
                        </div>
                        <div className="buttonAdd">
                            <span className="ico icon-add-user-button"/>
                            <span>Agregar Usuario</span>
                        </div>
                    </div>
                </div>
                <EditMyAccount {...this.props}/>
            </div>
        );
    }
}

export default Account;