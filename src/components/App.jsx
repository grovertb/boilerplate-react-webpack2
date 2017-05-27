import React, { Component } from 'react'
import { Link, browserHistory } from 'react-router'
import styles from './styl/material.styl'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      contador: 0
    }
    this.handleClic = this.handleClic.bind(this)
    console.log("constructorsss")
  }

  componentDidMount() {
    this.setState({
      contador: 1
    })
    console.log("componentDidMount")
  }

  componentWillMount() {
    console.log("componentWillMount")
  }

  componentWillUnmount() {
    console.log("componentWillUnmount")
  }

  handleClic() {
    this.setState({
      contador : this.state.contador + 1
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.jsx</code> and save to reload.
        </p>
        <header>
          Links:
          {' '}<Link to="/">Home</Link>
         {' '}<Link to="/foo">Foo</Link>
         {' '}<Link to="/about">about</Link>
        </header>
        {/* <p>
          {this.state.contador}
        </p>
        <button className={styles.button} onClick={this.handleClic}>Cambiar</button>
        <br/>
        <Link to="/foo">Foo</Link>
        {' '}
        <button onClick={() => browserHistory.push('/foo')}>Go to /foo</button> */}
        {/* <button className={`${styles.panel} ${styles.redbg}`} onClick={this.handleClic}>Cambiar</button> */}
      </div>
    );
  }
}


// export default function App({ children }) {
//   return (
//     <div>
//       <header>
//         Links:
//         {' '}
//         <Link to="/">Home</Link>
//         {' '}
//         <Link to="/foo">Foo</Link>
//         {' '}
//         <Link to="/bar">Bar</Link>
//       </header>
//       <div>
//       </div>
//       <div style={{ marginTop: '1.5em' }}>{children}</div>
//     </div>
//   )
// }
