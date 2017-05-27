import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Base extends React.Component {

  constructor(props) {
    super(props)
    console.log("this.props", this.props);
  }

  render() {
    return (
      <div>
        <div>Base</div>
        {React.cloneElement(this.props.children)}
      </div>
    )
  }
}

Base.contextTypes = {
  router: PropTypes.object.isRequired
};

export default Base;
