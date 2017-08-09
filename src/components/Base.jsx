import React from 'react'
import PropTypes from 'prop-types'

class Base extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <div>Header</div>
        {React.cloneElement(this.props.children)}
        <div>Footer</div>
      </div>
    )
  }
}

Base.contextTypes = {
  router: PropTypes.object.isRequired
};

export default Base;
