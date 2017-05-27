import React, { Component } from 'react';
import { browserHistory } from 'react-router'
// import { Link } from 'react-router'

export default class About extends Component {
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    browserHistory.goBack()
  }

  render() {
    return (
      <div>
        <h2>ABOUT</h2>
        <button onClick={this.handleClick}>Atrás</button>
      </div>
    );
  }
}

// {/* <Link to="/">Inicio</Link> */}
// {/* <button onClick={this.handleClick} >Bac</button> */}
