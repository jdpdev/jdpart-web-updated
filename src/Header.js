import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header>
        <div className="header-title">
          <Link to='/'>
            <h2>jason dupertuis <small>printmaking</small></h2>
          </Link>
        </div>
        <div className="header-nav">
            <Link to='/calendar'>
              upcoming events
            </Link>
            <a href="https://www.etsy.com/shop/jdpprintmaking" target="_blank" rel="noopener noreferrer">store</a>
            <a href="https://www.instagram.com/jdpprintmaking/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <Link to="/contact">
              <FontAwesomeIcon icon={faEnvelope} />
            </Link>
        </div>
    </header>
  )
}
