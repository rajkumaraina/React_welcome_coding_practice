import {Component} from 'react'

import loginButton from '../Login'

import logoutButton from '../Logout'

import './index.css'

import {message1, message2} from '../Message'

class Home extends Component {
  state = {login: false}

  buttonClick = () => {
    const {login} = this.state
    if (login === true) {
      this.setState(() => ({login: false}))
      console.log(this.state)
    } else {
      this.setState(() => ({login: true}))
    }
  }

  render() {
    const {login} = this.state
    let messageElement
    let buttonElement
    if (login === true) {
      messageElement = <h1 className="heading">{message1}</h1>
      buttonElement = (
        <button className="button" onClick={this.buttonClick}>
          {logoutButton}
        </button>
      )
    } else {
      messageElement = <h1 className="heading">{message2}</h1>
      buttonElement = (
        <button className="button" onClick={this.buttonClick}>
          {loginButton}
        </button>
      )
    }
    return (
      <div className="container">
        {messageElement}
        {buttonElement}
      </div>
    )
  }
}
export default Home
