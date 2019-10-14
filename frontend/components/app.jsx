import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import { Authorized, ProtectedRoute } from '../util/routeUtil';
import SplashForm from './splash/splashForm';
import SignUpForm from './signUp/signUpContainer';
import LogInForm from './logIn/logInContainer';
import QuestionForm from './questions/questionContainer';
// import Modal from './modal/modal'

const App = () => (

    <>

        <Switch>
            
            <Route exact path='/' component={SplashForm} />
            <Authorized exact path='/signup' component={SignUpForm} />
            <Authorized exact path='/login' component={LogInForm} />
            <ProtectedRoute path='/questions' component={QuestionForm} />

        </Switch>
    </>


)
export default App;