
import React,{useContext, useMemo} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import {RoutesContext} from '../hoc/routesContext'
import View from './View'
import NoMatch from './NoMatch'

function Main() {

  const routes = useContext(RoutesContext);

  const appRoutes = useMemo(()=>routes.map(({url,content,title}) => (
    <Route key={url} exact path={url}>
      <View  content={content} title={title}/>
    </Route>
  )),[routes]);

  return (
    <Router>

        <Switch>
          {appRoutes}
         <Route path="*">
            <NoMatch />
          </Route>
      </Switch>
  </Router>

  );
}

export default (Main);
