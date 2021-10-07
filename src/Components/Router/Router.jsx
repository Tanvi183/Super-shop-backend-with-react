import React, { Component } from 'react';
import {Route,Switch} from 'react-router-dom';
import About from '../pages/About';


export default class Router extends Component{
    render(){
        return(
            <Switch>
                <Route path="/" exact component={require('../pages/Dashboard').default} />
                <Route path="/about" exact component={About} />
            </Switch>
        )
    }
}