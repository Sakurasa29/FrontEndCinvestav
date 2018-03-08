import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import AppStore from '../flux/store';
import Tablero from '../components/tablero/main';
import Settings from '../components/settings/main';
import Notifications from '../components/notifications/main';
import Account from '../components/account/main';
import Historic from '../components/historic/main';
import ParameterRange from '../components/range/main';
import Header from '../components/header/main';
import TimeHeader from '../components/timeheader/main';
import Footer from '../components/footer/main';
import actions from '../flux/actions';
import SubHeader from '../components/general/subheader';



function getAppState() {
    return AppStore.getData();
}
class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            store: getAppState()
        }
        this._onChange = this._onChange.bind(this);
    }
    componentDidMount() {
        actions.getUserInfo();   
        AppStore.addChangeListener(this._onChange);
    }
    componentWillUnmount() {
        AppStore.removeChangeListener(this._onChange);
    }
    _onChange() {
       this.setState({store: getAppState()});
    }
    renderMenu(){
        return this.state.store.menuOptions.map((opt, index) => (
            <Link className="linkStyle" key={index} to={opt.path}>
              <div className='menuOption' key={index}>
                  <span className={"ico "+opt.ico}></span>
                  <span className="txtMenu"> {opt.text}</span>
              </div>
            </Link>
        ));
    }
    render() {
        console.log(this.state)
        return (
            <Router>
                <div id="generalDiv">
                    <Header />
                    <div className="barMenu">
                        <TimeHeader />
                        {this.state.store.menuOptions != null ? this.renderMenu() : null}
                    </div>
                    <div className="views">
                        <Switch>
                            <Route path='/tablero' component={Tablero} />
                            <Route path='/historial' component={Historic} />
                            <Route path='/rango' component={ParameterRange} />
                            <Route path='/ajustes' component={Settings} />
                            <Route path='/notificaciones' component={Notifications} />
                            <Route path='/miCuenta' render={(props) => <Account {...this.state.store.userInfo} actions={actions}/>} />
                            <Route render={function (){
                                return <p> Not Found </p>
                            }} />
                        </Switch>
                    </div>
                    <Footer />
                </div>
            </Router>
        );
    }
}

export default App;