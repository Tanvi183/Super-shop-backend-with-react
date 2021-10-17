import React, { Component } from 'react'
import {Route,Switch} from 'react-router-dom'
import AppRoute from './AppRoute'
export default class Router extends Component {
    render() {
        return (
            <Switch>
                <Route path="/login" exact component={require('../Login').default} />

                <AppRoute path="/" exact component={require('../pages/Dashboard').default} />
                
            </Switch>
        )
    }
}
