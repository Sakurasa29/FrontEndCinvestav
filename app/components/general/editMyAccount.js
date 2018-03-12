var React = require('react');

class EditMyAccount extends React.Component {
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
        this.props.actions.editMyAccountData(false,"","","");
    }
    saveChanges(){
        if(this.state.name != "" && this.state.email != ""){
            this.props.actions.saveChangesEditMyAccount(this.props.store.editAccount, this.state.name, this.state.email);
            this.setState({email: '', name: ''});
        }
        else{
            if(this.state.name=="") this.props.actions.saveChangesEditMyAccount(this.props.store.editAccount.name, this.state.email);
            if(this.state.email=="") this.props.actions.saveChangesEditMyAccount(this.state.name, this.props.store.editAccount.email);
            this.setState({email: '', name: ''});
        }
        
    }
    renderPopUp(){
        return (
            <div className='editUserContainer'>
                <div className="headerEditUser">
                    <div className="tittleContainer">                
                        <span className="title">Editar Datos de Usuario</span>
                    </div>
                    <div className="icoContainer">
                        <span className="ico icon-cross" onClick={this.deactivatePopUp}></span>
                    </div>
                </div>
                <div className="divInputs">
                    <span className="titleInput">Nombre: </span>
                    <input type="text" className="name" defaultValue={this.props.store.editAccount.name}  onChange={this.handleChange}></input>
                </div>
                <div className="divInputs">
                    <span className="titleInput">Email: </span>
                    <input className="email" defaultValue={this.props.store.editAccount.email} onChange={this.handleChange}></input>
                </div>
                <div className="buttonC">
                    <div className="buttonSave">
                        <span className="textButton" onClick={() => this.saveChangesEditMyAccount()}>Guardar</span>
                    </div>
                </div>
            </div>
        );
    }
    render() {
        return(
            
            this.props.store.editAccount.active == true ? <div className="frontContainer"> {this.renderPopUp()} </div> : null
            
        );
    }
  }
  export default EditMyAccount;

