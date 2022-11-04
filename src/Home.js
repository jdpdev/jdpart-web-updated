import React, { Component } from 'react'
import { NavLink } from "react-router-dom"

import "./Home.css"

export default class Home extends Component {
  render() {
    return (
      <div className="home-page">
        <NavLink to="/printmaking">
            <div className="section">
                <div className="thumbnail">
                    <img src="https://i.imgur.com/o5II4Ae.jpg" alt="printmaking" />
                </div>
                <div className="title">
                    Prints
                </div>
            </div>
        </NavLink>

        <NavLink to="/drawing">
            <div className="section">
                <div className="thumbnail">
                    <img src="https://i.imgur.com/u8amvho.jpg" alt="drawing" />
                </div>
                <div className="title">
                    Drawing
                </div>
            </div>
        </NavLink>
        
        <NavLink to="/painting">
            <div className="section">
                <div className="thumbnail">
                    <img src="https://i.imgur.com/92t0PLt.jpg" alt="painting" />
                </div>
                <div className="title">
                    Painting
                </div>
            </div>
        </NavLink>
      </div>
    )
  }
}
