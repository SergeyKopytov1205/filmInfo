import React from "react";
import { Route, Switch, Redirect } from 'react-router-dom';
import ActorContainer from "./pages/actor/ActorContainer";
import FilmContainer from "./pages/film/FilmContainer";

import HomeContainer from './pages/home/HomeContainer'

const Routes = () => {
   return (
      <Switch>
         <Route exact path='/' component={HomeContainer} />
         <Route path='/populars' component={HomeContainer} />
         <Route path='/await' component={HomeContainer} />
         <Route path='/filters' component={HomeContainer} />
         <Route path='/search' component={HomeContainer} />
         <Route path='/film/:slug' component={FilmContainer} />
         <Route path='/name/:slug' component={ActorContainer} />
         <Redirect to='/' />
      </Switch>
   )
}

export default Routes