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
            <a href="https://www.etsy.com/shop/jdpdraws" target="_blank" rel="noopener noreferrer">store</a>
            <a href="https://www.instagram.com/jdpdraws/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="mailto:jdpart@jasondupertuis.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
        </div>
    </header>
  )
}
