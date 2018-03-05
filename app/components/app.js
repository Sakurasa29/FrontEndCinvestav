import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Tablero from '../components/tablero/main';
import Settings from '../components/settings/main';
import Header from '../components/header/main';
import Footer from '../components/footer/main';

class App extends React.Component {
    
    renderMenu(){
        return(
            <div className="barMenu">
                <Link to={'/tablero'}>
                    <div className="menuOption">
                        <span> </span>
                        <span>Tablero </span>
                    </div>
                </Link>
                <Link to={'/ajustes'}>
                    <div className="menuOption">
                        <span> </span>
                        <span>Ajustes </span>
                    </div>
                </Link>
            </div>
        );
    }
    render() {
        return (
            <Router>
                <div id="generalDiv">
                    <Header />
                    {this.renderMenu()}
                    <div className="views">
                        <Switch>
                            <Route path='/tablero' component={Tablero} />
                            <Route path='/historial' component={Tablero} />
                            <Route path='/rango' component={Tablero} />
                            <Route path='/ajustes' component={Settings} />
                            <Route path='/notificaciones' component={Tablero} />
                            <Route path='/miCuenta' component={Tablero} />
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