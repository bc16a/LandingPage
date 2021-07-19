import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Register from './Register'
import Home from './Home';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/register' component={Register} />
            </Switch>
        </BrowserRouter> 
    )
}