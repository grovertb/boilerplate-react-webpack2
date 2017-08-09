import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router'

class Foo extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <div>I am Foo!</div>
        <Link to="/foo/home">Foo/home</Link>
      </div>
    )
  }
}

Foo.contextTypes = {
  router: PropTypes.object.isRequired
};

export default Foo
