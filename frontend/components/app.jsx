import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
// import { Authorized, ProtectedRoute } from '../util/routeUtil';
import SplashForm from './splash/splashForm';

// import Modal from './modal/modal'

const App = () => (

    <>

        <Switch>
            
            <Route exact path='/' component={SplashForm} />
      
        </Switch>
    </>


)
export default App;