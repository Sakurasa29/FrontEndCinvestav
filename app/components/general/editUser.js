var React = require('react');

class EditUser extends React.Component {
    constructor(props){
        super(props);
        this.deactivatePopUp =this.deactivatePopUp.bind(this);
        this.configCall = this.configCall.bind(this);
        this.state = {
            name: '',
            email: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.saveChanges = this.saveChanges.bind(this);
    }
    configCall(active,name,id, status,note){
        this.props.actions.getConfigCall(false, name,id,status);
    }
    handleChange(event) {
        if(event.target.className=="name")
            this.setState({name: event.target.value});
        else   
            this.setState({email: event.target.value});
    }
    deactivatePopUp(){
        this.setState({email: '', name: ''});
        this.props.actions.editNotificationData(false,"","","");
    }
    saveChanges(){
        if(this.state.name != "" && this.state.email != ""){
            this.props.actions.saveChangesEditUser(this.props.store.editUser.id, this.state.name, this.state.email);
            this.setState({email: '', name: ''});
        }
        else{
            if(this.state.name=="") this.props.actions.saveChangesEditUser(this.props.store.editUser.id, this.props.store.editUser.name, this.state.email);
            if(this.state.email=="") this.props.actions.saveChangesEditUser(this.props.store.editUser.id, this.state.name, this.props.store.editUser.email);
            this.setState({email: '', name: ''});
        }
        
    }
    renderPopUp(){
        return (
            <div className='editUserContainer'>
                <div className="headerEditUser">
                    <div className="tittleContainer">                
                        <span className="title">Editar Datos para Usuario de Notificación</span>
                    </div>
                    <div className="icoContainer">
                        <span className="ico icon-cross" onClick={this.deactivatePopUp}></span>
                    </div>
                </div>
                <div className="divInputs">
                    <span className="titleInput">Nombre: </span>
                    <input type="text" className="name" defaultValue={this.props.store.editUser.name}  onChange={this.handleChange}></input>
                </div>
                <div className="divInputs">
                    <span className="titleInput">Email: </span>
                    <input className="email" defaultValue={this.props.store.editUser.email} onChange={this.handleChange}></input>
                </div>
                <div className="saveContainer">
                    <div className="buttonSave">
                        <span className="textButton" onClick={() => this.saveChanges()}>Guardar</span>
                    </div>
                </div>
            </div>
        );
    }
    render() {
        return(
            
            this.props.store.editUser.active == true ? <div className="frontContainer"> {this.renderPopUp()} </div> : null
            
        );
    }
  }
  export default EditUser;

