import React from 'react';


class UserBox extends React.Component {
    render() {
        console.log("lo que llega a userbox",this.props)
        return (
            <div className="userbox">   
                    <div className="header">
                        <div className="iconbox">
                            <div className="icono">
                                <span className="ico icon-user2"/>
                            </div>
                        </div>    
                        <div className="user">
                            <span className="usertype">{this.props.type}</span>
                            <span className="name">{this.props.name}</span>
                        </div>
                    </div>
                    <div className="infouser">
                        <span className="email">{this.props.email}</span>
                        <span onClick={() => this.activatePopUp(name, email)} className="ico icon-edit-user"/>
                    </div>
            </div>
        );
    }
}

export default UserBox;