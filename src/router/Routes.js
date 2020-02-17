import React from 'react';


import {Switch, Route} from "react-router-dom";

import Home from './../pages/Home';
import MovieDetail from './../pages/MovieDetail'

let Routes = (props) =>
    <Switch>
        <Route path={"/movie/:id"} component={MovieDetail}/>
        <Route exact path={"/"}>
            <Home/>
        </Route>
    </Switch>;

export default Routes;