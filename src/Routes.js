import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import ChildComponent from './ChildComponent';
import ParentComponent from './ParentComponent';

const Routes = () => (
<BrowserRouter>
    <Switch>
        <Route exact path='/' component={ParentComponent} />
        <Route path='/child' component={ChildComponent} />
    </Switch>
</BrowserRouter>
);

export default Routes;
