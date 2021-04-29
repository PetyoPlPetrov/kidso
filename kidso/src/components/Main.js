
import React,{useContext, useMemo} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import {RoutesContext} from '../hoc/routesContext'
import Page from './View'
import NoMatch from './NoMatch'

function Main() {

  const routes = useContext(RoutesContext);
  const appRoutes = useMemo(()=>routes.map(({url,content,...props}) => (
    <Route key={url} exact path={url}>
      <Page key={url} content={content} {...props}/>
    </Route>
  )),[routes]);

  const appLinks = useMemo(()=>(
    routes.map(route=><div key={route.url}><Link key={route.url} to={route.url}>{route.url}</Link></div> )
  ),[routes])

  return (
    <Router>
        <Switch>
          {appRoutes}
          <Route exact path='/'>
          {appLinks}
          </Route>
         <Route path="*">
            <NoMatch />
          </Route>
      </Switch>
  </Router>

  );
}

export default (Main);
