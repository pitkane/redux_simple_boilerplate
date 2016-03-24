import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import * as actions from '../actions'

class Header extends Component {

  authButton() {
    const classes = "ui button"
    if(this.props.authenticated) {
      return (<button className={classes} onClick={() => this.props.authenticate(false)}>Sign Out</button>)
    }
    return (<button className={classes} onClick={() => this.props.authenticate(true)}>Sign In</button>)
  }

  render() {
    return (
      <div className="ui borderless main menu">
        <div className="ui text container">
          <div href="#" className="header item">
            <a href="/">Home</a>
          </div>
          <Link className="item" to="/">Link 1</Link>
          <Link className="item" to="/resources">Link 2</Link>
          <a className="item">{this.authButton()}</a>
        </div>
      </div>


    )
  }
}

function mapsStateToProps(state) {
  return {
    authenticated: state.authenticated
  }
}

// mapsStateToProps, dispatchToProps
export default connect(mapsStateToProps, actions)(Header)
