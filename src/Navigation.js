import React, { Component } from 'react'
import { NavLink } from "react-router-dom"
import { withRouter } from 'react-router-dom';

class Navigation extends Component {
  render() {
    if (this.props.location.pathname === "/") {
        return <div />
    }

    return (
        <nav class="navbar navbar-default">
            <div class="container-fluid">
                <ul class="nav navbar-nav">
                    <li>
                        <NavLink exact={true} to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/printmaking">Printmaking</NavLink>
                    </li>
                    <li>
                        <NavLink to="/painting">Painting</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
  }
}

export default withRouter(Navigation);