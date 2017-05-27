import React from 'react';
import { Router, Route, IndexRoute, Redirect, browserHistory } from 'react-router'
import { Base, App, Home, About, Foo } from '../components'

export default (
  <Router history={ browserHistory } >
    <Route path="/" component={Base} >
      <IndexRoute component={App} />
      <Route path="about" component={About} />
      <Route path="foo" >
        <IndexRoute component={Foo} />
        <Route path="home" component={Home} />
      </Route>
    </Route>
  </Router>
)
