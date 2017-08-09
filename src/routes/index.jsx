import React from 'react'
import { Router, Route, IndexRoute, Redirect, browserHistory } from 'react-router'

const asyncComponent = getComponent => (
  class AsyncComponent extends React.Component {
      state = { Component: null }

      componentWillMount() {
        if (this.hasLoadedComponent()) return

        getComponent()
          .then(module => (module.default) ? module.default : module)
          .then((Component) => {
            this.setState({ Component })
          })
          .catch((err) => {
            console.error(`Cannot load component in <AsyncComponent />`)
            throw err
          })
      }

      hasLoadedComponent() {
        return this.state.Component !== null
      }

      render() {
        const { Component } = this.state
        return (Component) ? <Component {...this.props} /> : null
      }
    }
)

export default (
  <Router history={ browserHistory } >
    <Route path="/" component={asyncComponent(() => import('../components/Base'))} >
      <IndexRoute component={asyncComponent(() => import('../components/App'))} />
      <Route path="about" component={asyncComponent(() => import('../components/About'))} />
      <Route path="foo" >
        <IndexRoute component={asyncComponent(() => import('../components/Foo'))} />
        <Route path="home" component={asyncComponent(() => import('../components/Home'))} />
      </Route>
    </Route>
  </Router>
)
